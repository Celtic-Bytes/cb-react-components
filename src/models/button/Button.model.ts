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
