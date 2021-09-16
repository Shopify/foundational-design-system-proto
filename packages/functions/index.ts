import {Token, TokenPlatform, TokenMeta, Tokens} from './types';

const BASE_SPACING_UNIT_REM = 0.25;

const NUMBER_OF_ITEMS_IN_100_SCALES = 10;

const FRAMES_PER_SECOND = 60;

const ONE_FRAME = 1000 / FRAMES_PER_SECOND;

interface DefaultColors {
  [hueName: string]: {
    name: string;
    hue: number;
  };
}

const defaultColors: DefaultColors = {
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

// Copy pasta from https://stackoverflow.com/a/44134328/6488971
const hslToHex = (
  hue: number,
  saturation: number,
  lightness: number,
): string => {
  const decimalLightness = lightness / 100;

  const someMagicalValue =
    (saturation * Math.min(decimalLightness, 1 - decimalLightness)) / 100;

  const _f = (someNumber: number) => {
    const anotherMagicalValue = (someNumber + hue / 30) % 12;

    const color =
      decimalLightness -
      someMagicalValue *
        Math.max(
          Math.min(anotherMagicalValue - 3, 9 - anotherMagicalValue, 1),
          -1,
        );

    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };

  return `#${_f(0)}${_f(8)}${_f(4)}`;
};

const createPlatformTokenName = (
  platform: TokenPlatform,
  tokenName: string,
) => {
  switch (platform) {
    case 'figma':
      return tokenName.replace(/-/g, '/');
    case 'sass':
      return `$${tokenName}`;
    case 'css':
      return `--p-${tokenName}`;
  }
};

/**
 * Creates an "extension" object for each token.
 *
 * @param tokenName
 * @returns A Token metadata object
 */
const createTokenMeta = (tokenName: string): TokenMeta => {
  return {
    figmaName: createPlatformTokenName('figma', tokenName),
    SassName: createPlatformTokenName('sass', tokenName),
    CSSName: createPlatformTokenName('css', tokenName),
  };
};

type PlatformTokensCreator = (tokens: Tokens) => string;

const createCSSTokens: PlatformTokensCreator = (tokens) => {
  const tab = `    `;
  const lines: string[] = [];

  lines.push(':root {');

  Object.entries(tokens).forEach(([_, token]) => {
    const varName = token.meta.CSSName;

    if (varName && token.value) {
      lines.push(`${tab}${varName}: ${token.value};`);
    } else if (token.aliasOf) {
      const alias = createPlatformTokenName('css', token.aliasOf);

      lines.push(`${tab}${varName}: var(${alias});`);
    }
  });

  lines.push('}');

  return lines.join('\n');
};

const createSASSTokens: PlatformTokensCreator = (tokens) => {
  const lines: string[] = [];

  Object.entries(tokens).forEach(([_, token]) => {
    const varName = token.meta.SassName;

    if (varName) {
      if (token.value) {
        lines.push(`${varName}: ${token.value};`);
      } else if (token.aliasOf) {
        const alias = createPlatformTokenName('sass', token.aliasOf);

        lines.push(`${varName}: ${alias};`);
      }
    }
  });

  return lines.join('\n');
};

// NOTE: This type can be removed once we implement a platform tokens creator for Figma.
// eslint-disable-next-line no-warning-comments
// TODO: Add a platform tokens creator for Figma.
type PlatformWithAvailableTokensCreator = Exclude<TokenPlatform, 'figma'>;

type PlatformTokenCreators = {
  [T in PlatformWithAvailableTokensCreator]: PlatformTokensCreator;
};

const platformTokenCreators: PlatformTokenCreators = {
  css: createCSSTokens,
  sass: createSASSTokens,
};

interface CreatePlatformTokenOptions {
  tokens: Tokens;
  platform: PlatformWithAvailableTokensCreator;
}

/**
 * Transforms tokens into various formats of a given platform.
 *
 * @param platform - The target platform e.g. CSS, Sass, Figma.
 * @param tokens - The tokens to transform to the target platform.
 * @returns A string with the tokens transformed to the format of the target platform.
 */
export const createPlatformTokens = ({
  platform,
  tokens,
}: CreatePlatformTokenOptions): string => {
  return platformTokenCreators[platform](tokens);
};

/**
 * Generates a TokenList containing all the available tokens
 *
 * @returns A TokenList
 */
export const getAllTokens = (): Tokens => {
  return {
    ...getSpacingTokens(),
    ...getTypographyTokens(),
    ...getBreakpointTokens(),
    ...getColorTokens(),
    ...getMotionTokens(),
  };
};

/**
 * Generates color tokens
 *
 * @param levers - Configuration for the colors
 * @returns A Tokens
 */
export const getColorTokens = (): Tokens => {
  const tokens: Tokens = {};
  const saturation = 80;

  // Loop through our colors (hues)
  Object.entries(defaultColors).forEach(([hueName, color]) => {
    const numOfShades = 20;
    const steps = numOfShades + 1;
    const hue = color.hue;

    // Create 21 tokens for each hue, each with a higher lightness
    for (let i = 0; i < steps; i++) {
      const lightness = Math.round((i / (steps - 1)) * 100);
      const tokenName = `${hueName}-${i * 50}`;

      tokens[tokenName] = {
        value: hslToHex(hue, saturation, lightness),
        description: `A ${hueName} color with a lightness of ${lightness}%`,
        meta: createTokenMeta(tokenName),
      };
    }
  });

  tokens.negative = {
    // QUESTION: Hard coded?
    // QUESTION: Should aliases be generated here?
    aliasOf: 'magenta-500',
    description: 'Used for errors etc',
    meta: createTokenMeta('negative'),
  };

  tokens.positive = {
    aliasOf: 'green-500',
    description: 'Used for success messages etc',
    meta: createTokenMeta('positive'),
  };

  return tokens;
};

const getSpaceTokenName = (index: number) => `space-${index * 100}`;

/**
 * Generates spacing tokens
 *
 * // THOUGHT: Should we add a param (i.e. baseFontSize) to influence the compute rem values?
 * @param {Object} levers - Configuration for the spacing
 * @returns A Tokens
 */
export const getSpacingTokens = (): Tokens => {
  const tokens: Tokens = {};

  for (let i = 1; i <= NUMBER_OF_ITEMS_IN_100_SCALES; i++) {
    const tokenName = getSpaceTokenName(i);

    const value = `${BASE_SPACING_UNIT_REM * i}rem`;

    tokens[tokenName] = {
      value,
      description: `A spacing with a value of ${value}`,
      meta: createTokenMeta(tokenName),
    };
  }

  for (let i = 1; i <= NUMBER_OF_ITEMS_IN_100_SCALES; i++) {
    const tokenName = `margin-${i * 100}`;

    const aliasTokenName = getSpaceTokenName(i);

    tokens[tokenName] = {
      aliasOf: aliasTokenName,
      description: `A margin equal to ${aliasTokenName}`,
      meta: createTokenMeta(tokenName),
    };
  }

  for (let i = 1; i <= NUMBER_OF_ITEMS_IN_100_SCALES; i++) {
    const tokenName = `padding-${i * 100}`;

    const aliasTokenName = getSpaceTokenName(i);

    tokens[tokenName] = {
      aliasOf: aliasTokenName,
      description: `A padding equal to ${aliasTokenName}`,
      meta: createTokenMeta(tokenName),
    };
  }

  return tokens;
};

/**
 * Generates typography tokens
 *
 * // NOTE: This param isn't implemented.
 * @param levers - Configuration for the typography
 * @returns A Tokens
 */
export const getTypographyTokens = (): Tokens => {
  const typeRatio = 1.2;
  const lineHeight = 1.25;

  const values = {
    'font-size-heading-1': typeRatio ** 7,
    'font-size-heading-2': typeRatio ** 6,
    'font-size-heading-3': typeRatio ** 5,
    'font-size-heading-4': typeRatio ** 4,
    'font-size-heading-5': typeRatio ** 3,
    'font-size-heading-6': typeRatio ** 2,
    'font-size-heading-7': typeRatio ** 1,
    'font-size-body-large': typeRatio ** 1.05,
    'font-size-body': 1,
    'font-size-small': 1 * 0.9,

    'line-height-heading-1': typeRatio ** 7 * lineHeight,
    'line-height-heading-2': typeRatio ** 6 * lineHeight,
    'line-height-heading-3': typeRatio ** 5 * lineHeight,
    'line-height-heading-4': typeRatio ** 4 * lineHeight,
    'line-height-heading-5': typeRatio ** 3 * lineHeight,
    'line-height-heading-6': typeRatio ** 2 * lineHeight,
    'line-height-heading-7': typeRatio ** 1 * lineHeight,
    'line-height-body-large': typeRatio ** 7 * lineHeight,
    'line-height-body': typeRatio ** 7 * lineHeight,
    'line-height-small': typeRatio ** 7 * lineHeight,
  };

  const tokens: Tokens = {};

  Object.entries(values).forEach(([tokenName, value]) => {
    const roundedValue = Math.round(value * 10) / 10;

    tokens[tokenName] = {
      value: `${roundedValue}rem`,
      description: tokenName.startsWith('font-size')
        ? `A font size with a value of ${roundedValue}rem`
        : `The corresponding line height for the token ${tokenName.replace(
            'line-height',
            'font-size',
          )}`,
      meta: createTokenMeta(tokenName),
    };
  });

  return tokens;
};

/**
 * Generates motion tokens
 *
 * @returns A Tokens
 */
export const getMotionTokens = (): Tokens => {
  let values: {[key: string]: Omit<Token, 'meta'>} = {};

  for (let i = 1; i <= FRAMES_PER_SECOND; i++) {
    const ms = Math.round(ONE_FRAME * i);

    values[`ms-${ms}`] = {
      value: `${ms}ms`,
      description: `A duration or delay equal to ${i} ${
        i === 1 ? 'frame' : 'frames'
      } (assuming 60 FPS)`,
    };
  }

  for (let i = 1; i <= FRAMES_PER_SECOND; i++) {
    const ms = Math.round(ONE_FRAME * i);

    values[`frames-${i}`] = {
      aliasOf: `ms-${ms}`,
      description: `The number of milliseconds it takes to render ${i} ${
        i === 1 ? 'frame' : 'frames'
      } (assuming 60 FPS)`,
    };
  }

  values = {
    ...values,
    'duration-immediate': {
      aliasOf: 'ms-0',
      description:
        'Used when the element needs to appear right away, without any motion',
    },
    'duration-swift-exit': {
      aliasOf: 'ms-100',
      description: 'Used when the element should disappear quickly',
    },
    'duration-swift-enter': {
      aliasOf: 'ms-150',
      description: 'Used when the element needs to appear quickly but smoothly',
    },
    'duration-default': {
      aliasOf: 'ms-200',
      description: 'The default duration for elements',
    },
    'duration-clear-exit': {
      aliasOf: 'ms-250',
      description:
        'Used for elements that needs to be removed in a clear and visible manner',
    },
    'duration-clear-enter': {
      aliasOf: 'ms-300',
      description:
        'USed for elements that need to draw attention to themselves as they enter',
    },
  };

  const tokens: Tokens = {};

  Object.entries(values).forEach(([tokenName, value]) => {
    tokens[tokenName] = {
      value: value.value,
      aliasOf: value.aliasOf,
      description: value.description,
      meta: createTokenMeta(tokenName),
    };
  });

  return tokens;
};

/**
 * Generates breakpoint tokens
 *
 * @returns A Tokens
 */
export const getBreakpointTokens = (): Tokens => {
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
