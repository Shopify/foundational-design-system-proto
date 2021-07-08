import React, {ChangeEventHandler} from 'react';
import {adminTheme, docsTheme, useTheme, Box} from '@polaris/components';

import tokens from '../../polaris.config';

const defaultTheme = 'docs';
const themes = {
  admin: adminTheme,
  docs: docsTheme,
  custom: {themeClass: '', tokens},
};

export const ThemeSwitcher = () => {
  const {setTheme} = useTheme();

  const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) =>
    setTheme(themes[event.target.value as keyof typeof themes]);

  return (
    <Box
      component="select"
      defaultValue={defaultTheme}
      onChange={handleOnChange}
    >
      {Object.keys(themes).map((themeName) => (
        <option key={themeName} value={themeName}>
          {themeName}
        </option>
      ))}
    </Box>
  );
};
