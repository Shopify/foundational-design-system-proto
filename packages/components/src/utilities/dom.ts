import {Booleanish} from './types';

export const ariaAttr = (condition: boolean | undefined) =>
  condition ? true : undefined;

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? '' : undefined) as Booleanish;
