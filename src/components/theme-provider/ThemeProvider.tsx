import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Theme } from '../../models/ThemeProviders.model';
import { darkDefaultTheme } from '../../Themes/Dark';
import { lightDefaultTheme } from '../../Themes/Light';
import { ThemeContext } from './ThemeContext';
import { generateCssForTheme } from './ThemeCssGenerator';

const defaultThemes: Theme[] = [darkDefaultTheme, lightDefaultTheme];

export interface ThemeProviderProps {
  id?: string;
  children: ReactNode;
  themes?: Theme[];
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  id,
  children,
  themes = defaultThemes,
}) => {
  const [cbThemes, setCbThemes] = useState<Theme[]>(themes);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const currentTheme = cbThemes[currentThemeIndex];

  const generatedId = useRef(`cb-theme-provider-${useId()}`);

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
      <div
        id={id ?? generatedId.current}
        className={containerClassname}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
