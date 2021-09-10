import React from 'react';
import {CSSTransition} from 'react-transition-group';
import clsx from 'clsx';

import {defaultVars} from '../../theme/vars.css';

import * as styles from './Slide.css';

type Direction = 'top' | 'right' | 'bottom' | 'left';

type Distance = number | string;

type Duration = number | keyof typeof defaultVars.motion.duration;

type MotionEasing = keyof typeof defaultVars.motion.easing;

type Easing = string | MotionEasing;

export interface SlideProps {
  in: boolean;

  /**
   * The content of the Modal (e.g. `<div />`).
   * It should be only one element that accepts a `className` and `ref` prop.
   */
  children: NonNullable<React.ReactElement>;
  direction?: Direction;
  distance?: Distance;
  duration?: Duration;
  easing?: Easing;
}

export const Slide = (props: SlideProps) => {
  const {
    in: inProp,
    children,
    direction = 'bottom',
    duration = 300,
    distance = 200,
    easing = 'easeInOut',
  } = props;

  const ref = React.useRef<null | HTMLElement>(null);
  const [transitionDuration, setTransitionDuration] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setTransitionDuration(getTransitionDuration(ref.current));
    }
  }, [duration]);

  return (
    <CSSTransition in={inProp} timeout={transitionDuration}>
      {(status) =>
        React.cloneElement(React.Children.only(children), {
          ref,
          className: clsx(styles.transitions[status], children.props.className),
          style: {
            '--slide-direction': getSlideDirection(direction),
            '--slide-distance': getSlideDistance(distance),
            '--slide-duration': getSlideDuration(duration),
            '--slide-easing': getSlideEasing(easing),
            ...children.props.style,
          },
        })
      }
    </CSSTransition>
  );
};

/**
 * Represents the starting position for each Slide direction.
 */
const directionOrigins: {[D in Direction]: {x: string; y: string}} = {
  top: {
    x: '0px',
    y: 'calc(var(--slide-distance) * -1)',
  },
  right: {
    x: 'var(--slide-distance)',
    y: '0px',
  },
  bottom: {
    x: '0px',
    y: 'var(--slide-distance)',
  },
  left: {
    x: 'calc(var(--slide-distance) * -1)',
    y: '0px',
  },
};

function getSlideDirection(direction: Direction) {
  const translate = directionOrigins[direction];

  return `translate(${translate.x}, ${translate.y})`;
}

function getSlideDistance(distance: Distance) {
  return typeof distance === 'number' ? `${distance}px` : distance;
}

function getSlideDuration(duration: Duration) {
  return typeof duration === 'number'
    ? `${duration}ms`
    : defaultVars.motion.duration[duration];
}

const EASING_KEYS = Object.keys(defaultVars.motion.easing);

function isEasingKey(easing: Easing): easing is MotionEasing {
  return EASING_KEYS.includes(easing);
}

function getSlideEasing(easing: Easing) {
  return isEasingKey(easing) ? defaultVars.motion.easing[easing] : easing;
}

function getTransitionDuration(element: HTMLElement) {
  const styles = window.getComputedStyle(element);

  /**
   * The computed `transition-duration` styles are represented as a common
   * separated list where each value is the same in the context of the Slide animation
   * component. Therefore, we simply split the value and use the first element.
   */
  const transitionDuration = styles.transitionDuration.split(', ')[0];

  // Convert transition-duration to a number represented in milliseconds
  return parseFloat(transitionDuration) * 1000;
}
