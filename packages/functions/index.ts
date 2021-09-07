const BASE_SPACING_UNIT = 4;
const ONE_FRAME = 1000 / 60;

export const createSpacingTokens = ({multiple}: {multiple: number}) => {
  return {
    '--p-spacing-1': BASE_SPACING_UNIT * multiple,
    '--p-spacing-2': BASE_SPACING_UNIT * 2 * multiple,
    '--p-spacing-3': BASE_SPACING_UNIT * 3 * multiple,
    '--p-spacing-4': BASE_SPACING_UNIT * 4 * multiple,
    '--p-spacing-5': BASE_SPACING_UNIT * 5 * multiple,
    '--p-spacing-6': BASE_SPACING_UNIT * 6 * multiple,
    '--p-spacing-7': BASE_SPACING_UNIT * 7 * multiple,
    '--p-spacing-8': BASE_SPACING_UNIT * 8 * multiple,
    '--p-spacing-9': BASE_SPACING_UNIT * 9 * multiple,
    '--p-spacing-10': BASE_SPACING_UNIT * 10 * multiple,
  };
};

export const createTypographyTokens = ({baseSize = 16, typeRatio = 1}) => {
  return {
    '--p-base': Math.round(baseSize),
    '--p-heading-7': Math.round(baseSize * typeRatio ** 1),
    '--p-heading-6': Math.round(baseSize * typeRatio ** 2),
    '--p-heading-5': Math.round(baseSize * typeRatio ** 3),
    '--p-heading-4': Math.round(baseSize * typeRatio ** 4),
    '--p-heading-3': Math.round(baseSize * typeRatio ** 5),
    '--p-heading-2': Math.round(baseSize * typeRatio ** 6),
    '--p-heading-1': Math.round(baseSize * typeRatio ** 7),
  };
};

export const createColorTokens = ({successHue = 0, warningHue = 0}) => {
  return {
    '--p-success': `hsl(${successHue}, 50%, 50%)`,
    '--p-success-darker': `hsl(${successHue}, 50%, 30%)`,
    '--p-success-lighter': `hsl(${successHue}, 50%, 70%)`,
    '--p-warning': `hsl(${warningHue}, 50%, 50%)`,
    '--p-warning-darker': `hsl(${warningHue}, 50%, 30%)`,
    '--p-warning-lighter': `hsl(${warningHue}, 50%, 70%)`,
  };
};

export const createMotionTokens = () => {
  let tokens: {[key: string]: string | number} = {};

  for (let i = 1; i <= 60; i++) {
    const ms = Math.round(ONE_FRAME * i);
    tokens[`--p-ms-${ms}`] = ms;
  }

  for (let i = 1; i <= 60; i++) {
    const ms = Math.round(ONE_FRAME * i);
    tokens[`--p-frames-${i}`] = `var(--ms-${ms})`;
  }

  tokens = {
    ...tokens,
    '--p-duration-immediate': 'var(--p-ms-0)',
    '--p-duration-swift-exit': 'var(--p-ms-100)',
    '--p-duration-swift-enter': 'var(--p-ms-150)',
    '--p-duration-default': 'var(--p-ms-200)',
    '--p-duration-clear-exit': 'var(--p-ms-250)',
    '--p-duration-clear-enter': 'var(--p-ms-300)',
  };

  return tokens;
};
