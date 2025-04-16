import { Theme } from '../models/ThemeProviders.model';

export const lightDefaultTheme: Theme = {
  key: 'default-light-theme',
  name: 'Light theme',
  type: 'light',
  config: {
    button: {
      borderRadius: '0.3em',
      borderWidth: '0.1em',
    },
    global: {
      accentColor: 'rgb(255, 124, 31)',
      backgroundColor: 'rgb(243, 243, 243)',
      borderRadius: '0.3em',
      color: 'rgb(44, 44, 44)',
      gray: 'rgb(108, 117, 125)',
    },
    variants: {
      primary: 'rgb(96, 160, 255)',
      secondary: 'rgb(192, 137, 255)',
      success: 'rgb(60, 199, 134)',
      danger: 'rgb(240, 96, 111)',
      warning: 'rgb(255, 163, 59)',
      info: 'rgb(255, 234, 41)',
    },
  },
};
