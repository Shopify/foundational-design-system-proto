import clsx from 'clsx';

import * as styles from './typography.css';

type TextVariants = 'caption' | 'body';

export interface UseTextProps {
  weight?: keyof typeof styles.fontWeight;
  variant?: TextVariants;
}

export function useText({weight = 'normal', variant = 'body'}: UseTextProps) {
  return clsx(
    styles.fontFamily,
    styles.fontWeight[weight],
    styles.variant[variant],
  );
}
