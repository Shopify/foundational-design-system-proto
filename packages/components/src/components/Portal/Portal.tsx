import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {useMergeRefs, useIsomorphicLayoutEffect} from '../../hooks';
import {isValidElementWithRef, assignRef} from '../../utilities';
import {useTheme} from '../../theme';

interface Props {
  key?: string | null;
  children?: React.ReactNode;

  /**
   * An HTML Element the `Portal`'s children will be appended to.
   *
   * `document.body` is applied by default.
   */
  container?: Element;

  /**
   * Disables the portal allowing the children to stay within their
   * current DOM hierarchy.
   */
  disablePortal?: boolean;
}

type PolymorphicPortal = Polymorphic.ForwardRefComponent<'div', Props>;

export type PortalProps = Polymorphic.OwnProps<PolymorphicPortal>;

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Derived from Material-UI's [Portal](https://github.com/mui-org/material-ui/blob/120c564109245a3b070b1cbaf2c9f3f8659fd9fa/packages/material-ui/src/Portal/Portal.js#L21)
 */
export const Portal = React.forwardRef(function Portal(props, ref) {
  const {
    as: Component = 'div',
    children,
    className,
    container: containerProp,
    disablePortal = false,
    ...restProps
  } = props;

  const [container, setContainer] = React.useState<null | Element>(null);
  const {themeClass} = useTheme();

  useIsomorphicLayoutEffect(() => {
    if (!disablePortal) {
      setContainer(containerProp || document.body);
    }
  }, [containerProp, disablePortal]);

  useIsomorphicLayoutEffect(() => {
    if (container && !disablePortal) {
      assignRef(ref, container);

      return () => {
        assignRef(ref, null);
      };
    }

    return undefined;
  }, [ref, container, disablePortal]);

  const mergedRefs = useMergeRefs(
    isValidElementWithRef(children) ? children.ref : null,
    ref,
  );

  const rootProps = {
    ...restProps,
    className: clsx(themeClass, className),
  };

  if (disablePortal) {
    let content = children;

    if (React.isValidElement(children)) {
      content = React.cloneElement(children, {
        ref: mergedRefs,
      });
    }

    return <Component {...rootProps}>{content}</Component>;
  }

  return container
    ? ReactDOM.createPortal(
        <Component {...rootProps}>{children}</Component>,
        container,
        props.key,
      )
    : container;
}) as PolymorphicPortal;
