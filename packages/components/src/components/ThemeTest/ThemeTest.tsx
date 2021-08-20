import React, {forwardRef} from 'react';

import {classNames} from '../../utilities';
import {Box, BoxProps} from '../Box/Box';

import * as styles from './ThemeTest.css';

export interface ThemeTestProps extends BoxProps {}

export const ThemeTest = forwardRef<HTMLElement, ThemeTestProps>(
  (props, ref) => {
    return (
      <Box
        ref={ref}
        {...props}
        className={classNames(styles.placeholder1, props.className)}
      />
    );
  },
);

ThemeTest.displayName = 'ThemeTest';
