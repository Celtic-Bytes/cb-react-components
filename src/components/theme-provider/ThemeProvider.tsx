import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { darkDefaultTheme } from '../../Themes/Dark';
import { lightDefaultTheme } from '../../Themes/Light';
import { Theme } from './models/ThemeProviders.model';
import { ThemeContext } from './ThemeContext';
import { generateCssForTheme } from './ThemeCssGenerator';

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
    styleElement.id = `cb-theme-styles`;
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

  const switchThemeByIndex = useCallback(
    (index: number) => {
      console.log('the index is ', index);
      if (index >= 0 && index < cbThemes.length) {
        setCurrentThemeIndex(index);
      }
    },
    [cbThemes.length]
  );

  const contextValue = useMemo(
    () => ({
      themes: cbThemes,
      currentTheme,
      currentThemeIndex,
      switchThemeByIndex,
    }),
    [cbThemes, currentTheme, currentThemeIndex, switchThemeByIndex]
  );

  const { containerClassname, css } = generateCssForTheme(currentTheme);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div id="cb-theme-container" className={containerClassname}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
