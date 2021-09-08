import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Box, BoxProps} from '../Box';
import {useFormControlContext} from '../FormControl/FormControlContext';

import * as styles from './FormMessage.css';

interface Props {
  status?: 'error' | 'success' | 'warning' | 'info' | 'neutral';
}

type PolymorphicFormMessage = Polymorphic.ForwardRefComponent<
  'div',
  BoxProps & Props
>;

export type FormMessageProps = Polymorphic.OwnProps<PolymorphicFormMessage>;

export const FormMessage = React.forwardRef(
  ({className, status = 'neutral', ...restProps}, ref) => {
    const field = useFormControlContext();

    if (!field?.isInvalid) return null;

    return (
      <Box
        className={clsx(styles.formMessage, styles.status[status], className)}
        {...field?.getMessageProps(restProps, ref)}
      />
    );
  },
) as PolymorphicFormMessage;

FormMessage.displayName = 'FormMessage';
