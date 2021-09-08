import React from 'react';

import {FormControl, FormControlProps} from '../FormControl';
import {FormLabel} from '../FormLabel';
import {FormHelpText} from '../FormHelpText';
import {FormMessage} from '../FormMessage';
import {Input} from '../Input';

export interface TextFieldProps extends FormControlProps {
  error?: string;
  helpText?: string;
}

export const TextField = ({
  id,
  label,
  error,
  helpText,
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  ...restProps
}: TextFieldProps) => {
  const formControlProps = {
    id,
    label,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
  };

  return (
    <FormControl {...formControlProps}>
      <FormLabel>{label}</FormLabel>
      <Input {...restProps} />
      <FormHelpText>{helpText}</FormHelpText>
      <FormMessage status="error">{error}</FormMessage>
    </FormControl>
  );
};

TextField.displayName = 'TextField';
