import { Theme } from '../models/ThemeProviders.model';

export const darkDefaultTheme: Theme = {
  key: 'default-dark-theme',
  name: 'Dark theme',
  type: 'dark',
  config: {
    button: {
      borderRadius: '0.3em',
      borderWidth: '0.1em',
    },
    core: {
      accentColor: 'rgb(212, 120, 0)',
      backgroundColor: 'rgb(53, 53, 53)',
      borderRadius: '0.3em',
      color: 'rgb(255, 255, 255)',
      gray: 'rgb(108, 117, 125)',
    },
    variants: {
      primary: 'rgb(51, 153, 255)',
      secondary: 'rgb(170, 74, 255)',
      success: 'rgb(34, 197, 94)',
      danger: 'rgb(239, 68, 68)',
      warning: 'rgb(245, 158, 11)',
      info: 'rgb(223, 208, 0)',
    },
  },
};
