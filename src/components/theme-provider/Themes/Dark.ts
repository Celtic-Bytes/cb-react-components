import { Theme } from '../ThemeProviders.models';

const primaryColor = 'rgb(255, 129, 26)';

export const darkDefaultTheme: Theme = {
  prefix: 'cb',
  key: 'default-dark-theme',
  name: 'Dark theme',
  type: 'dark',
  config: {
    accentColor: primaryColor,
    backgroundColor: 'rgb(53, 53, 53)',
    button: {
      cursor: 'pointer',
      borderRadius: '0.3em',
    },
    gray: 'rgb(128, 128, 128)',
    borderRadius: '0.3em',
    textColor: 'rgb(255, 255, 255)',
    variantDanger: 'rgb(202, 0, 0)',
    variantDefault: 'rgb(141, 141, 141)',
    variantPrimary: primaryColor,
    variantSecondary: 'rgb(255, 151, 67)',
    variantSuccess: 'rgb(0, 160, 37)',
    variantWarning: 'rgb(255, 196, 0)',
  },
};
