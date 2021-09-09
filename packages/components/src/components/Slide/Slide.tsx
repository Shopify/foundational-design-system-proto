import React from 'react';
import {CSSTransition} from 'react-transition-group';
import clsx from 'clsx';

import * as styles from './Slide.css';
import type {Direction} from './Slide.css';

export interface SlideProps {
  in: boolean;

  /**
   * The content of the Modal (e.g. `<div />`).
   * It should be only one element that accepts a `className` prop.
   */
  children: NonNullable<React.ReactElement>;
  direction?: Direction;
}

export const Slide = (props: SlideProps) => {
  const {in: inProp, children, direction = 'bottom'} = props;

  return (
    <CSSTransition in={inProp} timeout={styles.DURATION}>
      {(status) =>
        React.cloneElement(React.Children.only(children), {
          className: clsx(
            styles.directions[direction]?.[status],
            children.props.className,
          ),
        })
      }
    </CSSTransition>
  );
};
