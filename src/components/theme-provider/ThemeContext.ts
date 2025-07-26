import { ThemeContextValue } from '@src/models/theme/theme.model';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextValue>({
  themes: [],
  currentTheme: undefined,
  currentThemeIndex: 0,
  switchThemeByIndex: () => {},
});
