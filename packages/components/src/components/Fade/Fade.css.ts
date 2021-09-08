import {StyleRule, styleVariants} from '@vanilla-extract/css';
import {TransitionStatus} from 'react-transition-group';

type ClassNames = string | ClassNames[];

type ComplexStyleRule = StyleRule | (StyleRule | ClassNames)[];

export const fade = styleVariants<{[K in TransitionStatus]: ComplexStyleRule}>({
  entering: {
    opacity: 0,
  },

  entered: {
    opacity: 1,
    transition: 'opacity 200ms',
  },

  exiting: {
    opacity: 1,
  },

  exited: {
    opacity: 0,
    transition: 'opacity 200ms',
  },

  unmounted: {
    opacity: 0,
    transition: 'opacity 200ms',
  },
});
