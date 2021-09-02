import React from 'react';

interface ThemeContextValue {
  themeClass: string;
}

const ThemeContext = React.createContext<ThemeContextValue>({themeClass: ''});

export interface ThemeProviderProps {
  children: React.ReactNode;
  themeClass: ThemeContextValue['themeClass'];
}

export function ThemeProvider(props: ThemeProviderProps) {
  const value = React.useMemo(() => {
    return {
      themeClass: props.themeClass,
    };
  }, [props.themeClass]);

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
