import {TokenExtensions, TokenList, TokenFormat} from './types';

const BASE_SPACING_UNIT = 0.25;
const SPACING_MULTIPLE_MIN = 1;
const SPACING_MULTIPLE_MAX = 10;
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

/**
 * Creates an "extension" object for each token.
 *
 * @param key
 * @returns A TokenExtensions object
 */
const createTokenExtensions = (key: string): TokenExtensions => {
  return {
    'com.shopify.figma': {
      name: 'corresponding/figma/name',
    },
    'com.shopify.react': {
      atomName: hyphencaseToCamelcase(key),
    },
    'com.shopify.sass': {
      variableName: `$${key}`,
    },
    'com.shopify.css': {
      variableName: `--p-${hyphencaseToCamelcase(key)}`,
    },
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
      Object.entries(tokens).forEach(([_, value]) => {
        const cssExtension = value.extensions['com.shopify.css'];
        if (cssExtension?.variableName) {
          css += `    ${cssExtension.variableName}: ${value.value};\n`;
        }
      });
      css += '}\n';
      return css;
    }

    case 'sass': {
      let sass = '';
      Object.entries(tokens).forEach(([_, value]) => {
        const sassExtension = value.extensions['com.shopify.sass'];
        if (sassExtension?.variableName) {
          sass += `${sassExtension?.variableName}: ${value.value};\n`;
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
      const lightness = Math.round((i / steps) * 100);
      values[`${key}-${i}`] = `hsl(${color.hue}deg, 80%, ${lightness}%)`;
    }
  });

  const tokens: TokenList = {};
  Object.entries(values).forEach(([key, value]) => {
    tokens[key] = {
      value,
      type: 'color',
      description: `A color with the value ${value}`,
      extensions: createTokenExtensions(key),
    };
  });

  return tokens;
};

/**
 * Generates spacing tokens
 *
 * @param {Object} levers - Configuration for the spacing
 * @returns A TokenList
 */
export const getSpacingTokens = ({multiple}: {multiple: number}): TokenList => {
  const validMultiple =
    multiple >= SPACING_MULTIPLE_MIN && multiple <= SPACING_MULTIPLE_MAX
      ? multiple
      : 1;

  const values: {[key: string]: number} = {};
  for (let i = 1; i <= 50; i++) {
    values[`spacing-${i}`] = BASE_SPACING_UNIT * validMultiple * i;
  }

  const tokens: TokenList = {};
  Object.entries(values).forEach(([key, value]) => {
    tokens[key] = {
      value: `${value}rem`,
      type: 'dimension',
      description: `A spacing with a value of ${value}rem`,
      extensions: createTokenExtensions(key),
    };
  });
  return tokens;
};

/**
 * Generates typography tokens
 *
 * @param levers - Configuration for the typography
 * @returns A TokenList
 */
export const getTypographyTokens = ({
  baseSize = 16,
  typeRatio = 1,
}): TokenList => {
  const values = {
    base: Math.round(baseSize),
    'heading-7': Math.round(baseSize * typeRatio ** 1),
    'heading-6': Math.round(baseSize * typeRatio ** 2),
    'heading-5': Math.round(baseSize * typeRatio ** 3),
    'heading-4': Math.round(baseSize * typeRatio ** 4),
    'heading-3': Math.round(baseSize * typeRatio ** 5),
    'heading-2': Math.round(baseSize * typeRatio ** 6),
    'heading-1': Math.round(baseSize * typeRatio ** 7),
  };

  const tokens: TokenList = {};
  Object.entries(values).forEach(([key, value]) => {
    tokens[key] = {
      value,
      type: 'dimension',
      description: `A font size with a value of ${value}rem`,
      extensions: createTokenExtensions(key),
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
      type: 'duration',
      description: value.description,
      extensions: createTokenExtensions(key),
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
    xs: {
      value: '0',
      description: 'Small devices, like wearables and smartphones',
      type: 'dimension',
      extensions: createTokenExtensions('xs'),
    },
    sm: {
      value: '600px',
      description: 'Mostly tablets',
      type: 'dimension',
      extensions: createTokenExtensions('sm'),
    },
    md: {
      value: '960px',
      description: 'Mostly tablets',
      type: 'dimension',
      extensions: createTokenExtensions('md'),
    },
    lg: {
      value: '1280px',
      description: 'Computers',
      type: 'dimension',
      extensions: createTokenExtensions('lg'),
    },
    xl: {
      value: '1920px',
      description: 'Computers',
      type: 'dimension',
      extensions: createTokenExtensions('xl'),
    },
  };
};