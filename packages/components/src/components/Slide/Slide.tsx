import React from 'react';
import {assignInlineVars} from '@vanilla-extract/dynamic';
import {CSSTransition} from 'react-transition-group';
import clsx from 'clsx';

import {defaultVars} from '../../theme/vars.css';
import {useTheme} from '../../theme';

import * as styles from './Slide.css';

type Direction = 'top' | 'right' | 'bottom' | 'left';

type Distance = number | string;

type MotionDuration = keyof typeof defaultVars.motion.duration;

type Timeout = number | MotionDuration;

type Duration =
  | Timeout
  | {
      appear?: Timeout;
      enter: Timeout;
      exit: Timeout;
    };

type MotionEasing = keyof typeof defaultVars.motion.easing;

type Easing = string | MotionEasing;

export interface SlideProps {
  //
  /**
   * Triggers the enter or exit states.
   */
  in: boolean;

  /**
   * The content of the Slide (e.g. `<div />`).
   * It should be only one element that accepts a `className` and `ref` prop.
   */
  children: NonNullable<React.ReactElement>;

  /** The direction the slide will animate in from. */
  direction?: Direction;

  /** The distance the slide animation will translate. */
  distance?: Distance;

  /**
   * The duration for each transition state.
   * Note: A single value will be used for all transition states and
   * a configuration object can control each transition states independently.
   */
  duration?: Duration;

  /** The timing function used for all transition states. */
  easing?: Easing;
}

export const Slide = (props: SlideProps) => {
  const {
    in: inProp,
    children,
    direction = 'bottom',
    duration = 'default',
    distance = 200,
    easing = 'easeInOut',
  } = props;

  const ref = React.useRef<null | HTMLElement>(null);
  const [timeouts, setTimeouts] = React.useState({
    appear: 0,
    enter: 0,
    exit: 0,
  });

  const {themeClass} = useTheme();

  React.useEffect(() => {
    if (ref.current) {
      setTimeouts(getTimeouts(themeClass, ref.current));
    }
  }, [duration, themeClass]);

  return (
    <CSSTransition
      appear
      enter
      exit
      in={inProp}
      timeout={timeouts}
      classNames={{
        appear: styles.transitions.appear,
        appearActive: styles.transitions.appearActive,
        appearDone: styles.transitions.appearDone,
        enter: styles.transitions.enter,
        enterActive: styles.transitions.enterActive,
        enterDone: styles.transitions.enterDone,
        exit: styles.transitions.exit,
        exitActive: styles.transitions.exitActive,
        exitDone: styles.transitions.exitDone,
      }}
    >
      {React.cloneElement(React.Children.only(children), {
        ref,
        className: clsx(styles.transitions.initial, children.props.className),
        style: {
          ...assignInlineVars({
            ...getSlideDuration(duration),
            [styles.slideDirectionStartVar]: getSlideDirection(direction),
            [styles.slideDistanceVar]: getSlideDistance(distance),
            [styles.slideEasingVar]: getSlideEasing(easing),
          }),
          ...children.props.style,
        },
      })}
    </CSSTransition>
  );
};

/**
 * Represents the starting position for each Slide direction.
 */
const directionOrigins: {[D in Direction]: {x: string; y: string}} = {
  top: {
    x: '0px',
    y: `calc(${styles.slideDistanceVar} * -1)`,
  },
  right: {
    x: styles.slideDistanceVar,
    y: '0px',
  },
  bottom: {
    x: '0px',
    y: styles.slideDistanceVar,
  },
  left: {
    x: `calc(${styles.slideDistanceVar} * -1)`,
    y: '0px',
  },
};

/**
 * Retrieves the starting translate position for a given direction configuration.
 */
function getSlideDirection(direction: Direction) {
  const translate = directionOrigins[direction];

  return `translate(${translate.x}, ${translate.y})`;
}

/**
 * Retrieves the slide distance for a given distance configuration.
 */
function getSlideDistance(distance: Distance) {
  return typeof distance === 'number' ? `${distance}px` : distance;
}

const EASING_KEYS = Object.keys(defaultVars.motion.easing);

/**
 * Type guard to determine if the provided easing is a theme value and narrow
 * the `string` to a literal `theme.motion.easing` key.
 */
function isEasingKey(easing: Easing): easing is MotionEasing {
  return EASING_KEYS.includes(easing);
}

/**
 * Retrieves the transition timing function for a given easing configuration.
 * @return Either a string representing a literal timing function or
 * a `theme.motion.easing` value (CSS variable).
 */
function getSlideEasing(easing: Easing) {
  return isEasingKey(easing) ? defaultVars.motion.easing[easing] : easing;
}

const DURATION_KEYS = Object.keys(defaultVars.motion.duration);

/**
 * Type guard to determine if the provided duration is a theme value and narrow
 * the `string` to a literal `theme.motion.duration` key.
 */
function isDurationKey(duration: Duration): duration is MotionDuration {
  return typeof duration === 'string' && DURATION_KEYS.includes(duration);
}

/**
 * Retrieves the slide duration for a given duration configuration.
 */
function getSlideDuration(duration: Duration) {
  if (typeof duration === 'number' || isDurationKey(duration)) {
    const timeout = getTimeout(duration);

    return {
      [styles.slideDurationAppearVar]: timeout,
      [styles.slideDurationEnterVar]: timeout,
      [styles.slideDurationExitVar]: timeout,
    };
  } else {
    const enterTimeout = getTimeout(duration.enter);

    return {
      [styles.slideDurationAppearVar]: duration.appear
        ? getTimeout(duration.appear)
        : enterTimeout,
      [styles.slideDurationEnterVar]: enterTimeout,
      [styles.slideDurationExitVar]: getTimeout(duration.exit),
    };
  }
}

/**
 * Retrieves the timeout for a given duration configuration.
 * @return Either a string representing the timeout in milliseconds or
 * a `theme.motion.duration` value (CSS variable).
 */
function getTimeout(timeout: Timeout) {
  if (typeof timeout === 'number') {
    return `${timeout}ms`;
  } else {
    return defaultVars.motion.duration[timeout];
  }
}

/**
 * Checks if a string is a CSS variable.
 */
function isVar(variable: string) {
  return /^var\(.*\)$/.test(variable);
}

/**
 * Extracts the custom property name from a CSS variable string.
 */
function getVarName(variable: string) {
  const matches = variable.match(/^var\((.*)\)$/);

  return matches ? matches[1] : variable;
}

/**
 * Parses a transition-durations string to a number represented in milliseconds.
 */
function parseMilliseconds(timeout: string) {
  // If `timeout` is already in milliseconds -> parse `timeout` as an integer.
  // Otherwise `timeout` is in seconds -> parse the timeout as a float and convert to milliseconds.
  return timeout.endsWith('ms')
    ? parseInt(timeout, 10)
    : parseFloat(timeout) * 1000;
}

/**
 * Retrieves the computed value of a CSS property from a given element.
 */
function getPropertyValue(element: HTMLElement, property: string) {
  return window.getComputedStyle(element).getPropertyValue(property);
}

/**
 * Retrieves the transition timeouts for the inherited slide duration configuration.
 * NOTE: This function would not be needed if we had access to the
 * `theme.motion.duration` values directly (as they are only accessible as CSS Variables).
 */
function getTimeouts(themeClass: string, element: HTMLElement) {
  // Initial timeouts derived from the children's computed styles.
  const timeouts = {
    appear: getPropertyValue(
      element,
      getVarName(styles.slideDurationAppearVar),
    ),
    enter: getPropertyValue(element, getVarName(styles.slideDurationEnterVar)),
    exit: getPropertyValue(element, getVarName(styles.slideDurationExitVar)),
  };

  let themeElement: null | Element = null;

  for (const t in timeouts) {
    if (!(t in timeouts)) continue;

    const timeout = t as keyof typeof timeouts;

    // If the current timeout is a CSS variable (A.K.A. theme value),
    // Retrieve the computed value from the theme element.
    if (isVar(timeouts[timeout])) {
      themeElement ||= document.getElementsByClassName(themeClass)[0];

      // Update the current timeout with the computed theme value.
      timeouts[timeout] =
        themeElement instanceof HTMLElement
          ? getPropertyValue(themeElement, getVarName(timeouts[timeout]))
          : '0ms';
    }
  }

  return {
    appear: parseMilliseconds(timeouts.appear),
    enter: parseMilliseconds(timeouts.enter),
    exit: parseMilliseconds(timeouts.exit),
  };
}
