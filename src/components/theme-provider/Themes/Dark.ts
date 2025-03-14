import { Theme } from '../ThemeProviders.models';

const primaryColor = 'rgb(255, 129, 26)';

export const darkDefaultTheme: Theme = {
  key: 'default-dark-theme',
  name: 'Dark theme',
  type: 'dark',
  config: {
    button: {
      borderRadius: '0.3em',
      borderWidth: '0.1em',
    },
    theme: {
      // accentColor: primaryColor,
      accentColor: 'rgb(255, 0, 0)', // TODO: Remove this code
      backgroundColor: 'rgb(53, 53, 53)',
      gray: 'rgb(128, 128, 128)',
      borderRadius: '0.3em',
      color: 'rgb(255, 255, 255)',
      variantDanger: 'rgb(202, 0, 0)',
      variantDefault: 'rgb(141, 141, 141)',
      variantPrimary: primaryColor,
      variantSecondary: 'rgb(255, 151, 67)',
      variantSuccess: 'rgb(0, 160, 37)',
      variantWarning: 'rgb(255, 196, 0)',
    },
  },
};
