import {styleVariants} from '@vanilla-extract/css';

import type {TransitionStyleVariants} from '../../utilities/motion';

const transition = `
  opacity var(--slide-duration) var(--slide-easing),
  transform var(--slide-duration) var(--slide-easing)
`;

export const transitions = styleVariants<TransitionStyleVariants>({
  entering: {
    opacity: 0,
    transform: 'var(--slide-direction)',
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
    transform: 'var(--slide-direction)',
    transition,
  },

  unmounted: {
    opacity: 0,
    transform: 'var(--slide-direction)',
  },
});
