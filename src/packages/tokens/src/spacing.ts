/* eslint-disable no-implicit-coercion */

const unit = 4;
const px = (value: number) => `${value}px`;

export const spacing = {
  0.5: px(unit * 0.5),
  1: px(unit * 1),
  2: px(unit * 2),
  3: px(unit * 3),
  4: px(unit * 4),
  5: px(unit * 5),
};
