import React from 'react';
import {styled} from '@stitches/react'; 
// Move to elements

const StyledCard = styled('div', {
  borderRadius: 8,
})

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
