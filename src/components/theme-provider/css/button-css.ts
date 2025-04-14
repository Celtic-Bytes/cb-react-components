import { Theme } from '../models/ThemeProviders.model';
import { Variant } from '../models/variants/ThemeVariants.model';

export const getButtonCss = (theme: Theme) => {
  const cf = theme.config;

  const adjustColor = theme.type === 'dark' ? 'black' : 'white';
  const invertedAdjustColor = theme.type === 'dark' ? 'white' : 'black';

  /**
   * Adjust the color of the regular + hover button.
   */
  const cmrh = (color: string): string => {
    return `color-mix( in oklab, ${color} 90%, ${adjustColor})`;
  };
  /** Adjust the color of the only outlined button. */
  const cmo = (color: string): string => {
    return `color-mix( in oklab, ${color} 85%, ${invertedAdjustColor})`;
  };
  /** Adjust the color of the outlined + hover button. */
  const cmoh = (color: string): string => {
    return `color-mix( in oklab, ${color} 90%, ${invertedAdjustColor})`;
  };

  return `

    /* BASE BUTTON CLASS */

    .cb-button{
        background-color: ${cf.core.accentColor};
        border-radius: ${cf.button.borderRadius || 0};        
        border-width: ${cf.button.borderWidth || '0.1em'};
        border-color: transparent;        
        border-style: solid;
        color: ${cf.core.color};
        cursor: pointer;        
    }

    .cb-button:hover{
        background-color: ${cmrh(cf.core.accentColor)};
    }

    /* ------------------REGULAR BUTTON CLASSES-------------------- */

    /* -- variants -- */
    
    .cb-button--${Variant.primary}{
        background-color: ${cf.variants.primary};
    }
    .cb-button--${Variant.secondary}{
        background-color: ${cf.variants.secondary};
    }
    .cb-button--${Variant.success}{
        background-color: ${cf.variants.success};
    }
    .cb-button--${Variant.danger}{
        background-color: ${cf.variants.danger};
    }
    .cb-button--${Variant.warning}{
        background-color: ${cf.variants.warning};
    }
    .cb-button--${Variant.info}{
        background-color: ${cf.variants.info};
    }


    .cb-button--${Variant.primary}:hover{
        background-color: ${cmrh(cf.variants.primary)};
    }
    .cb-button--${Variant.secondary}:hover{
        background-color: ${cmrh(cf.variants.secondary)};
    }
    .cb-button--${Variant.success}:hover{
        background-color: ${cmrh(cf.variants.success)};
    }
    .cb-button--${Variant.danger}:hover{
        background-color: ${cmrh(cf.variants.danger)};
    }
    .cb-button--${Variant.warning}:hover{
        background-color: ${cmrh(cf.variants.warning)};
    }
    .cb-button--${Variant.info}:hover{
        background-color: ${cmrh(cf.variants.info)};
    }  

    /* -- disabled -- */

    .cb-button--disabled{
        cursor: not-allowed;
        background-color: ${cf.core.gray}; 
    }

    .cb-button--disabled:hover{
        cursor: not-allowed;
        background-color: ${cf.core.gray}; 
    }



    /* ----------------------------------- OUTLINED BUTTON CLASSES ------------------------------*/

    .cb-button--outlined{
        background-color: transparent;
        color: ${cmo(cf.core.accentColor)};        
        border-color: ${cmo(cf.core.accentColor)};
        
    }

    /* -- variants -- */

    .cb-button--${Variant.primary}-outlined{
        background-color: transparent;
        color: ${cmo(cf.variants.primary)};
        border-color: ${cmo(cf.variants.primary)};
        
    }
    .cb-button--${Variant.secondary}-outlined{
        background-color: transparent;
        color: ${cmo(cf.variants.secondary)};
        border-color: ${cmo(cf.variants.secondary)};
        
    }
    .cb-button--${Variant.success}-outlined{
        background-color: transparent;
        color: ${cmo(cf.variants.success)};
        border-color: ${cmo(cf.variants.success)};
        
    }
    .cb-button--${Variant.danger}-outlined{
        background-color: transparent;
        color: ${cmo(cf.variants.danger)};
        border-color: ${cmo(cf.variants.danger)};
        
    }
    .cb-button--${Variant.warning}-outlined{
        background-color: transparent;
        color: ${cmo(cf.variants.warning)};
        border-color: ${cmo(cf.variants.warning)};
        
    }
    .cb-button--${Variant.info}-outlined{
        background-color: transparent;
        color: ${cmo(cf.variants.info)};
        border-color: ${cmo(cf.variants.info)};
        
    }

    .cb-button--outlined:hover{
        background-color: ${cmoh('transparent')};
    }

    .cb-button--${Variant.primary}-outlined:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${Variant.secondary}-outlined:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${Variant.success}-outlined:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${Variant.danger}-outlined:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${Variant.warning}-outlined:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${Variant.info}-outlined:hover{
        background-color: ${cmoh('transparent')};
    }

    /* -- disabled -- */

    .cb-button--outlined-disabled{
        background-color: transparent;
        cursor: not-allowed;
        color: ${cmo(cf.core.gray)};
        border-color: ${cmo(cf.core.gray)};
        
    }

    .cb-button--outlined-disabled:hover{
        background-color: transparent;
        cursor: not-allowed;
        color: ${cmo(cf.core.gray)};
        border-color: ${cmo(cf.core.gray)};
    }

    /* -- link -- */

    .cb-button--outlined-link{        
       border-color: transparent;
    }

    .cb-button--outlined-link:hover{        
       border-color: transparent;
    }

    `;
};
