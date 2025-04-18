export const ProgressTypesList = {
  default: 'default',
  timer: 'timer',
} as const;

export type ProgessListType = {
  [K in keyof typeof ProgressTypesList]: string;
};

export type ProgressType =
  (typeof ProgressTypesList)[keyof typeof ProgressTypesList];
