import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Box, BoxProps} from '../Box';
import {useFormControlContext} from '../FormControl/FormControlContext';

import * as styles from './FormHelpText.css';

interface Props {}

type PolymorphicFormHelpText = Polymorphic.ForwardRefComponent<
  'div',
  BoxProps & Props
>;

export type FormHelpTextProps = Polymorphic.OwnProps<PolymorphicFormHelpText>;

export const FormHelpText = React.forwardRef(
  ({className, ...restProps}, ref) => {
    const field = useFormControlContext();

    return (
      <Box
        className={clsx(styles.formHelpText, className)}
        {...field?.getHelpTextProps(restProps, ref)}
        {...restProps}
      />
    );
  },
) as PolymorphicFormHelpText;

FormHelpText.displayName = 'FormHelpText';
