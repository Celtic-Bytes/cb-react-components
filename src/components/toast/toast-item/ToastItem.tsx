import { Progress } from '@src/components/progress/Progress';
// ...existing code...
import { ToastItemProps } from '@src/models/toast/toast.model';
// ...existing code...
import { FC, useEffect, useId, useRef, useState } from 'react';
import './ToastItem.css';

const baseClassName = 'cb-toast-item';

export const ToastItem: FC<ToastItemProps> = ({
  /** To pass the message use the 'children' prop or use composition. */
  children,
  duration = 4000,
  icon,
  id,
  onClose,
  /** autoClose: If true, toast will close automatically after duration. If false, stays until manually closed. */
  autoClose = true,
  title,
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
    if (autoClose && duration > 0) {
      const timeout = setTimeout(() => {
        setVisible(false);
        // Wait for animation before calling onClose
        setTimeout(() => {
          onClose?.(id ?? generatedId.current);
        }, 300); // match CSS duration
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [autoClose, duration, onClose, id]);

  // progress bar
  const [remainingTime, setRemainingTime] = useState(duration);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoClose) return;
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
  }, [autoClose, duration, remainingTime]);

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
        {icon && <div className={'cb-toast-item__icon'}>{icon}</div>}
        <div className='cb-toast-item__content-area'>
          {title && <div className={'cb-toast-item__title'}>{title}</div>}
          <div className={'cb-toast-item__content'}>{children}</div>
        </div>

        {!autoClose && (
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

      {autoClose && duration > 0 && (
        <Progress
          duration={duration}
          type='timer'
        />
      )}
    </div>
  );
};
