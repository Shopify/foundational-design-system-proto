import React from 'react';
import {styled} from '@polaris/themes';

const StyledCard = styled('div', {
  borderRadius: '$base',
});

export interface CardProps {
  children: React.ReactNode;
}

export function Card({children}: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}

function Section({children}: CardProps) {
  return <div>{children}</div>;
}

Card.Section = Section;
