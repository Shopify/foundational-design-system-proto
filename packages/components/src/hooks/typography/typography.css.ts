import {style, styleVariants} from '@vanilla-extract/css';
import {createTextStyle} from '@capsizecss/vanilla-extract';
import {breakpoints} from '@polaris/tokens';

const fontMetrics = {
  capHeight: 700,
  ascent: 1058,
  descent: -291,
  lineGap: 0,
  unitsPerEm: 1000,
};

const textDefinitions = {
  caption: {
    base: {fontSize: 18, leading: 24, fontMetrics},
    lg: {fontSize: 18, leading: 24, fontMetrics},
  },
  body: {
    base: {fontSize: 15, leading: 20, fontMetrics},
    lg: {fontSize: 14, leading: 20, fontMetrics},
  },
};

const caption = createTextStyle(textDefinitions.caption.base, {
  '@media': {
    [`screen and (min-width: ${breakpoints.lg})`]: textDefinitions.caption.lg,
  },
});

const body = createTextStyle(textDefinitions.body.base, {
  '@media': {
    [`screen and (min-width: ${breakpoints.lg})`]: textDefinitions.body.lg,
  },
});

export const variant = {
  caption,
  body,
};

export const fontWeight = styleVariants(
  {
    normal: 400,
    medium: 500,
    strong: 600,
  },
  (weight) => ({
    fontWeight: weight,
  }),
);

export const fontFamily = style({
  fontFamily:
    "-apple-system, 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
});
