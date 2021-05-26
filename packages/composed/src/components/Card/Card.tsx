import React from 'react'

// Move to elements

export interface CardProps {
  children: React.ReactNode;
}

export function Card({children}: CardProps) {
  return <div>{children}</div>
}