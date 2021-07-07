import React, {ComponentProps, useMemo, useState} from 'react';
import {Box} from '@polaris/components';

import {inlineThemeVars} from './theme';
import * as localTheme from './theme.css';

const ThemeContext = React.createContext();

interface ThemeProviderProps extends ComponentProps<typeof Box> {
  defaultTheme?: typeof localTheme;
}

export const ThemeProvider = ({
  className,
  defaultTheme = localTheme,
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  const value = useMemo(() => ({theme, setTheme}), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <Box
        className={[theme.themeClass, className]}
        style={inlineThemeVars}
        {...props}
      />
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
