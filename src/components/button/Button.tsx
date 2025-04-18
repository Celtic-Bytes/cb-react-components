import {
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  ReactNode,
  useId,
  useRef,
} from 'react';

import { Appearance, AppearanceList } from '@src/models/button/Button.model';
import {
  Sizes,
  SizesList,
  Variant,
  VariantList,
} from '@src/models/global/Global.model';

const baseClassName = 'cb-button';
interface GenerateClass {
  disabled?: boolean;
  variant?: Variant;
  appearance?: Appearance;
}

const generateRegularClassName = ({
  disabled,
  variant,
  appearance,
}: GenerateClass): string => {
  if (appearance !== AppearanceList.regular) return '';
  if (variant === VariantList.default && !disabled) return '';

  const variantName = variant !== VariantList.default ? variant : '';

  return `${baseClassName}--${disabled ? 'disabled' : variantName}`;
};

const generateOutlinedClassName = ({
  disabled,
  variant,
  appearance,
}: GenerateClass): string => {
  if (appearance === AppearanceList.regular) return '';

  const variantName =
    variant !== VariantList.default && !disabled ? variant : '';
  const separator = variant !== VariantList.default && !disabled ? '-' : '';
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
  id?: string;
  size?: Sizes;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: Variant;
}

export const Button: FC<ButtonProps> = ({
  appearance = AppearanceList.regular,
  children,
  disabled = false,
  iconTop,
  iconBottom,
  iconLeft,
  iconRight,
  id,
  size = SizesList.medium,
  type = 'button',
  variant = VariantList.default,
  ...props
}) => {
  const generatedId = useRef(`cb-button-${useId()}`);

  return (
    <button
      {...props}
      id={id ?? generatedId.current}
      aria-disabled={disabled}
      className={[
        baseClassName,
        generateRegularClassName({ disabled, variant, appearance }),
        generateOutlinedClassName({ disabled, variant, appearance }),
        generateTextClassName({ disabled, variant, appearance }),
        `cb-button--size-${size}`,
        props.className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
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
