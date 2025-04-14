import { ThemeButtonConfig } from './button/ThemeButton.model';
import { ThemeCoreConfig } from './core/ThemeCore.model';
import { VariantType } from './variants/ThemeVariants.model';

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
  core: ThemeCoreConfig;
  variants: VariantType;
}

export interface ThemeGeneratedCss {
  containerClassname: string;
  css: string;
}
