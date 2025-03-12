import { Theme, ThemeGeneratedCss } from './ThemeProviders.models';

export const generateCssForTheme = (theme: Theme): ThemeGeneratedCss => {
  const cf = theme.config;
  const prefix = theme.prefix?.trim().toLowerCase() || 'cb';
  const themeClassName = `${prefix}-${
    theme.name.trim().toLowerCase().replace(/\s+/g, '') || `theme${theme.key}`
  }`;
  const css = `
    :root{
        --${prefix}-variant-default: ${cf.variantDefault} ;
        --${prefix}-variant-primary: ${cf.variantPrimary} ;
        --${prefix}-variant-secondary: ${cf.variantSecondary} ;
        --${prefix}-variant-success: ${cf.variantSuccess} ;
        --${prefix}-variant-warning: ${cf.variantWarning} ;
        --${prefix}-variant-danger: ${cf.variantDanger} ;

        --${prefix}-background-color : ${cf.backgroundColor} ;
        --${prefix}-accent-color : ${cf.accentColor} ;
        --${prefix}-text-color : ${cf.textColor} ;
        --${prefix}-border-radius : ${cf.borderRadius || 0} ;
        --${prefix}-gray : ${cf.gray} ;
    }
    
    .${prefix}-default{
         background-color: var(--${prefix}-variant-default) ;
    }
    .${prefix}-primary{
         background-color: var(--${prefix}-variant-primary) ;
    }
    .${prefix}-secondary{
         background-color: var(--${prefix}-variant-secondary) ;
    }
    .${prefix}-success{
         background-color: var(--${prefix}-variant-success) ;
    }
    .${prefix}-warning{
         background-color: var(--${prefix}-variant-warning) ;
    }
    .${prefix}-danger{
         background-color: var(--${prefix}-variant-danger) ;
    }


    .${themeClassName}{
        background-color: var(--${prefix}-background-color) ;
        color: var(--${prefix}-text-color) ;
        border-radius: var(--${prefix}-border-radius) ;    
    }

    .${prefix}-button{
        background-color: var(--${prefix}-accent-color) ;
        border-radius: ${cf.button.borderRadius || 0} ;
        cursor: ${cf.button.cursor || 'auto'}
    } 
    `;

  return { prefix, themeClassName, css };
};
