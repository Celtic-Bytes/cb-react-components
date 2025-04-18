import { Variant } from '@src/models/global/Global.model';
import { FC, useEffect } from 'react';

export interface ToastProps {
  message: string;
  variant?: Variant;
  /** Duration in milliseconds */
  duration?: number;
  onClose?: () => void;
}

const baseClassName = 'cb-toast';

export const Toast: FC<ToastProps> = ({
  message,
  variant = 'info',
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`${baseClassName} ${baseClassName}--${variant}`}>
      <span>{message}</span>
      <button onClick={onClose} className={`${baseClassName}__close`}>
        &times;
      </button>
    </div>
  );
};
