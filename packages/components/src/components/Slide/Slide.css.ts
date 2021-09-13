import {createVar, styleVariants} from '@vanilla-extract/css';

import type {TransitionStyleVariants} from '../../utilities/motion';

export const slideDurationVar = createVar();
export const slideEasingVar = createVar();
export const slideDirectionVar = createVar();
export const slideDistanceVar = createVar();

const transition = `
  opacity ${slideDurationVar} ${slideEasingVar},
  transform ${slideDurationVar} ${slideEasingVar}
`;

export const transitions = styleVariants<TransitionStyleVariants>({
  entering: {
    opacity: 0,
    transform: slideDirectionVar,
    transition,
  },

  entered: {
    opacity: 1,
    transform: 'translate(0px, 0px)',
    transition,
  },

  exiting: {
    opacity: 1,
    transform: 'translate(0px, 0px)',
    transition,
  },

  exited: {
    opacity: 0,
    transform: slideDirectionVar,
    transition,
  },

  unmounted: {
    opacity: 0,
    transform: slideDirectionVar,
  },
});
