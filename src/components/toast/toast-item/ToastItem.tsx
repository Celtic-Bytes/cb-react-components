import { Progress } from '@src/components/progress/Progress';
import { VariantList } from '@src/models/global/global.model';
import { ToastItemProps } from '@src/models/toast/toast.model';
import { getVariantIcon } from '@src/utils/icon-utils';
import { FC, useEffect, useId, useRef, useState } from 'react';
import './ToastItem.css';

const baseClassName = 'cb-toast-item';

/**
 * To pass the message use the 'children' prop or use composition.
 */
/**
 * To pass the message use the 'children' prop or use composition.
 *
 * autoClose: If true, toast will close automatically after duration. If false, stays until manually closed.
 */
export const ToastItem: FC<ToastItemProps> = ({
  children,
  duration = 3000,
  icon,
  id,
  onClose,
  autoClose = true,
  showIcon = true,
  showProgressBar,
  title,
  variant = VariantList.default,
  ...props
}) => {
  const generatedId = useRef(`cb-toast-item-${useId()}`);

  // Animation state
  const [visible, setVisible] = useState(false);

  // Appear animation on mount
  useEffect(() => {
    setVisible(true);
    return () => {};
  }, []);

  // Disappear animation before unmount (auto-close)
  useEffect(() => {
    if (autoClose && duration > 0 && !showProgressBar) {
      const timeout = setTimeout(() => {
        setVisible(false);
        // Wait for animation before calling onClose
        setTimeout(() => {
          onClose?.(id ?? generatedId.current);
        }, 300); // match CSS duration
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [autoClose, duration, showProgressBar, onClose, id]);

  // progress bar
  const [remainingTime, setRemainingTime] = useState(duration);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const variantIcon = getVariantIcon(variant);

  useEffect(() => {
    if (!autoClose || !showProgressBar) return;
    const updateRangeInMilliseconds = 10;

    if (remainingTime > 0 && !timerRef.current) {
      timerRef.current = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= updateRangeInMilliseconds) {
            clearInterval(timerRef.current!);
            timerRef.current = null;
            return 0;
          }
          return prev - updateRangeInMilliseconds;
        });
      }, updateRangeInMilliseconds);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoClose, showProgressBar, duration, remainingTime]);

  return (
    <div
      {...props}
      id={id ?? generatedId.current}
      className={[
        baseClassName,
        `${visible ? 'cb-toast-item--visible' : 'cb-toast-item--hidden'}`,
        props.className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden={!visible}
    >
      <div className='cb-toast-item__main'>
        {showIcon && (
          <div className={'cb-toast-item__icon'}>{icon || variantIcon}</div>
        )}
        <div className='cb-toast-item__content-area'>
          {/* Optional wrapper for title/content */}
          {title && <div className={'cb-toast-item__title'}>{title}</div>}
          <div className={'cb-toast-item__content'}>{children}</div>
        </div>
        {/* Render close button if not autoClose or if onClose provided */}
        {(!autoClose || onClose) && (
          <button
            onClick={() => {
              setVisible(false);
              setTimeout(() => {
                onClose?.(id ?? generatedId.current);
              }, 300);
            }}
            className={'cb-toast-item__action'}
            aria-label='Close toast'
          >
            &times;
          </button>
        )}
      </div>

      {/* Render progress bar only if enabled and autoClose */}
      {autoClose && showProgressBar && duration > 0 && (
        <Progress
          duration={3000}
          type='timer'
          autoStart={false}
        />
      )}
    </div>
  );
};
