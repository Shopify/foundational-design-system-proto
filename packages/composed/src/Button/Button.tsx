import React from 'react';
import { styled, CSS, StitchesVariants } from './stitches.config';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

const DEFAULT_TAG = 'button';

const StyledButton = styled(DEFAULT_TAG, {
  // Local vars
  $$buttonColor: '$colors$text',
  $$buttonBorder: '$colors$borderSubdued',

  // Reset
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  position: 'relative',
  display: 'inline-flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '1',
  webkitTapHighlightColor: 'transparent',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  fontFamily: '$system',
  fontSize: '$2',
  fontWeight: '$medium',
  borderRadius: '$base',
  borderWidth: '1px',
  borderStyle: 'solid',
  background: 'transparent',
  color: 'inherit',
  '&:disabled': {
    boxShadow: 'none',
    pointerEvents: 'none',
    transition: 'none'
  },

  variants: {
    variant: {
      primary: {
        borderWidth: 0,
        background: '$actionPrimary',
        color: '$textOnPrimary',
        '&:hover': {
          background: '$actionPrimaryHovered',
        },
        '&:active': {
          boxShadow: '$buttonPressedInner',
          background: '$actionPrimaryPressed',
        },
        '&:disabled': {
          background: '$actionPrimaryDisabled'
        },
      },
      secondary: {
        borderColor: '$borderSubdued',
        background: '$actionSecondary',
        color: '$text',
        '&:hover': {
          background: '$actionSecondaryHovered',
        },
        '&:active': {
          boxShadow: '$buttonPressedInner',
          background: '$actionSecondaryPressed',
        },
        '&:disabled': {
          borderColor: '$borderDisabled',
          background: '$actionSecondaryDisabled'
        },
      },
      plain: {
        padding: 0,
        borderWidth: 0,
        background: 'transparent',
        color: '$interactive',
        textDecoration: 'underline',
        '&:hover': {
          background: '$interactiveHovered',
          textDecoration: 'none'
        },
        '&:active': {
          background: '$interactivePressed',
        },
        '&:disabled': {
          background: '$interactiveDisabled'
        },
      },
      outline: {
        borderColor: '$borderSubdued',
        background: 'transparent',
        '&:active': {
          boxShadow: '$buttonPressedInner',
        },
        '&:disabled': {
          borderColor: '$borderDisabled',
        },
      },
      destructive: {
        borderWidth: 0,
        background: '$actionCritical',
        color: '$textOnCritical',
        '&:hover': {
          background: '$actionCriticalHovered',
        },
        '&:active': {
          boxShadow: '$buttonPressedInner',
          background: '$actionCriticalPressed',
        },
        '&:disabled': {
          background: '$actionCriticalDisabled'
        },
      }
    },
    size: {
      slim: {
        height: '$5',
        px: '$3',
      }, 
      medium: {
        height: '$6',
        px: '$3',
      },
      large: {
        height: '$7',
        px: '$4',
        fontSize: '$4',
      }
    }
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'medium'
  },
});

type ButtonCSSProp = { css?: CSS };
type ButtonVariants = StitchesVariants<typeof StyledButton>;
type ButtonOwnProps = ButtonCSSProp & ButtonVariants & { size?: any };

type ButtonComponent = Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, ButtonOwnProps>;

export const Button = React.forwardRef((props, forwardedRef) => {
  return <StyledButton {...props} ref={forwardedRef} />;
}) as ButtonComponent;

Button.toString = () => `.${StyledButton.className}`;
