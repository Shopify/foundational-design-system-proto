import React from 'react';

import {Box, BoxProps} from '../Box';
import {Text} from '../Text';

export interface TextFieldProps extends BoxProps {
  id: string;
  label: string;
  type?: string;
  defaultValue?: HTMLInputElement['defaultValue'];
  value?: HTMLInputElement['value'];
  placeholder?: HTMLInputElement['placeholder'];
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({id, label, type, value, placeholder, ...rest}: TextFieldProps, ref) => {
    return (
      <Box>
        <Text as="label" htmlFor={id}>
          {label}
        </Text>
        <Box
          as="input"
          ref={ref}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          {...rest}
        />
      </Box>
    );
  },
);

TextField.displayName = 'TextField';
