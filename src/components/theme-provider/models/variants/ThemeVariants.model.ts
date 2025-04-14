export const Variant = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
} as const;

export type VariantType = {
  [K in keyof typeof Variant]: string;
};

/**
 *  'none' is added to have an option to reset when user want to remove the variant.
 */
export const ExtendedVariants = {
  ...Variant,
  none: 'none',
} as const;

export type VariantTypeList = (typeof Variant)[keyof typeof Variant];
export type ExtendedVariantTypeList =
  (typeof ExtendedVariants)[keyof typeof ExtendedVariants];
