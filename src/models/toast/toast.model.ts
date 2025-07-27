// -------------- TOAST ITEM----------------------------
import {
  BackgroundVariant,
  Position,
  Sizes,
  Variant,
} from '@src/models/global/global.model';
import { HTMLAttributes, ReactNode } from 'react';

export interface ToastContextValue {
  addToast: (toast: Omit<ToastItemProps, 'id'>) => string;
  clearToasts: () => void;
  removeToast: (id: string) => void;
  toasts: ToastItemProps[];
}

export interface ToastProviderProps {
  autoClose?: boolean;
  children: ReactNode;
  duration?: number;
  id?: string;
}

export interface ToastPositionMapValue {
  alignItems: 'flex-start' | 'center' | 'flex-end';
  bottom?: number | string;
  flexDirection: 'column' | 'column-reverse';
  left?: number | string;
  right?: number | string;
  top?: number | string;
  transform?: string;
}

export interface ToastItemProps extends HTMLAttributes<HTMLDivElement> {
  backgroundVariant?: BackgroundVariant;
  duration?: number;
  icon?: ReactNode;
  id?: string;
  message?: string;
  onClose?: (id: string) => void;
  /**
   * If true, toast will close automatically after duration. If false, stays until manually closed.
   */
  autoClose?: boolean;
  position?: Position;
  showIcon?: boolean;
  showProgressBar?: boolean;
  size?: Sizes;
  title?: string;
  variant?: Variant;
}
