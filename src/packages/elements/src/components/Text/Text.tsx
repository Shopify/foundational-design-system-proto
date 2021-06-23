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
  weight?: keyof typeof styles.weight;
  align?: Atoms['textAlign'];
  type?: Exclude<keyof typeof styles.font, 'brand' | 'heading'>;
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
}: TextStyleProps) =>
  classnames(
    styles.font[type],
    atoms({textAlign: align}),
    styles.weight[weight],
  );

export const Text = forwardRef<HTMLElement, TextProps>(
  ({component = 'span', className, weight, align, type, children}, ref) => {
    return createElement(
      component,
      {
        className: classnames(useTextStyles({weight, type, align}), className),
        ref,
      },
      children,
    );
  },
);
