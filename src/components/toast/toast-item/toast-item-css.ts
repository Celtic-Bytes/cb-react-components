import { Theme } from '@src/models/theme/theme.model';

export const getToastItemCss = (theme: Theme): string => {
  const cf = theme.config;
  return `
    .cb-toast-item{
      background-color: blue ;
      border-radius: ${cf.button.borderRadius || 0};
      border-width: ${cf.button.borderWidth || '0.1rem'};
      border-color: green;  
      display: flex;
      flex-direction: column;
      overflow: hidden;

    }
    .cb-toast-item__main{ 
      box-sizing: border-box;
      display: grid;
      grid-template-areas:
        'icon title action'
        'icon content content';
      padding: 0.5rem;
    }

  .cb-toast-item__action{ grid-area: action; }
  .cb-toast-item__content{ grid-area: content; }   
  .cb-toast-item__icon{ grid-area: icon; }  
  .cb-toast-item__title{ grid-area: title; }  
  .cb-toast-item__progress{ 
    width: 100%; 
    background-color: red;
    height: 5px;
  }  
    
    
    

  `;
};
