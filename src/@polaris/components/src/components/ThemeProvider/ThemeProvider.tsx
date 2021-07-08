import React, {ComponentProps, useMemo, useState} from 'react';
import {createInlineTheme} from '@vanilla-extract/dynamic';

import * as docsTheme from '../../themes/docs';
import {vars} from '../../themes';
import {Box} from '../Box';

type Theme = typeof docsTheme;

const ThemeContext = React.createContext({
  theme: docsTheme,
  setTheme: (theme: Theme) => {},
});

interface ThemeProviderProps extends ComponentProps<typeof Box> {
  defaultTheme?: typeof docsTheme;
}

export const ThemeProvider = ({
  className,
  defaultTheme = docsTheme,
  style,
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme);
  const value = useMemo(() => ({theme, setTheme}), [theme, setTheme]);
  const inlineTheme = useMemo(
    () => (theme.themeClass ? {} : createInlineTheme(vars, theme.tokens)),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <Box
        className={[theme.themeClass, className]}
        style={{...inlineTheme, ...style}}
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
