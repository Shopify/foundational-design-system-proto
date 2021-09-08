import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Box, BoxProps} from '../Box';
import {FormControlOptions} from '../FormControl/FormControlContext';
import {useFormControl} from '../../hooks/useFormControl';

import * as styles from './Input.css';

export interface Props extends FormControlOptions {}

type PolymorphicInput = Polymorphic.ForwardRefComponent<
  'input',
  BoxProps & Props
>;

export type InputProps = Polymorphic.OwnProps<PolymorphicInput>;

export const Input = React.forwardRef(({className, ...restProps}, ref) => {
  const input = useFormControl<HTMLInputElement>(restProps);

  return (
    <Box
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      as="input"
      ref={ref}
      className={clsx(styles.input, className)}
      {...input}
    />
  );
}) as PolymorphicInput;

Input.displayName = 'Input';
