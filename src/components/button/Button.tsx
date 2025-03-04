import { ButtonHTMLAttributes, FC, HTMLAttributes, RefAttributes } from 'react';
import { useTheme } from '../theme-provider/useTheme';
import { Variant } from './Button.model';
import { getButtonStylesConfig } from './ButtonUtils';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  ref?: RefAttributes<HTMLButtonElement>['ref'];
  variant?: Variant;
  outlined?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  disabled = false,
  ref,
  variant = Variant.Default,
  outlined = false,
  ...props
}) => {
  const { config } = useTheme().theme;

  const defaultStyles: HTMLAttributes<HTMLButtonElement>['style'] =
    getButtonStylesConfig({ config, variant, outlined, disabled });

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      style={{ ...defaultStyles, ...props.style }}
      // onMouseDown={(e) => {
      //   e.currentTarget.style = { ...activeStyles, ...props.style };
      // }}
      ref={ref}
    >
      {children}
    </button>
  );
};
