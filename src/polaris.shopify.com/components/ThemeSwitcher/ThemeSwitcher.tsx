import React from 'react';
import {adminTheme, docsTheme, Box} from '@polaris/components';

import {useTheme} from '../ThemeProvider';

const defaultTheme = 'docs';
const themes = {
  admin: adminTheme,
  docs: docsTheme,
};

export const ThemeSwitcher = () => {
  const {setTheme} = useTheme();

  return (
    <Box
      component="select"
      defaultValue={defaultTheme}
      onChange={(event) => setTheme(themes[event.target.value])}
    >
      {Object.keys(themes).map((themeName) => (
        <option key={themeName} value={themeName}>
          {themeName}
        </option>
      ))}
    </Box>
  );
};
