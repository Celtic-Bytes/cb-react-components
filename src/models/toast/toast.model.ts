// -------------- TOAST ITEM----------------------------
import {
  BackgroundVariant,
  Position,
  Sizes,
  Variant,
} from '@src/models/global/global.model';
import { HTMLAttributes, ReactNode } from 'react';

export interface Toast {
  backgroundVariant?: BackgroundVariant;
  duration?: number;
  icon?: React.ReactNode;
  id: string;
  message: string;
  onClose?: (id: string) => void;
  persistant?: boolean;
  position?: Position;
  showIcon?: boolean;
  showProgressBar?: boolean;
  size?: Sizes;
  title?: string;
  variant?: Variant;
}

export interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

export interface ToastItemProps extends HTMLAttributes<HTMLDivElement> {
  backgroundVariant?: BackgroundVariant;
  /** Duration in milliseconds */
  duration?: number;
  icon?: ReactNode;
  id?: string;
  onClose?: (id: string) => void;
  persistant?: boolean;
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
