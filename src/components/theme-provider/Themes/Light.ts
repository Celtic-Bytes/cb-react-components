import { Variant } from '../../button/Button.model';
import { Theme } from '../ThemeProviders.models';

const primaryColor = 'rgb(255, 152, 68)';

export const lightDefaultTheme: Theme = {
  key: 'default-light-theme',
  type: 'light',
  config: {
    accentColor: primaryColor,
    backgroundColor: 'rgb(243, 243, 243)',
    button: {
      cursor: 'pointer',
      radius: '0.3em',
      [Variant.Danger]: 'rgb(255, 108, 108)',
      [Variant.Default]: 'rgb(182, 182, 182)',
      [Variant.Primary]: primaryColor,
      [Variant.Secondary]: 'rgb(255, 181, 121)',
      [Variant.Success]: 'rgb(152, 255, 149)',
      [Variant.Warning]: 'rgb(255, 209, 5)',
    },
    gray: 'rgb(201, 201, 201)',
    radius: '0.3em',
    textColor: 'rgb(44, 44, 44)',
  },
};
