import { createContext } from 'react';
import { Theme } from './ThemeProviders.models';
import { darkDefaultTheme } from './Themes/Dark';
import { lightDefaultTheme } from './Themes/Light';

const defaultThemes: Theme[] = [darkDefaultTheme, lightDefaultTheme];

export const ThemeContext = createContext<{
  theme: Theme;
  switchTheme: (index: number) => void;
  /** Add themes to pre-existing ones. */
  addThemes: (newThemes: Theme[]) => void;
  /** Delete previous themes Overrinding them by the new ones */
  setThemes: (newThemes: Theme[]) => void;
}>({
  theme: defaultThemes[0],
  switchTheme: () => {},
  addThemes: () => {},
  setThemes: () => {},
});
