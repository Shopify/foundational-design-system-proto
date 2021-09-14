import {createVar, styleVariants} from '@vanilla-extract/css';

import type {TransitionStyleVariants} from '../../utilities/motion';

export const slideDurationAppearVar = createVar();
export const slideDurationEnterVar = createVar();
export const slideDurationExitVar = createVar();
export const slideEasingVar = createVar();
export const slideDirectionStartVar = createVar();
export const slideDistanceVar = createVar();

const getTransition = (duration: ReturnType<typeof createVar>) => `
  opacity ${duration} ${slideEasingVar},
  transform ${duration} ${slideEasingVar}
`;

export const transitions = styleVariants<TransitionStyleVariants>({
  initial: {
    opacity: 0,
    transform: slideDirectionStartVar,
  },
  appear: {
    opacity: 0,
    transform: slideDirectionStartVar,
  },
  appearActive: {
    opacity: 1,
    transform: 'translate(0px, 0px)',
    transition: getTransition(slideDurationAppearVar),
  },
  appearDone: {
    opacity: 1,
    transform: 'translate(0px, 0px)',
  },
  enter: {
    opacity: 0,
    transform: slideDirectionStartVar,
  },
  enterActive: {
    opacity: 1,
    transform: 'translate(0px, 0px)',
    transition: getTransition(slideDurationEnterVar),
  },
  enterDone: {
    opacity: 1,
    transform: 'translate(0px, 0px)',
  },
  exit: {
    opacity: 1,
    transform: 'translate(0px, 0px)',
  },
  exitActive: {
    opacity: 0,
    transform: slideDirectionStartVar,
    transition: getTransition(slideDurationExitVar),
  },
  exitDone: {
    opacity: 0,
    transform: slideDirectionStartVar,
  },
});
