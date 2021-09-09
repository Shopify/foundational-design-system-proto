import {StyleRule} from '@vanilla-extract/css';
import {TransitionStatus} from 'react-transition-group';

/**
 * Recreation of the Vanilla Extract type used for validating the `styleVariants` API:
 * https://github.com/seek-oss/vanilla-extract/blob/d101b43546ce4d94b1ef51cb3fe89ff7901a5947/packages/css/src/style.ts#L22
 */
type ComplexStyleRule = StyleRule | (StyleRule | ClassNames)[];
type ClassNames = string | ClassNames[];

/**
 * Map of `react-transition-group` statuses to `vanilla-extract` style rules to
 * be passed as a type argument to the `styleVariants` generic.
 * @example
 * import {styleVariants} from '@vanilla-extract/css'
 * import type {TransitionStyleVariants} from './utilities/motion'
 *
 * const variant = styleVariants<TransitionStyleVariants>({
 *   entering: {...},
 *   entered: {...},
 *   // etc...
 * })
 */
export type TransitionStyleVariants = {
  [K in TransitionStatus]: ComplexStyleRule;
};
