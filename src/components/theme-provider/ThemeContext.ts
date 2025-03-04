import { createContext } from 'react';
import { Theme } from './ThemeProviders.models';
import { darkDefaultTheme } from './Themes/Dark';
import { lightDefaultTheme } from './Themes/Light';

const defaultThemes: Theme[] = [darkDefaultTheme, lightDefaultTheme];

export const ThemeContext = createContext<{
  theme: Theme;
  switchTheme: (index: number) => void;
  addTheme: (newTheme: Theme) => void;
}>({
  theme: defaultThemes[0],
  switchTheme: () => {},
  addTheme: () => {},
});
