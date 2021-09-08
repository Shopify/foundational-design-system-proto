import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import {Box, BoxProps} from '../Box';

import {
  useFormControlProvider,
  FormControlProvider,
  FormControlContextProps,
} from './FormControlContext';

export interface Props extends FormControlContextProps {}

type PolymorphicFormControl = Polymorphic.ForwardRefComponent<
  'div',
  BoxProps & Props
>;

export type FormControlProps = Polymorphic.OwnProps<PolymorphicFormControl>;

export const FormControl = React.forwardRef((props, ref) => {
  const {
    getRootProps,
    htmlProps: _,
    ...context
  } = useFormControlProvider(props);

  const contextValue = React.useMemo(() => context, [context]);

  return (
    <FormControlProvider value={contextValue}>
      <Box {...getRootProps({}, ref)} />
    </FormControlProvider>
  );
}) as PolymorphicFormControl;

FormControl.displayName = 'FormControl';
