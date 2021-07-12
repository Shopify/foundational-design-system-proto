const baseUnit = 4;

const scale = [0.5, 1, 2, 3, 4, 5];

export const spacing = Object.fromEntries(
  scale.map((value: number | string) => [
    value,
    `${Number(value) * baseUnit}px`,
  ]),
);
