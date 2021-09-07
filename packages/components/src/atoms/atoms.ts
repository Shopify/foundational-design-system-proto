import clsx from 'clsx';

import * as resetStyles from './reset.css';
import {sprinkles, Sprinkles} from './sprinkles.css';

export interface Atoms extends Sprinkles {
  reset?: keyof typeof resetStyles.element;
}

export const atoms = ({reset, ...rest}: Atoms) => {
  if (!reset) {
    return sprinkles(rest);
  }

  const elementReset = resetStyles.element[reset];

  const sprinklesClasses = sprinkles(rest);

  return clsx(resetStyles.base, elementReset, sprinklesClasses);
};
