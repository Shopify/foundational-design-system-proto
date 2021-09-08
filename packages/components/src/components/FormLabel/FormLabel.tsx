import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import clsx from 'clsx';

import {Box, BoxProps} from '../Box';
import {useFormControlContext} from '../FormControl/FormControlContext';

import * as styles from './FormLabel.css';

interface Props {
  requiredIndicator?: React.ReactElement;
}

type PolymorphicFormLabel = Polymorphic.ForwardRefComponent<
  'label',
  BoxProps & Props
>;

export type FormLabelProps = Polymorphic.OwnProps<PolymorphicFormLabel>;

export const FormLabel = React.forwardRef((props, ref) => {
  const {
    className,
    children,
    requiredIndicator = <RequiredIndicator />,
    ...restProps
  } = props;

  const field = useFormControlContext();
  const ownProps = field?.getLabelProps(restProps, ref) ?? {ref, ...restProps};
  const required = field?.isRequired ? requiredIndicator : null;

  return (
    <Box
      as="label"
      ref={ref}
      className={clsx(styles.formLabel, className)}
      {...ownProps}
    >
      {children}
      {required}
    </Box>
  );
}) as PolymorphicFormLabel;

export type RequiredIndicatorProps = React.AllHTMLAttributes<HTMLSpanElement>;

export const RequiredIndicator = React.forwardRef<
  HTMLSpanElement,
  RequiredIndicatorProps
>(({className, ...restProps}, ref) => {
  const field = useFormControlContext();

  if (!field?.isRequired) return null;

  return (
    <Box
      as="span"
      className={clsx(styles.requiredIndicator, className)}
      {...field?.getRequiredIndicatorProps(restProps, ref)}
    />
  );
});

FormLabel.displayName = 'FormLabel';
