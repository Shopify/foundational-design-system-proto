import React from 'react';
import {styled} from '../../../../stitches.config';

const StyledCard = styled('div', {
  borderRadius: '$base',
  backgroundColor: '$surface',
});

const StyledSection = styled('div', {
  borderRadius: '$base',
  backgroundColor: '$surface',
  padding: '$base',
  '+ div': {
    borderTop: '1px solid $divider',
    borderRadius: 0,
    backgroundColor: 'unset',
  },
});

export interface CardProps {
  children: React.ReactNode;
}

export function Card({children}: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}

function Section({children}: CardProps) {
  return <StyledSection>{children}</StyledSection>;
}

Card.Section = Section;
