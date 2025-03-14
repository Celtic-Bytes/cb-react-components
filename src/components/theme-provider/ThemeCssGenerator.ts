import { getButtonCss } from './css/button-css';
import { Theme, ThemeGeneratedCss } from './ThemeProviders.models';

export const generateCssForTheme = (theme: Theme): ThemeGeneratedCss => {
  if (!theme) {
    return { css: '', containerClassname: '' };
  }
  const cf = theme.config;
  const containerClassname = 'cb-theme';
  const css =
    `
    .${containerClassname}{
        background-color: ${cf.theme.backgroundColor} ;
        color: ${cf.theme.color} ;
        border-radius: ${cf.theme.borderRadius} ;    
    }
    ` + getButtonCss(theme);

  return { css, containerClassname };
};
