import React from 'react';
import {Transition, TransitionStatus} from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: {[K in TransitionStatus]?: React.CSSProperties} = {
  entering: {opacity: 1},
  entered: {opacity: 1},
  exiting: {opacity: 0},
  exited: {opacity: 0},
};

export const Fade = ({
  in: inProp,
  children,
}: {
  in: boolean;
  children: React.ReactNode;
}) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

// {
// 	React.cloneElement(children, {
// 		className: clsx(transitionClasses, children.props.className),
// 	})
// }
