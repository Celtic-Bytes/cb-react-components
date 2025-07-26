import { HTMLAttributes } from 'react';

export const ProgressTypesList = {
  default: 'default',
  timer: 'timer',
} as const;

export type ProgessListType = {
  [K in keyof typeof ProgressTypesList]: string;
};

export type ProgressType =
  (typeof ProgressTypesList)[keyof typeof ProgressTypesList];

export interface ProgressBaseProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  onComplete?: () => void;
}

export interface ProgressTimerProps extends ProgressBaseProps {
  duration: number;
  type: typeof ProgressTypesList.timer;
  /** Define if the timers starts immediately */
  autoStart: boolean;
  /** when autostart === false , start===true will start the timer*/
  start: boolean;
}

export interface ProgressDefaultProps extends ProgressBaseProps {
  value?: number;
  max?: number;
  type: typeof ProgressTypesList.default;
}

export type ProgressProps = ProgressTimerProps | ProgressDefaultProps;
