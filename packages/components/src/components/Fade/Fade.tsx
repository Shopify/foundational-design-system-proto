import React from 'react';
import {CSSTransition} from 'react-transition-group';
import clsx from 'clsx';

import * as styles from './Fade.css';

// const duration = 300;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// };

// const transitionStyles: {[K in TransitionStatus]?: React.CSSProperties} = {
//   entering: {opacity: 1},
//   entered: {opacity: 1},
//   exiting: {opacity: 0},
//   exited: {opacity: 0},
// };

export const Fade = ({
  in: inProp,
  children,
  timeout,
}: {
  in: boolean;
  children: React.ReactComponentElement;
  timeout: number;
}) => (
  <CSSTransition in={inProp} timeout={timeout}>
    {() =>
      // {(state) =>
      //   <div
      //     style={{
      //       ...defaultStyle,
      //       ...transitionStyles[state],
      //     }}
      //   >
      //     {children}
      //   </div>
      React.cloneElement(children, {
        className: clsx(styles.fadeStyles, children.props.className),
      })
    }
  </CSSTransition>
);
