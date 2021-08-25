import React from 'react';
import ReactDOM from 'react-dom';

import {useForkRef, useIsomorphicLayoutEffect} from '../../hooks';
import {isValidElementWithRef, setRef} from '../../utilities';

type Instance = Parameters<typeof ReactDOM.findDOMNode>[0];
type Container = Instance | (() => Instance) | null;

export interface PortalProps {
  key?: string | null;
  children?: React.ReactNode;

  /**
   * An HTML element, component instance, or function that returns either.
   * The `Portal`'s children will be appended to the `container`.
   *
   * `document.body` is applied by default.
   */
  container?: Container;

  /**
   * Disables the portal allowing the children to stay within their
   * current DOM hierarchy.
   */
  disablePortal?: boolean;
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */
export const Portal = React.forwardRef<Element, PortalProps>(function Portal(
  props,
  ref,
) {
  const {children, container: containerProp, disablePortal = false} = props;

  const [container, setContainer] = React.useState<null | Element>(null);

  useIsomorphicLayoutEffect(() => {
    if (!disablePortal) {
      const node = ReactDOM.findDOMNode(
        typeof containerProp === 'function' ? containerProp() : containerProp,
      );

      setContainer(node instanceof Element ? node : document.body);
    }
  }, [containerProp, disablePortal]);

  useIsomorphicLayoutEffect(() => {
    if (container && !disablePortal) {
      setRef(ref, container);
      return () => {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [ref, container, disablePortal]);

  const forkRef = useForkRef(
    isValidElementWithRef(children) ? children.ref : null,
    ref,
  );

  if (disablePortal) {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ref: forkRef,
      });
    }

    return <>{children}</>;
  }

  return container
    ? ReactDOM.createPortal(children, container, props.key)
    : container;
});

export default Portal;
