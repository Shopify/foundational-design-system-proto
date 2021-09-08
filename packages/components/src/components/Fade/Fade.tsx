import React from 'react';
import {CSSTransition} from 'react-transition-group';
import clsx from 'clsx';

import * as styles from './Fade.css';

interface FadeProps {
  in: boolean;

  /**
   * The content of the Modal (e.g. `<div />`).
   * It should be only one element that accepts a `className` prop.
   */
  children: NonNullable<React.ReactElement>;
  timeout: number;
}

export const Fade = (props: FadeProps) => {
  const {in: inProp, children, timeout} = props;

  return (
    <CSSTransition in={inProp} timeout={timeout}>
      {(status) =>
        React.cloneElement(React.Children.only(children), {
          className: clsx(styles.fade[status], children.props.className),
        })
      }
    </CSSTransition>
  );
};
