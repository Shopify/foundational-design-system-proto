import {styleVariants} from '@vanilla-extract/css';

import type {TransitionStyleVariants} from '../../utilities/motion';

// eslint-disable-next-line no-warning-comments
// TODO: Add `--slide-curve` custom property to enable custom or themed timing functions.
const transition = `opacity var(--slide-duration) ease-in-out, transform var(--slide-duration) ease-in-out`;

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
