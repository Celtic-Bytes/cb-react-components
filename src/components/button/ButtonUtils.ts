import { HTMLAttributes } from 'react';
import { ThemeConfig } from '../theme-provider/ThemeProviders.models';
import { Variant } from './Button.model';

export interface ButtonStyleConfig {
  config: ThemeConfig;
  variant: Variant;
  outlined: boolean;
  disabled: boolean;
}

export const getButtonStylesConfig = ({
  config,
  variant,
  outlined,
  disabled,
}: ButtonStyleConfig): HTMLAttributes<HTMLButtonElement>['style'] => {
  let backgroundColor = outlined
    ? config.backgroundColor
    : config.button[variant];
  let color = outlined ? config.button[variant] : config.textColor;
  let borderRadius = config.button.borderRadius;
  let borderColor = config.button[variant];
  let borderWidth = outlined ? '1px' : 0;
  let cursor = config.button.cursor;

  if (disabled) {
    backgroundColor = outlined ? config.backgroundColor : config.gray;
    color = outlined ? config.gray : config.textColor;
    borderRadius = config.button.borderRadius;
    borderColor = config.gray;
    borderWidth = outlined ? '1px' : 0;
    cursor = 'not-allowed';
  }

  return {
    backgroundColor,
    color,
    borderRadius,
    borderWidth,
    cursor,
    borderColor,
    borderStyle: 'solid',
  };
};
