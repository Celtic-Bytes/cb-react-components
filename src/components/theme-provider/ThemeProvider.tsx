import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeContext } from './ThemeContext';
import { generateCssForTheme } from './ThemeCssGenerator';
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

  const currentTheme = cbThemes[currentThemeIndex];

  // Dynamically generate CSS and insert into the <head>
  useEffect(() => {
    const styleElement = document.createElement('style');
    const gStyles = generateCssForTheme(currentTheme);
    styleElement.id = `${gStyles.prefix}-theme-styles`;
    styleElement.innerHTML = gStyles.css;

    const existingStyleElement = document.getElementById('theme-styles');
    if (existingStyleElement) {
      existingStyleElement.replaceWith(styleElement);
    } else {
      document.head.appendChild(styleElement);
    }

    return () => {
      styleElement.remove();
    };
  }, [currentTheme]);

  const switchTheme = useCallback(
    (index: number) => {
      if (index >= 0 && index < cbThemes.length) {
        setCurrentThemeIndex(index);
      }
    },
    [cbThemes]
  );

  const addThemes = useCallback((newThemes: Theme[]) => {
    setCbThemes((prevThemes) => [...prevThemes, ...newThemes]);
  }, []);

  const setThemes = useCallback((newThemes: Theme[]) => {
    setCbThemes(() => [...newThemes]);
  }, []);

  const contextValue = useMemo(
    () => ({
      theme: currentTheme,
      switchTheme,
      addThemes,
      setThemes,
    }),
    [addThemes, currentTheme, switchTheme, setThemes]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={generateCssForTheme(currentTheme).themeClassName}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
