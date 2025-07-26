import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Sizes, Variant } from '../global/global.model';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  appearance?: Appearance;
  disabled?: boolean;
  iconBottom?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconTop?: ReactNode;
  id?: string;
  size?: Sizes;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: Variant;
}
export interface ThemeButtonConfig {
  borderWidth: string;
  borderRadius: string;
}

export const AppearanceList = {
  regular: 'regular',
  outlined: 'outlined',
  /** text appearance is just the outlined style without borders */
  text: 'text',
} as const;

export type AppearanceListType = {
  [K in keyof typeof AppearanceList]: string;
};

export type Appearance = (typeof AppearanceList)[keyof typeof AppearanceList];
