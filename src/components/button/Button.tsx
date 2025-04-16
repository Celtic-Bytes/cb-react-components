import { ButtonHTMLAttributes, FC, HTMLAttributes, RefAttributes } from 'react';
import { Appearance, AppearanceList } from '../../models/button/Button.model';
import { Sizes, SizesList } from '../../models/global/Global.model';
import {
  ExtendedVariant,
  VariantsListExtended,
} from '../../models/variants/Variants.model';

const baseClassName = 'cb-button';
export interface GenerateClass {
  disabled?: boolean;
  variant?: ExtendedVariant;
  appearance?: Appearance;
}

const generateRegularClassName = ({
  disabled,
  variant,
  appearance,
}: GenerateClass): string => {
  if (appearance !== AppearanceList.regular) return '';
  if (variant === VariantsListExtended.none && !disabled) return '';

  const variantName = variant !== VariantsListExtended.none ? variant : '';

  return `${baseClassName}--${disabled ? 'disabled' : variantName}`;
};

const generateOutlinedClassName = ({
  disabled,
  variant,
  appearance,
}: GenerateClass): string => {
  if (appearance === AppearanceList.regular) return '';

  const variantName =
    variant !== VariantsListExtended.none && !disabled ? variant : '';
  const separator =
    variant !== VariantsListExtended.none && !disabled ? '-' : '';
  const disabledName = disabled ? '-disabled' : '';

  return `${baseClassName}--${variantName}${separator}${AppearanceList.outlined}${disabledName}`;
};

/**
 * 'text' Classname always have to be after 'outlined' since the 'text' remove
 * borders of the 'outlined' class.
 */
const generateTextClassName = ({
  appearance,
}: Partial<GenerateClass>): string => {
  return appearance === AppearanceList.text
    ? ` cb-button--${AppearanceList.outlined}-${AppearanceList.text}`
    : '';
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  ref?: RefAttributes<HTMLButtonElement>['ref'];
  appearance?: Appearance;
  disabled?: boolean;
  variant?: ExtendedVariant;
  size: Sizes;
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  ref,
  appearance = AppearanceList.regular,
  variant = VariantsListExtended.none,
  disabled = false,
  size = SizesList.medium,
  ...props
}) => {
  return (
    <button
      {...props}
      aria-disabled={disabled}
      className={[
        baseClassName,
        generateRegularClassName({ disabled, variant, appearance }),
        generateOutlinedClassName({ disabled, variant, appearance }),
        generateTextClassName({ disabled, variant, appearance }),
        `cb-button--size-${size}`,
        props.className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      ref={ref}
      style={{ ...props.style }}
      type={type}
    >
      {children}
    </button>
  );
};
