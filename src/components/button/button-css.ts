import { AppearanceList } from '../../models/button/Button.model';
import { SizesList } from '../../models/global/Global.model';
import { Theme } from '../../models/ThemeProviders.model';
import { VariantList } from '../../models/variants/Variants.model';

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
  /** Adjust the color of the only ${AppearanceList.outlined} button. */
  const cmo = (color: string): string => {
    return `color-mix( in oklab, ${color} 85%, ${invertedAdjustColor})`;
  };
  /** Adjust the color of the ${AppearanceList.outlined} + hover button. */
  const cmoh = (color: string): string => {
    return `color-mix( in oklab, ${color} 90%, ${invertedAdjustColor})`;
  };

  return `

    /* BASE BUTTON CLASS */

    .cb-button{
        background-color: ${cf.global.accentColor};
        border-radius: ${cf.button.borderRadius || 0};        
        border-width: ${cf.button.borderWidth || '0.1em'};
        border-color: transparent;        
        border-style: solid;
        color: ${cf.global.color};
        cursor: pointer;        
    }

    .cb-button:hover{
        background-color: ${cmrh(cf.global.accentColor)};
    }

    /* ------------------REGULAR BUTTON CLASSES-------------------- */

    /* -- variants -- */
    
    .cb-button--${VariantList.primary}{
        background-color: ${cf.variants.primary};
    }
    .cb-button--${VariantList.secondary}{
        background-color: ${cf.variants.secondary};
    }
    .cb-button--${VariantList.success}{
        background-color: ${cf.variants.success};
    }
    .cb-button--${VariantList.danger}{
        background-color: ${cf.variants.danger};
    }
    .cb-button--${VariantList.warning}{
        background-color: ${cf.variants.warning};
    }
    .cb-button--${VariantList.info}{
        background-color: ${cf.variants.info};
    }


    .cb-button--${VariantList.primary}:hover{
        background-color: ${cmrh(cf.variants.primary)};
    }
    .cb-button--${VariantList.secondary}:hover{
        background-color: ${cmrh(cf.variants.secondary)};
    }
    .cb-button--${VariantList.success}:hover{
        background-color: ${cmrh(cf.variants.success)};
    }
    .cb-button--${VariantList.danger}:hover{
        background-color: ${cmrh(cf.variants.danger)};
    }
    .cb-button--${VariantList.warning}:hover{
        background-color: ${cmrh(cf.variants.warning)};
    }
    .cb-button--${VariantList.info}:hover{
        background-color: ${cmrh(cf.variants.info)};
    }  

    /* -- disabled -- */

    .cb-button--disabled{
        cursor: not-allowed;
        background-color: ${cf.global.gray}; 
    }

    .cb-button--disabled:hover{
        cursor: not-allowed;
        background-color: ${cf.global.gray}; 
    }



    /* ----------------------------------- OUTLINED BUTTON CLASSES ------------------------------*/

    .cb-button--${AppearanceList.outlined}{
        background-color: transparent;
        color: ${cmo(cf.global.accentColor)};        
        border-color: ${cmo(cf.global.accentColor)};        
    }

    /* -- variants -- */

    .cb-button--${VariantList.primary}-${AppearanceList.outlined}{
        background-color: transparent;
        color: ${cmo(cf.variants.primary)};
        border-color: ${cmo(cf.variants.primary)};
        
    }
    .cb-button--${VariantList.secondary}-${AppearanceList.outlined}{
        background-color: transparent;
        color: ${cmo(cf.variants.secondary)};
        border-color: ${cmo(cf.variants.secondary)};
        
    }
    .cb-button--${VariantList.success}-${AppearanceList.outlined}{
        background-color: transparent;
        color: ${cmo(cf.variants.success)};
        border-color: ${cmo(cf.variants.success)};
        
    }
    .cb-button--${VariantList.danger}-${AppearanceList.outlined}{
        background-color: transparent;
        color: ${cmo(cf.variants.danger)};
        border-color: ${cmo(cf.variants.danger)};
        
    }
    .cb-button--${VariantList.warning}-${AppearanceList.outlined}{
        background-color: transparent;
        color: ${cmo(cf.variants.warning)};
        border-color: ${cmo(cf.variants.warning)};
        
    }
    .cb-button--${VariantList.info}-${AppearanceList.outlined}{
        background-color: transparent;
        color: ${cmo(cf.variants.info)};
        border-color: ${cmo(cf.variants.info)};
        
    }

    .cb-button--${AppearanceList.outlined}:hover{
        background-color: ${cmoh('transparent')};
    }

    .cb-button--${VariantList.primary}-${AppearanceList.outlined}:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${VariantList.secondary}-${AppearanceList.outlined}:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${VariantList.success}-${AppearanceList.outlined}:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${VariantList.danger}-${AppearanceList.outlined}:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${VariantList.warning}-${AppearanceList.outlined}:hover{
        background-color: ${cmoh('transparent')};
    }
    .cb-button--${VariantList.info}-${AppearanceList.outlined}:hover{
        background-color: ${cmoh('transparent')};
    }

    /* -- disabled -- */

    .cb-button--${AppearanceList.outlined}-disabled{
        background-color: transparent;
        cursor: not-allowed;
        color: ${cmo(cf.global.gray)};
        border-color: ${cmo(cf.global.gray)};
        
    }

    .cb-button--${AppearanceList.outlined}-disabled:hover{
        background-color: transparent;
        cursor: not-allowed;
        color: ${cmo(cf.global.gray)};
        border-color: ${cmo(cf.global.gray)};
    }

    /* -- text -- */

    .cb-button--${AppearanceList.outlined}-${AppearanceList.text}{        
       border-color: transparent;
    }

    .cb-button--${AppearanceList.outlined}-${AppearanceList.text}:hover{        
       border-color: transparent;
    }

    /* -------------------------- Sizes ------------------------- */

    .cb-button--size-${SizesList.extrasmall}{
        font-size: 0.75rem;
        padding: 0.0313rem 0.0625rem;
    }
    .cb-button--size-${SizesList.small}{
        font-size: 0.875rem;
        padding: 0.0313rem 0.1865rem;
    }
    .cb-button--size-${SizesList.medium}{
        font-size: 1rem;
        padding: 0.0625rem 0.375rem;
    }
    .cb-button--size-${SizesList.large}{
        font-size: 1.125rem;
        padding: 0.125rem 0.625rem;
    }
    .cb-button--size-${SizesList.extralarge}{
        font-size: 1.25rem;
        padding: 0.25rem 1.25rem;
    }

    `;
};
