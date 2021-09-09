import {styleVariants} from '@vanilla-extract/css';

import type {TransitionStyleVariants} from '../../utilities/motion';

export type Direction = 'top' | 'right' | 'bottom' | 'left';

export const DURATION = 500;

const directionTransforms: [Direction, string][] = [
  ['top', 'translate(0px, -200px)'],
  ['right', 'translate(200px, 0px)'],
  ['bottom', 'translate(0px, 200px)'],
  ['left', 'translate(-200px, 0px)'],
];

export const directions: {
  [K in Direction]?: ReturnType<typeof styleVariants>;
} = {};

const transition = `opacity ${DURATION}ms ease-in-out, transform ${DURATION}ms ease-in-out`;

directionTransforms.forEach((config) => {
  const [direction, transform] = config;

  directions[direction] = styleVariants<TransitionStyleVariants>({
    entering: {
      opacity: 0,
      transform,
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
      transform,
      transition,
    },

    unmounted: {
      opacity: 0,
      transform,
    },
  });
});
