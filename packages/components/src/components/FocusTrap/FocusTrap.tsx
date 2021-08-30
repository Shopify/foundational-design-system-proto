import React from 'react';

import {useMergeRefs} from '../../hooks';
import {ownerDocument} from '../../utilities';

export interface FocusTrapProps {
  //
  /**
   * If `true`, focus is locked.
   */
  open: boolean;

  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable?: (root: HTMLElement | null) => Element[];

  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple trap focus mounted at the same time.
   * @default function defaultIsEnabled() {
   *   return true;
   * }
   */
  isEnabled?: () => boolean;

  /**
   * A single child content element.
   */
  children?: React.ReactElement<any, any>;

  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus?: boolean;

  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus?: boolean;

  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden.
   * @default false
   */
  disableRestoreFocus?: boolean;
}

// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');

function getTabIndex(element: Element) {
  const tabindexAttr = element.getAttribute('tabindex');
  const tabindex = tabindexAttr ? parseInt(tabindexAttr, 10) : NaN;

  if (!Number.isNaN(tabindex)) {
    return tabindex;
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.
  if (
    (element instanceof HTMLElement && element.contentEditable === 'true') ||
    ((element.nodeName === 'AUDIO' ||
      element.nodeName === 'VIDEO' ||
      element.nodeName === 'DETAILS') &&
      element.getAttribute('tabindex') === null)
  ) {
    return 0;
  }

  // Determine if 0 is the appropriate fallback value for this element
  return element instanceof HTMLElement || element instanceof SVGElement
    ? element.tabIndex
    : 0;
}

function isNonTabbableRadio(element: Element & {type?: string; name?: string}) {
  if (element.tagName !== 'INPUT' || element.type !== 'radio') {
    return false;
  }

  if (!element.name) {
    return false;
  }

  const getRadio = (selector: string) =>
    element.ownerDocument.querySelector(`input[type="radio"]${selector}`);

  let roving = getRadio(`[name="${element.name}"]:checked`);

  if (!roving) {
    roving = getRadio(`[name="${element.name}"]`);
  }

  return roving !== element;
}

function isNodeMatchingSelectorFocusable(
  element: Element & {disabled?: boolean; type?: string},
) {
  if (
    element.disabled ||
    (element.tagName === 'INPUT' && element.type === 'hidden') ||
    isNonTabbableRadio(element)
  ) {
    return false;
  }

  return true;
}

function defaultGetTabbable(root: HTMLElement | null) {
  if (!root) return [];

  const regularTabNodes: Element[] = [];

  const orderedTabNodes: {
    documentOrder: number;
    tabIndex: number;
    element: Element;
  }[] = [];

  Array.from(root.querySelectorAll(candidatesSelector)).forEach(
    (element, i) => {
      const tabIndex = getTabIndex(element);

      if (tabIndex === -1 || !isNodeMatchingSelectorFocusable(element)) {
        return;
      }

      if (tabIndex === 0) {
        regularTabNodes.push(element);
      } else {
        orderedTabNodes.push({
          documentOrder: i,
          tabIndex,
          element,
        });
      }
    },
  );

  return orderedTabNodes
    .sort((elementA, elementB) =>
      elementA.tabIndex === elementB.tabIndex
        ? elementA.documentOrder - elementB.documentOrder
        : elementA.tabIndex - elementB.tabIndex,
    )
    .map((sorted) => sorted.element)
    .concat(regularTabNodes);
}

function defaultIsEnabled() {
  return true;
}

/**
 * Utility component that locks focus inside the component.
 */
export function FocusTrap(props: FocusTrapProps) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open,
  } = props;

  const ignoreNextEnforceFocus = React.useRef<undefined | boolean>();
  const sentinelStart = React.useRef<null | HTMLDivElement>(null);
  const sentinelEnd = React.useRef<null | HTMLDivElement>(null);
  const elementToRestoreFocus = React.useRef<null | EventTarget>(null);
  const reactFocusEventTarget = React.useRef<null | EventTarget>(null);

  // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.
  const canAutoFocus = React.useRef(false);

  const rootRef = React.useRef<null | HTMLElement>(null);

  const mergedRef = useMergeRefs(
    React.isValidElement(children)
      ? (children as {ref?: React.Ref<unknown>})?.ref
      : null,
    rootRef,
  );

  const lastKeydown = React.useRef<null | KeyboardEvent>(null);

  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    canAutoFocus.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);

  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);

    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        // eslint-disable-next-line no-warning-comments
        // TODO: We should conditionally log this in pre-production.
        console.error(
          [
            'The modal content node does not accept focus.',
            'For the benefit of assistive technologies, ' +
              'the tabIndex of the node is being set to "-1".',
          ].join('\n'),
        );

        rootRef.current.setAttribute('tabIndex', '-1');
      }

      if (canAutoFocus.current) {
        rootRef.current.focus();
      }
    }

    return () => {
      // Restore focus to the element in focus before focus was trapped.
      if (!disableRestoreFocus) {
        if (elementToRestoreFocus.current) {
          ignoreNextEnforceFocus.current = true;
          (elementToRestoreFocus.current as {focus?: () => void})?.focus?.();
        }

        elementToRestoreFocus.current = null;
      }
    };
    // Missing `disableRestoreFocus` which is intentional.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);

    const contain = (focusEvent?: FocusEvent) => {
      // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.
      if (rootRef.current === null) {
        return;
      }

      if (
        !doc.hasFocus() ||
        disableEnforceFocus ||
        !isEnabled() ||
        ignoreNextEnforceFocus.current
      ) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (!rootRef.current.contains(doc.activeElement)) {
        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (
          (focusEvent && reactFocusEventTarget.current !== focusEvent.target) ||
          doc.activeElement !== reactFocusEventTarget.current
        ) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }

        if (!canAutoFocus.current) {
          return;
        }

        let tabbable: Element[] = [];

        if (
          doc.activeElement === sentinelStart.current ||
          doc.activeElement === sentinelEnd.current
        ) {
          tabbable = getTabbable(rootRef.current);
        }

        if (tabbable.length > 0) {
          const isShiftTab = Boolean(
            lastKeydown.current?.shiftKey && lastKeydown.current?.key === 'Tab',
          );

          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];

          if (isShiftTab && focusPrevious) {
            (focusPrevious as {focus?: () => void})?.focus?.();
          } else if (focusNext) {
            (focusNext as {focus?: () => void})?.focus?.();
          }
        } else {
          rootRef.current.focus();
        }
      }
    };

    const loopFocus = (keyboardEvent: KeyboardEvent) => {
      lastKeydown.current = keyboardEvent;

      if (disableEnforceFocus || !isEnabled() || keyboardEvent.key !== 'Tab') {
        return;
      }

      // Make sure the next tab starts from the right place.
      // doc.activeElement refers to the origin.
      if (doc.activeElement === rootRef.current && keyboardEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        sentinelEnd.current?.focus();
      }
    };

    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true);

    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      if (doc?.activeElement?.tagName === 'BODY') {
        contain();
      }
    }, 50);

    return () => {
      clearInterval(interval);

      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [
    disableAutoFocus,
    disableEnforceFocus,
    disableRestoreFocus,
    isEnabled,
    open,
    getTabbable,
  ]);

  const onFocus: React.FocusEventHandler<unknown> = (event) => {
    if (elementToRestoreFocus.current === null) {
      elementToRestoreFocus.current = event.relatedTarget;
    }

    canAutoFocus.current = true;
    reactFocusEventTarget.current = event.target;

    children?.props?.onFocus?.(event);
  };

  const handleFocusSentinel: React.FocusEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (elementToRestoreFocus.current === null) {
      elementToRestoreFocus.current = event.relatedTarget;
    }

    canAutoFocus.current = true;
  };

  return (
    <>
      <div
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onFocus={handleFocusSentinel}
        ref={sentinelStart}
        data-test="sentinelStart"
      />
      {children && React.cloneElement(children, {ref: mergedRef, onFocus})}
      <div
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onFocus={handleFocusSentinel}
        ref={sentinelEnd}
        data-test="sentinelEnd"
      />
    </>
  );
}
