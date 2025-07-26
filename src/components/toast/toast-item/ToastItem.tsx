import {
  BackgroundVariant,
  BackgroundVariantList,
  Sizes,
  Variant,
  VariantList,
} from '@src/models/global/global.model';
import { getVariantIcon } from '@src/utils/icon-utils';
import {
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

const baseClassName = 'cb-toast-item';

/**
 * To pass the message use the 'children' prop.
 */
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
  const [countdownStarted, setCountdownStarted] = useState(false);

  const variantIcon = getVariantIcon(variant);

  useEffect(() => {
    if (persistant || !showProgressBar) return;

    let timer: NodeJS.Timeout | null = null;
    const updateRangeInMilliseconds = 1;

    if (remainingTime > 0 && !countdownStarted) {
      timer = setInterval(() => {
        setRemainingTime(remainingTime - updateRangeInMilliseconds);
        setCountdownStarted(true);
      }, updateRangeInMilliseconds);
    }

    if (remainingTime <= 0 && countdownStarted) {
      clearInterval(timer ?? undefined);
      setCountdownStarted(false);
    }

    return () => {
      clearInterval(timer ?? undefined);
      setCountdownStarted(false);
    };
  }, [remainingTime, countdownStarted, persistant, showProgressBar]);

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
