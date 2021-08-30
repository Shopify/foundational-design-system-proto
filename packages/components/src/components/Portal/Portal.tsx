import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

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
}

type PolymorphicPortal = Polymorphic.ForwardRefComponent<'div', Props>;

export type PortalProps = Polymorphic.OwnProps<PolymorphicPortal>;

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */
export const Portal = React.forwardRef(function Portal(props, ref) {
  const {as: Component = 'div', className, container, ...restProps} = props;

  const {themeClass} = useTheme();

  return ReactDOM.createPortal(
    <Component
      ref={ref}
      className={clsx(themeClass, className)}
      {...restProps}
    />,
    container ?? document.body,
    props.key,
  );
}) as PolymorphicPortal;
