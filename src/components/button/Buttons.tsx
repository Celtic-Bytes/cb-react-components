import { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  style,
  type = 'button',
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={className}
      style={style}
      aria-label={props['aria-label']}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};
