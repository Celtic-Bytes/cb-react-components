import { Theme, ThemeGeneratedCss } from '../../models/ThemeProviders.model';
import { getButtonCss } from '../button/button-css';

export const generateCssForTheme = (theme: Theme): ThemeGeneratedCss => {
  if (!theme) {
    return { css: '', containerClassname: '' };
  }
  const cf = theme.config;
  const containerClassname = 'cb-theme';
  const css =
    `
    *, *::before, *::after {
      box-sizing: border-box;
    }

    html {       
       font-size: 1rem;
    }

    html, body {
      line-height: 1.5;
      margin:0;
      padding: 0;
      height: 100%;
      overflow-x: hidden;
    }

    .${containerClassname}{
        background-color: ${cf.global.backgroundColor} ;
        color: ${cf.global.color} ;
        border-radius: ${cf.global.borderRadius} ;    
    }
    ` + getButtonCss(theme);

  return { css, containerClassname };
};
