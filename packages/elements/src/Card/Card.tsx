import React from 'react';
import {styled} from '@polaris/themes';

const StyledCardSection = styled('div', {
  padding: '$loose'
})

const StyledCard = styled('div', {
  boxShadow: '$shadows$card',
  borderRadius: '$base',
  background: '$surface',

  [`${StyledCardSection}`]: {
    [`+ ${StyledCardSection}`]: {
      borderTop: 'solid 1px $divider',
    }
  }
})

export interface CardProps {
  children: React.ReactNode;
}
export function Card({children}: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}

function Section({children}: CardProps) {
  return <StyledCardSection>{children}</StyledCardSection>;
}

Card.Section = Section;
