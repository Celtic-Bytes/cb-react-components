// -------------- TOAST ITEM----------------------------
import {
  BackgroundVariant,
  Position,
  Sizes,
  Variant,
} from '@src/models/global/global.model';
import { HTMLAttributes, ReactNode } from 'react';

// Unified ToastItemProps is now the main toast interface

export interface ToastContextValue {
  toasts: ToastItemProps[];
  addToast: (toast: Omit<ToastItemProps, 'id'>) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

export interface ToastItemProps extends HTMLAttributes<HTMLDivElement> {
  backgroundVariant?: BackgroundVariant;
  /** Duration in milliseconds */
  duration?: number;
  icon?: ReactNode;
  id?: string;
  message?: string; // Added from Toast
  position?: Position; // Added from Toast
  onClose?: (id: string) => void;
  persistent?: boolean;
  showIcon?: boolean;
  showProgressBar?: boolean;
  size?: Sizes;
  title?: string;
  variant?: Variant;
}

export interface ToastProviderProps {
  id?: string;
  children: ReactNode;
}

export interface ToastPositionMapValue {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  transform?: string;
  alignItems: 'flex-start' | 'center' | 'flex-end';
  flexDirection: 'column' | 'column-reverse';
}
