import { Variant } from '../../../shared/shared.model';
import { Theme } from '../models/ThemeProviders.model';

export const getButtonCss = (theme: Theme) => {
  const cf = theme.config;

  const brightness = theme.type === 'dark' ? '110%' : '90%';

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
        background-color: ${cf.core.accentColorHover};
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
        background-color: ${cf.variants.primaryHover};
    }
    .cb-button--${Variant.secondary}:hover{
        background-color: ${cf.variants.secondaryHover};
    }
    .cb-button--${Variant.success}:hover{
        background-color: ${cf.variants.successHover};
    }
    .cb-button--${Variant.danger}:hover{
        background-color: ${cf.variants.dangerHover};
    }
    .cb-button--${Variant.warning}:hover{
        background-color: ${cf.variants.warningHover};
    }
    .cb-button--${Variant.info}:hover{
        background-color: ${cf.variants.infoHover};
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
        color: ${cf.core.accentColor};        
        border-color: ${cf.core.accentColor};
        filter: brightness(${brightness});
    }

    /* -- variants -- */

    .cb-button--${Variant.primary}-outlined{
        background-color: transparent;
        color: ${cf.variants.primary};
        border-color: ${cf.variants.primary};
        filter: brightness(${brightness});
    }
    .cb-button--${Variant.secondary}-outlined{
        background-color: transparent;
        color: ${cf.variants.secondary};
        border-color: ${cf.variants.secondary};
        filter: brightness(${brightness});
    }
    .cb-button--${Variant.success}-outlined{
        background-color: transparent;
        color: ${cf.variants.success};
        border-color: ${cf.variants.success};
        filter: brightness(${brightness});
    }
    .cb-button--${Variant.danger}-outlined{
        background-color: transparent;
        color: ${cf.variants.danger};
        border-color: ${cf.variants.danger};
        filter: brightness(${brightness});
    }
    .cb-button--${Variant.warning}-outlined{
        background-color: transparent;
        color: ${cf.variants.warning};
        border-color: ${cf.variants.warning};
        filter: brightness(${brightness});
    }
    .cb-button--${Variant.info}-outlined{
        background-color: transparent;
        color: ${cf.variants.info};
        border-color: ${cf.variants.info};
        filter: brightness(${brightness});
    }

    .cb-button--outlined:hover{
        background-color: transparent;
        color: ${cf.core.accentColorHover};        
        border-color: ${cf.core.accentColorHover};
    }

    .cb-button--${Variant.primary}-outlined:hover{
        background-color: transparent;
        color: ${cf.variants.primaryHover};
        border-color: ${cf.variants.primaryHover};
    }
    .cb-button--${Variant.secondary}-outlined:hover{
        background-color: transparent;
        color: ${cf.variants.secondaryHover};
        border-color: ${cf.variants.secondaryHover};
    }
    .cb-button--${Variant.success}-outlined:hover{
        background-color: transparent;
        color: ${cf.variants.successHover};
        border-color: ${cf.variants.successHover};
    }
    .cb-button--${Variant.danger}-outlined:hover{
        background-color: transparent;
        color: ${cf.variants.dangerHover};
        border-color: ${cf.variants.dangerHover};
    }
    .cb-button--${Variant.warning}-outlined:hover{
        background-color: transparent;
        color: ${cf.variants.warningHover};
        border-color: ${cf.variants.warningHover};
    }
    .cb-button--${Variant.info}-outlined:hover{
        background-color: transparent;
        color: ${cf.variants.infoHover};
        border-color: ${cf.variants.infoHover};
    }

    /* -- disabled -- */

    .cb-button--outlined-disabled{
        background-color: transparent;
        cursor: not-allowed;
        color: ${cf.core.gray};
        border-color: ${cf.core.gray};
        filter: brightness(${brightness});
    }

    .cb-button--outlined-disabled:hover{
        background-color: transparent;
        cursor: not-allowed;
        color: ${cf.core.gray};
        border-color: ${cf.core.gray};
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
