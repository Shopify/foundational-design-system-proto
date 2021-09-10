import React from 'react';
import {CSSTransition} from 'react-transition-group';
import clsx from 'clsx';

import {defaultVars} from '../../theme/vars.css';

import * as styles from './Slide.css';

type Direction = 'top' | 'right' | 'bottom' | 'left';

type Duration = number | keyof typeof defaultVars.motion.duration;

type Distance = number | string;

export interface SlideProps {
  in: boolean;

  /**
   * The content of the Modal (e.g. `<div />`).
   * It should be only one element that accepts a `className` prop.
   */
  children: NonNullable<React.ReactElement>;
  direction?: Direction;
  duration?: Duration;
  distance?: Distance;
}

export const Slide = (props: SlideProps) => {
  const {
    in: inProp,
    children,
    direction = 'bottom',
    duration = 1000,
    distance = 200,
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
            '--slide-duration': getSlideDuration(duration),
            '--slide-distance': getSlideDistance(distance),
            '--slide-direction': getSlideDirection(direction),
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

function getSlideDuration(duration: Duration) {
  return typeof duration === 'number'
    ? `${duration}ms`
    : defaultVars.motion.duration[duration];
}

function getSlideDistance(distance: Distance) {
  return typeof distance === 'number' ? `${distance}px` : distance;
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
