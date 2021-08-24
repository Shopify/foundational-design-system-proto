import React from 'react';
import clsx from 'clsx';

import * as styles from './ButtonBase.css';

export type PolymorphicProps<
  TElementType extends React.ElementType,
  TProps,
> = TProps & {
  as?: TElementType;
} & Omit<React.ComponentProps<TElementType>, 'as'>;

export type ButtonBaseProps<
  TElementType extends React.ElementType = React.ElementType,
> = PolymorphicProps<
  TElementType,
  {
    className?: string;
    type?: string;

    /**
     * The content of the component.
     */
    children?: React.ReactNode;

    /**
     * If `true`, the base button will be disabled.
     */
    disabled?: boolean;
  }
>;

export const ButtonBase: <T extends React.ElementType>(
  props: ButtonBaseProps<T>,
) => React.ReactElement | null = React.forwardRef(function ButtonBase(
  props: ButtonBaseProps,
  ref: React.Ref<Element>,
) {
  const {
    className = '',
    as: Component = 'button',
    disabled = false,
    type = 'button',
    ...restProps
  } = props;

  return (
    <Component
      ref={ref}
      type={type}
      className={clsx(
        styles.root,
        {
          [styles.disabled]: disabled,
        },
        className,
      )}
      {...restProps}
    />
  );
});
