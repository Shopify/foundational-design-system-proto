/* eslint-disable no-implicit-coercion */

const base = 4;
const px = (value: number) => `${value}px`;

export const spacing = {
  1: px(base * 1),
  2: px(base * 1.5),
  3: px(base * 2),
  4: px(base * 2.5),
  5: px(base * 3),
  6: px(base * 3.5),
};
