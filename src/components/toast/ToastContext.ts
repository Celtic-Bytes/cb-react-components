import type { ToastContextValue } from '@src/models/toast/toast.model';
import { createContext } from 'react';

export const ToastContext = createContext<ToastContextValue>({
  toasts: [],
  addToast: () => {
    throw new Error('addToast must be used within a ToastProvider');
  },
  removeToast: () => {
    throw new Error('removeToast must be used within a ToastProvider');
  },
  clearToasts: () => {
    throw new Error('clearToasts must be used within a ToastProvider');
  },
});
