import React from 'react';
import {StyleRule} from '@vanilla-extract/css';
import {CSSTransition} from 'react-transition-group';

/**
 * Utility type to extract the `CSSTransitionClassNames` type from the
 * CSSTransition `classNames` union.
 */
type ExtractClassNames<T> = T extends string
  ? never
  : T extends undefined
  ? never
  : T;

/**
 * Type for the CSSTransition `classNames` prop.
 */
type CSSTransitionClassNames = ExtractClassNames<
  React.ComponentProps<typeof CSSTransition>['classNames']
>;

/**
 * Recreation of the Vanilla Extract type used for validating the `styleVariants` API:
 * https://github.com/seek-oss/vanilla-extract/blob/d101b43546ce4d94b1ef51cb3fe89ff7901a5947/packages/css/src/style.ts#L22
 */
type ComplexStyleRule = StyleRule | (StyleRule | ClassNames)[];
type ClassNames = string | ClassNames[];

/**
 * Map of `react-transition-group` `classNames` to `vanilla-extract` style rules to
 * be passed as a type argument to the `styleVariants` generic.
 * @example
 * import {styleVariants} from '@vanilla-extract/css'
 * import type {TransitionStyleVariants} from './utilities/motion'
 *
 * const variant = styleVariants<TransitionStyleVariants>({
 *   enterActive: {...},
 *   enterDone: {...},
 *   // etc...
 * })
 */
export type TransitionStyleVariants = {
  [K in 'initial' | keyof CSSTransitionClassNames]: ComplexStyleRule;
};
