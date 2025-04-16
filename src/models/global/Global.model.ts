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
