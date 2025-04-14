import { ButtonHTMLAttributes, FC, HTMLAttributes, RefAttributes } from 'react';
import { VariantExtended } from '../../shared/shared.model';

export type Appearance = 'regular' | 'outlined' | 'link';

export interface GenerateClass {
  disabled?: boolean;
  variant?: VariantExtended;
  appearance?: Appearance;
}

/**
 * Generate the classNames based on the @see {@link /src/components/theme-provider/css/button-css.ts}
 */
const generateClassName = ({
  disabled,
  variant,
  appearance,
}: GenerateClass): string => {
  const baseClass = 'cb-button';

  const separator =
    variant !== 'none' ||
    disabled ||
    appearance === 'outlined' ||
    appearance === 'link'
      ? '--'
      : '';
  const variantName = variant !== 'none' && !disabled ? variant : '';
  const outlineSeparator =
    variant !== 'none' &&
    (appearance == 'outlined' || appearance === 'link') &&
    !disabled
      ? '-'
      : '';
  const outlineName =
    appearance === 'outlined' || appearance === 'link' ? 'outlined' : '';
  const disabledSeparator =
    (appearance == 'outlined' || appearance === 'link') && disabled ? '-' : '';
  const disabledName = disabled ? `disabled` : '';

  const calculatedClass = `${baseClass}${separator}${variantName}${outlineSeparator}${outlineName}${disabledSeparator}${disabledName}`;

  // The link class always have to be applied after the outlined class.
  const linkClass = appearance === 'link' ? ` cb-button--outlined-link` : '';

  return [baseClass, calculatedClass, linkClass].join(' ');
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  ref?: RefAttributes<HTMLButtonElement>['ref'];
  appearance?: Appearance;
  disabled?: boolean;
  variant?: VariantExtended;
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  ref,
  appearance = 'regular',
  variant = 'none',
  disabled = false,
  ...props
}) => {
  return (
    <button
      value={'34'}
      {...props}
      aria-disabled={disabled}
      className={[
        generateClassName({ disabled, variant, appearance }),
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
