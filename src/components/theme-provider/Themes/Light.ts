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
    core: {
      accentColor: 'rgb(255, 124, 31)',
      accentColorHover: 'rgb(255, 146, 68)',
      backgroundColor: 'rgb(243, 243, 243)',
      borderRadius: '0.3em',
      color: 'rgb(44, 44, 44)',
      gray: 'rgb(108, 117, 125)',
    },
    variants: {
      primary: 'rgb(96, 160, 255)',
      primaryHover: 'rgb(139, 186, 255)',
      secondary: 'rgb(192, 137, 255)',
      secondaryHover: 'rgb(207, 166, 255)',
      success: 'rgb(60, 199, 134)',
      successHover: 'rgb(76, 221, 154)',
      danger: 'rgb(240, 96, 111)',
      dangerHover: 'rgb(241, 122, 134)',
      warning: 'rgb(255, 163, 59)',
      warningHover: 'rgb(255, 177, 87)',
      info: 'rgb(255, 234, 41)', // Amber/Yellow
      infoHover: 'rgb(255, 245, 158)',
    },
  },
};
