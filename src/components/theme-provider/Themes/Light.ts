import { Theme } from '../ThemeProviders.models';

const primaryColor = 'rgb(255, 152, 68)';

export const lightDefaultTheme: Theme = {
  prefix: 'cb',
  key: 'default-light-theme',
  name: 'Light theme',
  type: 'light',
  config: {
    accentColor: primaryColor,
    backgroundColor: 'rgb(243, 243, 243)',
    button: {
      cursor: 'pointer',
      borderRadius: '0.3em',
    },
    gray: 'rgb(201, 201, 201)',
    borderRadius: '0.3em',
    textColor: 'rgb(44, 44, 44)',
    variantDanger: 'rgb(255, 108, 108)',
    variantDefault: 'rgb(182, 182, 182)',
    variantPrimary: primaryColor,
    variantSecondary: 'rgb(255, 181, 121)',
    variantSuccess: 'rgb(152, 255, 149)',
    variantWarning: 'rgb(255, 209, 5)',
  },
};
