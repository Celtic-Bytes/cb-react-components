export interface ThemeGlobalConfig {
  /** General background color for items like buttons, chips, etc*/
  accentColor: string;
  /** Background color for the body of youre app */
  backgroundColor: string;
  borderRadius: string;
  color: string;
  /** Color used in disabled items or other properties */
  gray: string;
}

// ---------- SIZES----------------------

export const SizesList = {
  extrasmall: 'extrasmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  extralarge: 'extralarge',
} as const;

export type SizesListType = {
  [K in keyof typeof SizesList]: string;
};

export type Sizes = (typeof SizesList)[keyof typeof SizesList];

// ---------- VARIANTS----------------------

export const VariantList = {
  danger: 'danger',
  info: 'info',
  primary: 'primary',
  /** In some cases, used as a reset option */
  default: 'default',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
} as const;

export type VariantListType = {
  [K in keyof typeof VariantList]: string;
};

export type Variant = (typeof VariantList)[keyof typeof VariantList];
