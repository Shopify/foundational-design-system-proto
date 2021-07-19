import {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react';
import {classNames} from '@polaris/components';

import {atoms, Atoms} from '../../atoms/atoms.css';

import * as styles from './Text.css';

interface TextStyleProps {
  align?: Atoms['textAlign'];
  fontSize?: Atoms['fontSize'];
  type?: Exclude<keyof typeof styles.font, 'brand' | 'heading'>;
  weight?: Atoms['fontWeight'];
  color?: Atoms['color'];
  textDecoration?: Atoms['textDecoration'];
}

export interface TextProps
  extends TextStyleProps,
    Omit<AllHTMLAttributes<HTMLElement>, 'type' | 'color'> {
  component?: ElementType;
  children: ReactNode;
}

export const useTextStyles = ({
  weight = 'regular',
  type = 'system',
  align,
  fontSize = 'base',
  color,
  textDecoration,
}: TextStyleProps) =>
  classNames(
    styles.font[type],
    atoms({
      textAlign: align,
      fontSize,
      fontWeight: weight,
      color,
      textDecoration,
    }),
  );

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      component = 'span',
      className,
      weight,
      align,
      type,
      fontSize,
      color,
      textDecoration,
      children,
    },
    ref,
  ) => {
    return createElement(
      component,
      {
        className: classnames(
          useTextStyles({weight, type, align, fontSize, color, textDecoration}),
          className,
        ),
        ref,
      },
      children,
    );
  },
);
