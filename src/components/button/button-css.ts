import { Theme } from '@src/main';
import { AppearanceList } from '@src/models/button/Button.model';
import { SizesList, VariantList } from '@src/models/global/Global.model';

export const getButtonCss = (theme: Theme): string => {
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
        align-items: center;
        background-color: ${cf.global.accentColor};
        border-radius: ${cf.button.borderRadius || 0};        
        border-width: ${cf.button.borderWidth || '0.1em'};
        border-color: transparent;        
        border-style: solid;
        box-sizing: border-box;
        color: ${cf.global.color};
        cursor: pointer;
        display: inline-grid;
        grid-template-areas:
          'top top top'
          'left content right'
          'bottom bottom bottom';
        grid-template-columns: auto minmax(0, 1fr) auto; 
        grid-template-rows: auto minmax(0, 1fr) auto;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;   
    }
    
    .cb-button__icon-top { grid-area: top; justify-self: center; }
    .cb-button__icon-left { grid-area: left; }
    .cb-button__content { grid-area: content; }
    .cb-button__icon-right { grid-area: right; }
    .cb-button__icon-bottom { grid-area: bottom; justify-self: center; }

    .cb-button__icon-top,
    .cb-button__icon-left,
    /* .cb-button__content, */
    .cb-button__icon-right,
    .cb-button__icon-bottom {
      display: flex; /* Helps center icon glyphs */
      align-items: center;
      justify-content: center;
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
        padding: 0.125rem 0.5625rem;
    }
    .cb-button--size-${SizesList.extralarge}{
        font-size: 1.25rem;
        padding: 0.25rem 0.8125rem;
    }

    .cb-button__icon-mr-${SizesList.extrasmall}{ margin-right: 1px; }
    .cb-button__icon-mr-${SizesList.small}{ margin-right: 2px; }
    .cb-button__icon-mr-${SizesList.medium}{ margin-right: 4px; }
    .cb-button__icon-mr-${SizesList.large}{ margin-right: 6px; }
    .cb-button__icon-mr-${SizesList.extralarge}{ margin-right: 8px; }

    .cb-button__icon-ml-${SizesList.extrasmall}{ margin-left: 1px; }
    .cb-button__icon-ml-${SizesList.small}{ margin-left: 2px; }
    .cb-button__icon-ml-${SizesList.medium}{ margin-left: 4px; }
    .cb-button__icon-ml-${SizesList.large}{ margin-left: 6px; }
    .cb-button__icon-ml-${SizesList.extralarge}{ margin-left: 8px; }

    .cb-button__icon-mt-${SizesList.extrasmall}{ margin-top: 1px; }
    .cb-button__icon-mt-${SizesList.small}{ margin-top: 2px; }
    .cb-button__icon-mt-${SizesList.medium}{ margin-top: 4px; }
    .cb-button__icon-mt-${SizesList.large}{ margin-top: 6px; }
    .cb-button__icon-mt-${SizesList.extralarge}{ margin-top: 8px; }

    .cb-button__icon-mb-${SizesList.extrasmall}{ margin-bottom: 1px; }
    .cb-button__icon-mb-${SizesList.small}{ margin-bottom: 2px; }
    .cb-button__icon-mb-${SizesList.medium}{ margin-bottom: 4px; }
    .cb-button__icon-mb-${SizesList.large}{ margin-bottom: 6px; }
    .cb-button__icon-mb-${SizesList.extralarge}{ margin-bottom: 8px; }

    `;
};
