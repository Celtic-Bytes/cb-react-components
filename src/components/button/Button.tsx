import { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from 'react';
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
  appearance?: Appearance;
  disabled?: boolean;
  iconBottom?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconTop?: ReactNode;
  size?: Sizes;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: ExtendedVariant;
}

export const Button: FC<ButtonProps> = ({
  appearance = AppearanceList.regular,
  children,
  disabled = false,
  iconTop,
  iconBottom,
  iconLeft,
  iconRight,
  size = SizesList.medium,
  type = 'button',
  variant = VariantsListExtended.none,
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
      style={{ ...props.style }}
      type={type}
    >
      <span
        className={`cb-button__icon-top${
          iconTop && (children || iconBottom)
            ? ` cb-button__icon-mb-${size}`
            : ''
        }`}
      >
        {iconTop}
      </span>
      <span
        className={`cb-button__icon-right${
          iconRight && (children || iconLeft)
            ? ` cb-button__icon-ml-${size}`
            : ''
        }`}
      >
        {iconRight}
      </span>
      <span
        className={`cb-button__icon-bottom${
          iconBottom && (children || iconTop)
            ? ` cb-button__icon-mt-${size}`
            : ''
        }`}
      >
        {iconBottom}
      </span>
      <span
        className={`cb-button__icon-left${
          iconLeft && (children || iconRight)
            ? ` cb-button__icon-mr-${size}`
            : ''
        }`}
      >
        {iconLeft}
      </span>
      <span className={`cb-button__content`}>{children}</span>
    </button>
  );
};
