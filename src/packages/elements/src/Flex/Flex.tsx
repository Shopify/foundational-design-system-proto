import {createElement, forwardRef, AllHTMLAttributes, ElementType} from 'react';
import classnames from 'classnames';

import {atoms, Atoms} from '../styles';

export interface FlexProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor'
    >,
    Pick<
      Atoms,
      | 'flexDirection'
      | 'alignItems'
      | 'alignSelf'
      | 'justifyContent'
      | 'justifySelf'
      | 'wrap'
      | 'gap'
      | 'flexGrow'
      | 'flexShrink'
    > {
  component?: ElementType;
}

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      component = 'div',
      flexDirection,
      alignItems,
      alignSelf,
      justifyContent,
      justifySelf,
      wrap,
      gap,
      flexGrow,
      flexShrink,
      ...restProps
    }: FlexProps,
    ref,
  ) => {
    const className = classnames(
      atoms({
        flexDirection,
        alignItems,
        alignSelf,
        justifyContent,
        justifySelf,
        wrap,
        gap,
        flexGrow,
        flexShrink,
      }),
      restProps.className,
    );

    return createElement(component, {
      ...restProps,
      style: {...restProps.style, display: 'flex'},
      className,
      ref,
    });
  },
);
