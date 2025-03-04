import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './ThemeProviders.models';
import { darkDefaultTheme } from './Themes/Dark';
import { lightDefaultTheme } from './Themes/Light';

const defaultThemes: Theme[] = [darkDefaultTheme, lightDefaultTheme];

export interface ThemeProviderProps {
  children: ReactNode;
  themes?: Theme[];
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  themes = defaultThemes,
}) => {
  const [cbThemes, setCbThemes] = useState<Theme[]>(themes);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const switchTheme = useCallback(
    (index: number) => {
      if (index >= 0 && index < cbThemes.length) {
        setCurrentThemeIndex(index);
      }
    },
    [cbThemes]
  );

  const addTheme = useCallback((newTheme: Theme) => {
    setCbThemes((prevThemes) => [...prevThemes, newTheme]);
  }, []);

  const contextValue = useMemo(
    () => ({
      theme: cbThemes[currentThemeIndex],
      switchTheme,
      addTheme,
    }),
    [addTheme, cbThemes, currentThemeIndex, switchTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        style={{ backgroundColor: contextValue.theme.config.backgroundColor }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
