export interface Theme {
  /**
   * Unique key used by React in iterable lists.
   */
  key: string;
  name: string;
  type: 'dark' | 'light';
  config: ThemeConfig;
}

export interface ThemeConfig {
  button: ThemeButtonConfig;
  theme: ThemeGlobalConfig;
}

export interface ThemeGlobalConfig {
  accentColor: string;
  backgroundColor: string;
  borderRadius?: string;
  gray: string;
  color: string;
  variantDanger: string;
  variantDefault: string;
  variantPrimary: string;
  variantSecondary: string;
  variantSuccess: string;
  variantWarning: string;
}

export interface ThemeButtonConfig {
  borderWidth: string;
  borderRadius: string;
}

export interface ThemeGeneratedCss {
  containerClassname: string;
  css: string;
}
