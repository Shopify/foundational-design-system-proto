import React, {useMemo, FC, ElementType} from 'react';
import cc from 'classcat';

interface ThemeProviderProps {
  as?: ElementType;
  theme?: {[key: string]: any};
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  as: Element = 'div',
  theme = {},
  ...props
}) => {
  // This works, but is not legit...
  // Implementation is only for prototyping purposes
  const style = useMemo(() => {
    const convert = (
      obj: {[key: string]: any},
      prefix = '',
    ): {[key: string]: any} =>
      Object.entries(obj).reduce((transformed, [key, objectOrValue]) => {
        const value = objectOrValue;
        if (typeof value === 'object') {
          return convert(value, key);
        }

        return {
          ...transformed,
          [`--${prefix ? `${prefix}-` : ''}${key
            .replace(/([A-Z0-9])/g, '-$1')
            .toLowerCase()}`]: value,
        };
      }, {});

    return convert(theme);
  }, [theme]);

  return <Element style={style} {...props} />;
};
