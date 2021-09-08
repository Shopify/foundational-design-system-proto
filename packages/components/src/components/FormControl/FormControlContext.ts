import React from 'react';

import {useId} from '../../hooks/useId';
import {dataAttr} from '../../utilities/dom';
import {mergeRefs} from '../../utilities/mergeRefs';

export interface FormControlOptions {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

export interface FormControlContextProps extends FormControlOptions {
  id?: string;
  label?: string;
}

type FormControlProviderContext = Omit<
  ReturnType<typeof useFormControlProvider>,
  'getRootProps' | 'htmlProps'
> | null;

const FormControlContext =
  React.createContext<FormControlProviderContext>(null);

export const FormControlProvider = FormControlContext.Provider;

export function useFormControlContext() {
  const context = React.useContext(FormControlContext);

  if (!context) {
    const error = new Error(
      'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
    );
    error.name = 'FormControlContext';
    Error.captureStackTrace?.(error, useFormControlContext);
    throw error;
  }

  return context;
}

export function useFormControlProvider(props: FormControlContextProps) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = useId();
  const id = idProp || `field-${uuid}`;

  const labelId = `${id}-label`;
  const messageId = `${id}-message`;
  const helpTextId = `${id}-helptext`;

  const [hasMessageText, setHasMessageText] = React.useState(false);
  const [hasHelpText, setHasHelpText] = React.useState(false);
  const [isFocused, setFocus] = React.useState(false);

  const getHelpTextProps = React.useCallback(
    (props = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props,
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node) return;
        setHasHelpText(true);
      }),
    }),
    [helpTextId],
  );

  const getLabelProps = React.useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      'data-focus': dataAttr(isFocused),
      'data-disabled': dataAttr(isDisabled),
      'data-invalid': dataAttr(isInvalid),
      'data-readonly': dataAttr(isReadOnly),
      id: props.id ?? labelId,
      htmlFor: props.htmlFor ?? id,
    }),
    [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId],
  );

  const getMessageProps = React.useCallback(
    (props = {}, forwardedRef = null) => ({
      id: messageId,
      ...props,
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node) return;
        setHasMessageText(true);
      }),
      'aria-live': 'polite',
    }),
    [messageId],
  );

  const getRootProps = React.useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ...htmlProps,
      ref: forwardedRef,
      role: 'group',
    }),
    [htmlProps],
  );

  const getRequiredIndicatorProps = React.useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      role: 'presentation',
      'aria-hidden': true,
      children: props.children || '*',
    }),
    [],
  );

  return {
    isRequired: Boolean(isRequired),
    isInvalid: Boolean(isInvalid),
    isReadOnly: Boolean(isReadOnly),
    isDisabled: Boolean(isDisabled),
    isFocused: Boolean(isFocused),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    hasMessageText,
    setHasMessageText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    messageId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps,
  };
}
