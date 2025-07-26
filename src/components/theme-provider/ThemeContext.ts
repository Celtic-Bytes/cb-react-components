import { Theme } from '@src/models/theme/theme.model';
import { createContext } from 'react';

export const ThemeContext = createContext<{
  themes: Theme[];
  currentTheme: Theme | undefined;
  currentThemeIndex: number;
  switchThemeByIndex: (index: number) => void;
}>({
  themes: [],
  currentTheme: undefined,
  currentThemeIndex: 0,
  switchThemeByIndex: () => {},
});
