import {TokenMeta, TokenList, TokenFormat} from './types';

const BASE_SPACING_UNIT_REM = 0.25;
const NUMBER_OF_ITEMS_IN_100_SCALES = 10;
const ONE_FRAME = 1000 / 60;
const POLARIS_ROOT_COLORS = {
  azure: {
    name: 'Azure',
    hue: 209,
  },
  blue: {
    name: 'Blue',
    hue: 247,
  },
  cyan: {
    name: 'Cyan',
    hue: 194,
  },
  gray: {
    name: 'Cyan',
    hue: 210,
  },
  green: {
    name: 'Green',
    hue: 157,
  },
  lime: {
    name: 'Lime',
    hue: 112,
  },
  magenta: {
    name: 'Magenta',
    hue: 323,
  },
  orange: {
    name: 'Orange',
    hue: 39,
  },
  rose: {
    name: 'Rose',
    hue: 347,
  },
  teal: {
    name: 'Teal',
    hue: 187,
  },
  violet: {
    name: 'Violet',
    hue: 280,
  },
  yellow: {
    name: 'Yellow',
    hue: 65,
  },
};

/**
 * Convert hyphen-case-words to camelCaseWords
 *
 * @param str - A hyphen-case-string
 * @returns - A camelCase string
 */
const hyphencaseToCamelcase = (str: string): string =>
  str.replace(/-([a-z])/g, (match) => match[1].toUpperCase());

const getVariableName = (
  key: string,
  format: 'figma' | 'atoms' | 'css' | 'sass',
): string => {
  switch (format) {
    case 'figma':
      return 'corresponding/figma/name';
    case 'atoms':
      return hyphencaseToCamelcase(key);
    case 'sass':
      return `$${key}`;
    case 'css':
      return `--p-${key}`;
  }
};

/**
 * Creates an "extension" object for each token.
 *
 * @param key
 * @returns A Tokenmeta object
 */
const createTokenMeta = (key: string): TokenMeta => {
  return {
    figmaName: getVariableName(key, 'figma'),
    atomName: getVariableName(key, 'atoms'),
    SassVariableName: getVariableName(key, 'sass'),
    CSSVariableName: getVariableName(key, 'css'),
  };
};

/**
 * Transforms tokens into various formats like CSS and Sass.
 *
 * @param tokens - A TokensList with the tokens that you want to transform
 * @param format - The file format
 * @returns - A string with the tokens in the right format
 */
export const formatTokens = (
  tokens: TokenList,
  format: TokenFormat,
): string => {
  switch (format) {
    case 'css': {
      let css = ':root {\n';
      Object.entries(tokens).forEach(([_, token]) => {
        const varName = token.meta.CSSVariableName;
        if (token.value) {
          css += `    ${varName}: ${token.value};\n`;
        } else if (token.aliasOf) {
          const alias = getVariableName(token.aliasOf, 'css');
          css += `    ${varName}: var(${alias});\n`;
        }
      });
      css += '}\n';
      return css;
    }

    case 'sass': {
      let sass = '';
      Object.entries(tokens).forEach(([_, token]) => {
        const varName = token.meta.SassVariableName;
        if (varName) {
          if (token.value) {
            sass += `${varName}: ${token.value};\n`;
          } else if (token.aliasOf) {
            const alias = getVariableName(token.aliasOf, 'sass');
            sass += `${varName}: ${alias};\n`;
          }
        }
      });
      return sass;
    }
  }
};

/**
 * Generates color tokens
 *
 * @param levers - Configuration for the colors
 * @returns A TokenList
 */
export const getColorTokens = (): TokenList => {
  const values: {[key: string]: string} = {};

  // Loop through our colors (hues)
  Object.entries(POLARIS_ROOT_COLORS).forEach(([key, color]) => {
    const steps = 21;

    // Create 21 tokens for each hue, each with a higher lightness
    for (let i = 0; i < steps; i++) {
      const lightness = Math.round((i / (steps - 1)) * 100);
      values[`${key}-${i * 50}`] = `hsl(${color.hue}deg, 80%, ${lightness}%)`;
    }
  });

  const tokens: TokenList = {};
  Object.entries(values).forEach(([key, value]) => {
    tokens[key] = {
      value,
      description: `A color with the value ${value}`,
      meta: createTokenMeta(key),
    };
  });

  tokens.negative = {
    aliasOf: 'magenta-500',
    description: 'Used for errors etc',
    meta: createTokenMeta('negative'),
  };

  return tokens;
};

/**
 * Generates spacing tokens
 *
 * @param {Object} levers - Configuration for the spacing
 * @returns A TokenList
 */
export const getSpacingTokens = (): TokenList => {
  const values: {[key: string]: number} = {};
  for (let i = 1; i <= NUMBER_OF_ITEMS_IN_100_SCALES; i++) {
    values[`space-${i * 100}`] = BASE_SPACING_UNIT_REM * i;
  }
  for (let i = 1; i <= NUMBER_OF_ITEMS_IN_100_SCALES; i++) {
    values[`margin-${i * 100}`] = BASE_SPACING_UNIT_REM * i;
  }
  for (let i = 1; i <= NUMBER_OF_ITEMS_IN_100_SCALES; i++) {
    values[`padding-${i * 100}`] = BASE_SPACING_UNIT_REM * i;
  }

  const tokens: TokenList = {};
  Object.entries(values).forEach(([key, value]) => {
    tokens[key] = {
      value: `${value}rem`,
      description: `A spacing with a value of ${value}rem`,
      meta: createTokenMeta(key),
    };
  });
  return tokens;
};

/**
 * Generates typography tokeqns
 *
 * @param levers - Configuration for the typography
 * @returns A TokenList
 */
export const getTypographyTokens = (): TokenList => {
  const baseSize = 16;
  const typeRatio = 1.2;
  const lineHeight = 1.25;

  const values = {
    'font-size-heading-1': Math.round(baseSize * typeRatio ** 1),
    'font-size-heading-2': Math.round(baseSize * typeRatio ** 2),
    'font-size-heading-3': Math.round(baseSize * typeRatio ** 3),
    'font-size-heading-4': Math.round(baseSize * typeRatio ** 4),
    'font-size-heading-5': Math.round(baseSize * typeRatio ** 5),
    'font-size-heading-6': Math.round(baseSize * typeRatio ** 6),
    'font-size-heading-7': Math.round(baseSize * typeRatio ** 7),
    'font-size-body-large': Math.round(baseSize * typeRatio ** 7),
    'font-size-body': baseSize,
    'font-size-small': Math.round(baseSize * typeRatio ** 7),

    'line-height-heading-1': Math.round(baseSize * typeRatio ** 1 * lineHeight),
    'line-height-heading-2': Math.round(baseSize * typeRatio ** 2 * lineHeight),
    'line-height-heading-3': Math.round(baseSize * typeRatio ** 3 * lineHeight),
    'line-height-heading-4': Math.round(baseSize * typeRatio ** 4 * lineHeight),
    'line-height-heading-5': Math.round(baseSize * typeRatio ** 5 * lineHeight),
    'line-height-heading-6': Math.round(baseSize * typeRatio ** 6 * lineHeight),
    'line-height-heading-7': Math.round(baseSize * typeRatio ** 7 * lineHeight),
    'line-height-body-large': Math.round(
      baseSize * typeRatio ** 7 * lineHeight,
    ),
    'line-height-body': Math.round(baseSize * typeRatio ** 7 * lineHeight),
    'line-height-small': Math.round(baseSize * typeRatio ** 7 * lineHeight),
  };

  const tokens: TokenList = {};
  Object.entries(values).forEach(([key, value]) => {
    tokens[key] = {
      value,
      description: `A font size with a value of ${value}rem`,
      meta: createTokenMeta(key),
    };
  });

  return tokens;
};

/**
 * Generates motion tokens
 *
 * @returns A TokenList
 */
export const getMotionTokens = (): TokenList => {
  let values: {[key: string]: {value: string; description: string}} = {};

  for (let i = 1; i <= 60; i++) {
    const ms = Math.round(ONE_FRAME * i);
    values[`ms-${ms}`] = {value: `${ms}ms`, description: ''};
  }

  for (let i = 1; i <= 60; i++) {
    const ms = Math.round(ONE_FRAME * i);
    values[`frames-${i}`] = {value: `var(--ms-${ms})`, description: ''};
  }

  values = {
    ...values,
    'duration-immediate': {
      value: 'var(--p-ms-0)',
      description:
        'Used when the element needs to appear right away, without any motion',
    },
    'duration-swift-exit': {
      value: 'var(--p-ms-100)',
      description: 'Used when the element should disappear quickly',
    },
    'duration-swift-enter': {
      value: 'var(--p-ms-150)',
      description: 'Used when the element needs to appear quickly but smoothly',
    },
    'duration-default': {
      value: 'var(--p-ms-200)',
      description: 'The default duration for elements',
    },
    'duration-clear-exit': {
      value: 'var(--p-ms-250)',
      description:
        'Used for elements that needs to be removed in a clear and visible manner',
    },
    'duration-clear-enter': {
      value: 'var(--p-ms-300)',
      description:
        'USed for elements that need to draw attention to themselves as they enter',
    },
  };

  const tokens: TokenList = {};
  Object.entries(values).forEach(([key, value]) => {
    tokens[key] = {
      value: value.value,
      description: value.description,
      meta: createTokenMeta(key),
    };
  });

  return tokens;
};

/**
 * Generates breakpoint tokens
 *
 * @returns A TokenList
 */
export const getBreakpointTokens = (): TokenList => {
  return {
    'breakpoint-xs': {
      value: '0',
      description: 'Small devices, like wearables and smartphones',
      meta: createTokenMeta('breakpoint-xs'),
    },
    'breakpoint-sm': {
      value: '600px',
      description: 'Mostly tablets',
      meta: createTokenMeta('breakpoint-sm'),
    },
    'breakpoint-md': {
      value: '960px',
      description: 'Mostly tablets',
      meta: createTokenMeta('breakpoint-md'),
    },
    'breakpoint-lg': {
      value: '1280px',
      description: 'Computers',
      meta: createTokenMeta('breakpoint-lg'),
    },
    'breakpoint-xl': {
      value: '1920px',
      description: 'Computers',
      meta: createTokenMeta('breakpoint-xl'),
    },
  };
};
