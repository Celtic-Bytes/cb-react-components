import { ThemeButtonConfig } from './button/Button.model';
import { ThemeGlobalConfig, VariantListType } from './global/Global.model';

export interface Theme {
  /**
   * Unique key used by React in iterable lists.
   */
  key: string;
  name: string;
  type: ThemeType;
  config: ThemeConfig;
}

export type ThemeType = 'dark' | 'light';

export interface ThemeConfig {
  button: ThemeButtonConfig;
  global: ThemeGlobalConfig;
  variants: VariantListType;
}

export interface ThemeGeneratedCss {
  containerClassname: string;
  css: string;
}
