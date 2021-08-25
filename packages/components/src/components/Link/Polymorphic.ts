/**
 * Utility types for creating Polymorphic Components.
 *
 * Adapted from: https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/?utm_source=twitter&utm_medium=social&utm_campaign=init_share
 *
 * @example
 * import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from './utilities';
 *
 * interface Props {
 *   children: React.ReactNode;
 *   // etc...
 * }
 *
 * export type TextProps<T extends React.ElementType> =
 *   PolymorphicComponentPropsWithRef<T, Props>;
 *
 * type TextComponent = (<T extends React.ElementType = 'span'>(
 *   props: TextProps<T>,
 * ) => React.ReactElement | null) & {displayName?: string};
 *
 * export const Text: TextComponent = React.forwardRef(
 *   <T extends React.ElementType = 'span'>(
 *     props: TextProps<T>,
 *     ref?: PolymorphicRef<T>,
 *   ) => {
 *     const {as: Component = 'span', ...restProps} = props;
 *
 *     return (
 *       <Component ref={ref} {...restProps}>
 *         {children}
 *       </Component>
 *     );
 *   },
 * );
 */
import React from 'react';

/**
 * @desc Utility type for getting props type of React component.
 * It takes `defaultProps` into an account - making props with defaults optional.
 * Source: https://github.com/emotion-js/emotion/blob/4c7b6de1ff294e45d1e9757dbe37b961cded211b/packages/react/types/helper.d.ts#L3-L9
 */
export type PropsOf<
  TElementType extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<
  TElementType,
  React.ComponentProps<TElementType>
>;

/**
 * An override of the default HTML tag.
 * Can also be another React component.
 */
export interface AsProp<TElementType extends React.ElementType> {
  as?: TElementType;
}

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<
  TExtendedProps = {[K in PropertyKey]: unknown},
  TOverrideProps = {[K in PropertyKey]: unknown},
> = TOverrideProps & Omit<TExtendedProps, keyof TOverrideProps>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type InheritableElementProps<
  TElementType extends React.ElementType,
  TProps = {[K in PropertyKey]: unknown},
> = ExtendableProps<PropsOf<TElementType>, TProps>;

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type PolymorphicComponentProps<
  TElementType extends React.ElementType,
  TProps = {[K in PropertyKey]: unknown},
> = InheritableElementProps<TElementType, TProps & AsProp<TElementType>>;

/**
 * Utility type to extract the `ref` prop from a polymorphic component
 */
export type PolymorphicRef<TElementType extends React.ElementType> =
  React.ComponentPropsWithRef<TElementType>['ref'];

/**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component
 */
export type PolymorphicComponentPropsWithRef<
  TElementType extends React.ElementType,
  TProps = {[K in PropertyKey]: unknown},
> = PolymorphicComponentProps<TElementType, TProps> & {
  ref?: PolymorphicRef<TElementType>;
};
