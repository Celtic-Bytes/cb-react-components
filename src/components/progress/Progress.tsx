import { ProgressTypesList } from '@src/models/progress/Progress.model';
import { FC, HTMLAttributes, useEffect, useId, useRef, useState } from 'react';

interface ProgressBaseProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  onComplete?: () => void;
}

export interface ProgressTimerProps extends ProgressBaseProps {
  duration: number;
  type: typeof ProgressTypesList.timer;
  /** Define if the timers starts immediately */
  autoStart: boolean;
  /** when autostart === false , start===true will start the timer*/
  start: boolean;
}

export interface ProgressDefaultProps extends ProgressBaseProps {
  value?: number;
  max?: number;
  type: typeof ProgressTypesList.default;
}

export type ProgressProps = ProgressTimerProps | ProgressDefaultProps;

// Timer-specific  subcomponent
const TimerProgress: FC<ProgressTimerProps> = ({
  duration = 3000,
  onComplete,
  autoStart = true,
  start = false,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  const reset = (): void => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    const shouldStart = (autoStart || (!autoStart && start)) && duration > 0;

    if (shouldStart) {
      setIsRunning(true);
      timerRef.current = window.setTimeout(() => {
        onComplete?.();
        reset();
      }, duration);
      return () => {
        reset();
      };
    }
  }, [autoStart, start, duration, onComplete]);

  return (
    <div
      className='cb-progress-bar cb-timer'
      style={{
        animation: isRunning ? `progress ${duration}ms linear` : 'none',
      }}
    />
  );
};

// Default progress subcomponent
const DefaultProgress: FC<ProgressDefaultProps> = ({
  value = 0,
  max = 1,
  onComplete,
}) => {
  useEffect(() => {
    const progressIsFull = (value / max) * 100 === 100;
    if (progressIsFull && onComplete) {
      onComplete();
    }
  }, [onComplete, max, value]);

  return (
    <div
      className='cb-progress-bar'
      style={{ width: `${(value / max) * 100}%` }}
    />
  );
};

// Utility function to filter props
const filterHtmlProps = (
  props: ProgressProps
): HTMLAttributes<HTMLDivElement> => {
  if (props.type === ProgressTypesList.timer) {
    // Narrowed to ProgressTimerProps
    const { duration, autoStart, start, onComplete, ...htmlProps } = props;
    return htmlProps;
  } else {
    // Narrowed to ProgressDefaultProps
    const { value, max, onComplete, ...htmlProps } = props;
    return htmlProps;
  }
};

// Main wrapper component
export const Progress: FC<ProgressProps> = (props) => {
  const generatedId = useRef(`cb-progress-bar-${useId()}`);
  const htmlProps = filterHtmlProps(props);

  return (
    <div
      {...htmlProps}
      id={props.id ?? generatedId.current}
      className={['cb-progress-container', props.className]
        .filter(Boolean)
        .join(' ')}
    >
      {props.type === ProgressTypesList.timer ? (
        <TimerProgress
          autoStart={props.autoStart}
          start={props.start}
          duration={props.duration}
          onComplete={props.onComplete}
          type={ProgressTypesList.timer}
        />
      ) : (
        <DefaultProgress
          max={props.max}
          value={props.value}
          onComplete={props.onComplete}
          type={ProgressTypesList.default}
        />
      )}
    </div>
  );
};
