export interface Theme {
  /**
   * Unique key used by React in iterable lists.
   */
  key: string;
  name: string;
  prefix?: string;
  type: 'dark' | 'light';
  config: ThemeConfig;
}

export interface ThemeConfig {
  accentColor: string;
  backgroundColor: string;
  button: ThemeButtonConfig;
  gray: string;
  borderRadius: string;
  textColor: string;
  variantDanger: string;
  variantDefault: string;
  variantPrimary: string;
  variantSecondary: string;
  variantSuccess: string;
  variantWarning: string;
}

export interface ThemeButtonConfig {
  cursor: string;
  borderRadius: string;
}

export interface ThemeGeneratedCss {
  prefix: string;
  themeClassName: string;
  css: string;
}
