// -------------- TOAST ITEM----------------------------
import {
  BackgroundVariant,
  Sizes,
  Variant,
} from '@src/models/global/global.model';

export interface Toast {
  id: string;
  message: string;
  title?: string;
  variant?: Variant;
  backgroundVariant?: BackgroundVariant;
  icon?: React.ReactNode;
  duration?: number;
  persistant?: boolean;
  showIcon?: boolean;
  showProgressBar?: boolean;
  size?: Sizes;
  onClose?: (id: string) => void;
}

export interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}
