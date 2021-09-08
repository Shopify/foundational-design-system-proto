import React from 'react';

import {
  FormControlOptions,
  useFormControlContext,
} from '../components/FormControl/FormControlContext';
import {ariaAttr} from '../utilities/dom';
import {callAllHandlers} from '../utilities/function';

type Omitted =
  | 'disabled'
  | 'required'
  | 'readOnly'
  | 'size'
  | 'height'
  | 'width';

export interface UseFormControlProps<T extends HTMLElement>
  extends FormControlOptions,
    Omit<React.AllHTMLAttributes<T>, Omitted> {
  id?: string;
  onFocus?: React.FocusEventHandler<T>;
  onBlur?: React.FocusEventHandler<T>;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
}

export function useFormControl<T extends HTMLElement>(
  props: UseFormControlProps<T>,
) {
  const {isDisabled, isInvalid, isReadOnly, isRequired, ...rest} =
    useFormControlProps(props);

  return {
    ...rest,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    'aria-invalid': ariaAttr(isInvalid),
    'aria-required': ariaAttr(isRequired),
    'aria-readonly': ariaAttr(isReadOnly),
  };
}

export function useFormControlProps<T extends HTMLElement>(
  props: UseFormControlProps<T>,
) {
  const field = useFormControlContext();

  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const describedBy = props['aria-describedby'];
  const labelIds: string[] = describedBy ? [describedBy] : [];

  if (field?.hasMessageText && field?.isInvalid) {
    labelIds.push(field.messageId);
  }

  if (field?.hasHelpText) {
    labelIds.push(field.helpTextId);
  }

  return {
    ...rest,
    'aria-describedby': labelIds.join(' ') || undefined,
    id: id ?? field?.id,
    isDisabled: disabled ?? isDisabled ?? field?.isDisabled,
    isReadOnly: readOnly ?? isReadOnly ?? field?.isReadOnly,
    isRequired: required ?? isRequired ?? field?.isRequired,
    isInvalid: isInvalid ?? field?.isInvalid,
    onFocus: callAllHandlers(field?.onFocus, onFocus),
    onBlur: callAllHandlers(field?.onBlur, onBlur),
  };
}
