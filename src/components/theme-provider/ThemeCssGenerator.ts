import { getButtonCss } from './css/button-css';
import { Theme, ThemeGeneratedCss } from './models/ThemeProviders.model';

export const generateCssForTheme = (theme: Theme): ThemeGeneratedCss => {
  if (!theme) {
    return { css: '', containerClassname: '' };
  }
  const cf = theme.config;
  const containerClassname = 'cb-theme';
  const css =
    `
    .${containerClassname}{
        background-color: ${cf.core.backgroundColor} ;
        color: ${cf.core.color} ;
        border-radius: ${cf.core.borderRadius} ;    
    }
    ` + getButtonCss(theme);

  return { css, containerClassname };
};
