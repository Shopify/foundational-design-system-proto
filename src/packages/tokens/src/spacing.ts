/* eslint-disable no-implicit-coercion */

const base = 4;
const px = (value: number) => `${value}px`;

export const spacing = {
  1: px(base * 1),
  2: px(base * 2),
  3: px(base * 3),
  4: px(base * 4),
  5: px(base * 5),
  6: px(base * 6),
  7: px(base * 7),
  8: px(base * 8),
  9: px(base * 9),
};

export default spacing;
