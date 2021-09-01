import React from 'react';
import {FocusOn} from 'react-focus-on';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

type FocusOnProps = React.ComponentProps<typeof FocusOn>;

interface Props {
  children: React.ReactNode;

  /**
   * The main switch
   */
  enabled?: FocusOnProps['enabled'];

  /**
   * Controls scroll lock behavior
   */
  scrollLock?: FocusOnProps['scrollLock'];

  /**
   * Controls focus lock behavior
   */
  focusLock?: FocusOnProps['focusLock'];

  /**
   * [focus-lock] Control autofocus
   * @default true
   */
  autoFocus?: FocusOnProps['autoFocus'];

  /**
   * [focus-lock] Control returnFocus
   * @default true
   */
  returnFocus?: FocusOnProps['returnFocus'];

  /**
   * [focus-lock] Allows "ignoring" focus on some elements
   * @see {@link https://github.com/theKashey/react-focus-lock#api}
   */
  shouldIgnore?: (candidate: HTMLElement) => boolean;

  /**
   * Action to perform on Esc key press
   */
  onEscapeKey?: (event: Event) => void;

  /**
   * Action to perform on click outside
   */
  onClickOutside?: (event: MouseEvent | TouchEvent) => void;

  /**
   * Callback on lock activation
   * @param node The main node
   */
  onActivation?: (node: HTMLElement) => void;

  /**
   * Callback on lock deactivation
   */
  onDeactivation?: () => void;

  /**
   * [scroll-lock] Control isolation
   * @see {@link https://github.com/theKashey/react-remove-scroll#usage}
   */
  noIsolation?: boolean;

  /**
   * [scroll-lock] Full page inert (event suppression)
   * @default false
   * @see {@link https://github.com/theKashey/react-remove-scroll#usage}
   */
  inert?: boolean;

  /**
   * [scroll-lock] Allows scroll based zoom
   * @default false
   * @see https://github.com/theKashey/react-remove-scroll#usage
   */
  allowPinchZoom?: boolean;
}

// Default React.ElementType derived from the following declaration file:
// https://github.com/theKashey/react-focus-on/blob/50c6059db9365934603e1d3074daf8298442c8c2/src/types.ts#L88-L92
type PolymorphicFocusLock = Polymorphic.ForwardRefComponent<'div', Props>;

export type FocusLockProps = Polymorphic.OwnProps<PolymorphicFocusLock>;

export const FocusLock = React.forwardRef((props, ref) => {
  return <FocusOn ref={ref} {...props} />;
}) as PolymorphicFocusLock;
