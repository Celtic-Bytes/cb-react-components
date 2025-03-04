import { Variant } from '../../button/Button.model';
import { Theme } from '../ThemeProviders.models';

const primaryColor = 'rgb(255, 129, 26)';

export const darkDefaultTheme: Theme = {
  key: 'default-dark-theme',
  type: 'dark',
  config: {
    accentColor: primaryColor,
    backgroundColor: 'rgb(53, 53, 53)',
    button: {
      [Variant.Danger]: 'rgb(202, 0, 0)',
      [Variant.Default]: 'rgb(141, 141, 141)',
      [Variant.Primary]: primaryColor,
      [Variant.Secondary]: 'rgb(255, 151, 67)',
      [Variant.Success]: 'rgb(0, 160, 37)',
      [Variant.Warning]: 'rgb(255, 196, 0)',
      cursor: 'pointer',
      radius: '0.3em',
    },
    gray: 'rgb(128, 128, 128)',
    radius: '0.3em',
    textColor: 'rgb(255, 255, 255)',
  },
};
