import { Variant } from '../button/Button.model';

export interface Theme {
  key: string;
  type: 'dark' | 'light';
  config: ThemeConfig;
}

export interface ThemeConfig {
  accentColor: string;
  backgroundColor: string;
  button: ThemeButtonConfig;
  gray: string;
  radius: string;
  textColor: string;
}

export interface ThemeButtonConfig {
  [Variant.Danger]: string;
  [Variant.Default]: string;
  [Variant.Primary]: string;
  [Variant.Secondary]: string;
  [Variant.Success]: string;
  [Variant.Warning]: string;
  cursor: string;
  radius: string;
}
