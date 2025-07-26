import {
  BackgroundVariantList,
  VariantList,
} from '@src/models/global/global.model';
import { ToastItemProps } from '@src/models/toast/toast.model';
import { getVariantIcon } from '@src/utils/icon-utils';
import { FC, useEffect, useId, useRef, useState } from 'react';

const baseClassName = 'cb-toast-item';

/**
 * To pass the message use the 'children' prop.
 */

/**
 * To pass the message use the 'children' prop or use composition.
 */
export const ToastItem: FC<ToastItemProps> = ({
  backgroundVariant = BackgroundVariantList.solid,
  children,
  duration = 3000,
  icon,
  id,
  onClose,
  persistant,
  showIcon = true,
  showProgressBar,
  size,
  title,
  variant = VariantList.default,
  ...props
}) => {
  const generatedId = useRef(`cb-toast-item-${useId()}`);

  // progress bar
  const [remainingTime, setRemainingTime] = useState(duration);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const variantIcon = getVariantIcon(variant);

  useEffect(() => {
    if (persistant || !showProgressBar) return;
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
  }, [persistant, showProgressBar, duration, remainingTime]);

  return (
    <div
      {...props}
      id={id ?? generatedId.current}
      className={baseClassName}
    >
      <div className='cb-toast-item__main'>
        {showIcon && (
          <div className={'cb-toast-item__icon'}>{icon || variantIcon}</div>
        )}
        <div className='cb-toast-item__content-area'>
          {' '}
          {/* Optional wrapper for title/content */}
          {title && <div className={'cb-toast-item__title'}>{title}</div>}
          <div className={'cb-toast-item__content'}>{children}</div>
        </div>
        {/* Render close button if persistent or if onClose provided */}
        {(persistant || onClose) && (
          <button
            onClick={() => {}}
            className={'cb-toast-item__action'} // Use a button for accessibility
            aria-label='Close toast'
          >
            &times; {/* Standard close icon */}
          </button>
        )}
      </div>

      {/* Render progress bar only if enabled and not persistent */}
      {!persistant && showProgressBar && duration > 0 && (
        <div className={''}>
          <progress
            value={remainingTime}
            max={duration}
          />
        </div>
      )}
    </div>
  );
};
