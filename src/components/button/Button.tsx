import { ButtonHTMLAttributes, FC, HTMLAttributes, RefAttributes } from 'react';
import { Variant } from '../../shared/models';

interface GenerateClass {
  disabled?: boolean;
  variant?: Variant;
  outlined?: boolean;
}

const generateClassName = ({
  disabled,
  variant,
  outlined,
}: GenerateClass): string => {
  let classes = 'cb-button';

  if (disabled || variant || outlined) {
    const calculatedClass =
      `${variant && !disabled ? variant : ''}` +
      `${disabled ? 'disabled' : ''}` +
      `${outlined && (disabled || variant) ? '-' : ''}` +
      `${outlined ? 'outlined' : ''}`;
    classes = classes + ` cb-button--${calculatedClass}`;
  }

  return classes;
};

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
  variant,
  outlined = false,
  ...props
}) => {
  return (
    <button
      value={'34'}
      {...props}
      aria-disabled={disabled}
      className={[
        generateClassName({ disabled, outlined, variant }),
        props.className ?? '',
      ].join(' ')}
      disabled={disabled}
      // onMouseDown={(e) => {
      //   e.currentTarget.style = { ...activeStyles, ...props.style };
      // }}
      ref={ref}
      style={{ ...props.style }}
      type={type}
    >
      {children}
    </button>
  );
};
