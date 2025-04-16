export const VariantList = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
} as const;

export type VariantListType = {
  [K in keyof typeof VariantList]: string;
};

/**
 *  'none' is added to have an option to reset when user want to remove the variant.
 */
export const VariantsListExtended = {
  ...VariantList,
  none: 'none',
} as const;

export type Variant = (typeof VariantList)[keyof typeof VariantList];
export type ExtendedVariant =
  (typeof VariantsListExtended)[keyof typeof VariantsListExtended];
