import {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react';
import classnames from 'classnames';

import {atoms, Atoms} from '../../atoms/atoms.css';

import * as styles from './Text.css';

interface TextStyleProps {
  align?: Atoms['textAlign'];
  fontSize?: Atoms['fontSize'];
  type?: Exclude<keyof typeof styles.font, 'brand' | 'heading'>;
  weight?: Atoms['fontWeight'];
}

export interface TextProps
  extends TextStyleProps,
    Omit<AllHTMLAttributes<HTMLElement>, 'type'> {
  component?: ElementType;
  children: ReactNode;
}

export const useTextStyles = ({
  weight = 'regular',
  type = 'body',
  align,
  fontSize = 'base',
}: TextStyleProps) =>
  classnames(
    styles.font[type],
    atoms({textAlign: align, fontSize, fontWeight: weight}),
  );

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {component = 'span', className, weight, align, type, fontSize, children},
    ref,
  ) => {
    return createElement(
      component,
      {
        className: classnames(
          useTextStyles({weight, type, align, fontSize}),
          className,
        ),
        ref,
      },
      children,
    );
  },
);