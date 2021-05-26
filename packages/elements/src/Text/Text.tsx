import React from 'react';
import { styled, CSS, StitchesVariants } from '../../../themes/src/stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'span';

export const StyledText = styled(DEFAULT_TAG, {
  // Reset
  display: 'block',
  margin: '0',
  lineHeight: '1',

  // Custom
  fontFamily: '$system',
  fontWeight: '$base',

  variants: {
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: '$6',
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
    variant: {
      subdued: {
        color: '$textSubdued',
      },
      strong: {
        fontWeight: '$bold'
      },
      positive: {
        color: '$textSuccess'
      },
      negative: {
        color: '$textCritical'
      },
      code: {
        fontFamily: '$mono'
      },
    }
  },
  defaultVariants: {
    size: '3',
    variant: 'subdued'
  },
});

type TextCSSProp = { css?: CSS };
type TextVariants = Omit<StitchesVariants<typeof StyledText>, "size">;
type TextOwnProps = TextCSSProp & TextVariants & { size?: any };

type TextComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, TextOwnProps>;

export const Text = React.forwardRef((props, forwardedRef) => {
  return <StyledText {...props} ref={forwardedRef} />;
}) as TextComponent;

Text.toString = () => `.${StyledText.className}`;
