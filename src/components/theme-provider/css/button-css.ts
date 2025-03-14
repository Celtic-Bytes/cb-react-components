import { Variant } from '../../../shared/models';
import { Theme } from '../ThemeProviders.models';

export const getButtonCss = (theme: Theme) => {
  const cf = theme.config;
  return `

    /* REGULAR BUTTON */

    .cb-button{
        background-color: ${cf.theme.accentColor};
        border-radius: ${cf.button.borderRadius || 0};
        color: ${cf.theme.color};
        border-width: 0;
        cursor: pointer;

        &:hover{
           filter: brightness(120%) 
        }
    }
    
    .cb-button--${Variant.default}{
        background-color: ${cf.theme.variantDefault};
    }
    .cb-button--${Variant.primary}{
        background-color: ${cf.theme.variantPrimary};
    }
    .cb-button--${Variant.secondary}{
        background-color: ${cf.theme.variantSecondary};
    }
    .cb-button--${Variant.success}{
        background-color: ${cf.theme.variantSuccess};
    }
    .cb-button--${Variant.warning}{
        background-color: ${cf.theme.variantWarning};
    }
    .cb-button--${Variant.danger}{
        background-color: ${cf.theme.variantDanger};
    }

    .cb-button--disabled{
        cursor: not--allowed;
        background-color: ${cf.theme.gray};    
    }

    /* OUTLINED BUTTON */

    .cb-button--outlined{
        background-color: transparent;
        color: ${cf.theme.accentColor};
        border-width: ${cf.button.borderWidth || '0.1em'};
        border-color: ${cf.theme.accentColor};
    }

    .cb-button--${Variant.default}-outlined{
        color: ${cf.theme.variantDefault};
        border-color: ${cf.theme.variantDefault};
    }
    .cb-button--${Variant.primary}-outlined{
        color: ${cf.theme.variantPrimary};
        border-color: ${cf.theme.variantPrimary};
    }
    .cb-button--${Variant.secondary}-outlined{
        color: ${cf.theme.variantSecondary};
        border-color: ${cf.theme.variantSecondary};
    }
    .cb-button--${Variant.success}-outlined{
        color: ${cf.theme.variantSuccess};
        border-color: ${cf.theme.variantSuccess};
    }
    .cb-button--${Variant.warning}-outlined{
        color: ${cf.theme.variantWarning};
        border-color: ${cf.theme.variantWarning};
    }
    .cb-button--${Variant.danger}-outlined{
        color: ${cf.theme.variantDanger};
        border-color: ${cf.theme.variantDanger};
    }

    .cb-button--disabled-outlined{
        cursor: not--allowed;
        background-color: transparent;
        color: ${cf.theme.gray};
        border-color: ${cf.theme.gray};        
    }

    `;
};
