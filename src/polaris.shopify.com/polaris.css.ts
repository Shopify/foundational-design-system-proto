import {createPolarisTheme, docsTheme} from '@polaris/components';

const tokens = {
  ...docsTheme.tokens,
  spacing: {
    ...docsTheme.tokens.spacing,
    4: '4rem',
  },
};

const theme = createPolarisTheme(tokens);

export default theme;
