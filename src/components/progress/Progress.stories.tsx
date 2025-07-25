import { ProgressTypesList } from '@src/models/progress/Progress.model';
import { StoryContainer } from '@src/stories/components/StoryContainer';
import { StoryToolsContainer } from '@src/stories/components/StoryToolsContainer';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useEffect, useState } from 'react';
import { Progress, ProgressTimerProps } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'components/Progress',
  tags: ['autodocs'],
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: Object.values(ProgressTypesList),
      description:
        'Determines the behavior of the progress component - either a standard progress bar or a timer',
      table: {
        category: 'Required',
        type: { summary: 'ProgressTypesList' },
      },
    },
    // Common props
    id: {
      control: 'text',
      description:
        'Unique identifier for the progress component. If not provided, a generated ID will be used',
      table: {
        category: 'Optional',
      },
    },
    onComplete: {
      description:
        'Callback function triggered when either the progress reaches 100% or the timer completes',
      action: 'completed',
      table: {
        category: 'Optional',
        type: { summary: '() => void' },
      },
    },
    // Timer-specific props
    duration: {
      control: { type: 'number' },
      description: 'Duration of the timer in milliseconds',
      if: { arg: 'type', eq: ProgressTypesList.timer },
      table: {
        category: 'Timer Props',
        type: { summary: 'number' },
        defaultValue: { summary: '3000' }, // Convert to string
      },
    },
    autoStart: {
      control: 'boolean',
      description:
        'When true, the timer starts automatically. When false, requires manual start',
      defaultValue: true,
      if: { arg: 'type', eq: ProgressTypesList.timer },
      table: {
        category: 'Timer Props',
        defaultValue: { summary: 'true' }, // Already a string
      },
    },
    start: {
      control: 'boolean',
      description: 'Used to manually trigger the timer when autoStart is false',
      if: { arg: 'type', eq: ProgressTypesList.timer },
      table: {
        category: 'Timer Props',
        defaultValue: { summary: 'false' }, // Already a string
      },
    },
    // Progress-specific props
    value: {
      control: { type: 'number' },
      description:
        'Current progress value. Used to calculate the percentage along with max',
      if: { arg: 'type', eq: ProgressTypesList.default },
      table: {
        category: 'Progress Bar Props',
        defaultValue: { summary: '0' }, // Convert to string
      },
    },
    max: {
      control: { type: 'number' },
      description:
        'Maximum value for progress calculation. Progress percentage is calculated as (value/max)*100',
      if: { arg: 'type', eq: ProgressTypesList.default },
      table: {
        category: 'Progress Bar Props',
        defaultValue: { summary: '1' }, // Convert to string
      },
    },
  },
  args: {
    id: 'cb-progess-id',
    onComplete: action('onComplete'),
    autoStart: true,
    start: false,
    duration: 3000,
  },
  decorators: [
    (Story, context) => {
      return (
        <StoryContainer>
          <StoryToolsContainer></StoryToolsContainer>
          <Story />
        </StoryContainer>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const ProgressBarExample: Story = {
  args: {
    type: ProgressTypesList.default,
    max: 30,
    value: 10,
    onComplete: () => {
      console.log('timer over');
    },
  },
};

export const TimerAutoStartCustomDurationExample: Story = {
  args: {
    duration: 10000,
    type: ProgressTypesList.timer,
    onComplete: () => {
      console.log('timer over');
    },
  },
};

// TODO: Fix this example in Storybook. When you click on the 'show code' button, the code example is unusable
export const TimerManualStartExample: Story = {
  args: {
    type: ProgressTypesList.timer,
    autoStart: false,
    start: false,
    duration: 5000,
    onComplete: () => {
      console.log('timer over');
    },
  },
  render: (args) => {
    function TimerManualStartComponent(props: Readonly<ProgressTimerProps>) {
      const [start, setStart] = useState(false);

      // Reset start state when component mounts
      useEffect(() => {
        setStart(false);
      }, []);

      const handleStart = useCallback(() => {
        setStart(true);
      }, []);

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
          }}
        >
          <Progress
            {...props}
            start={start}
          />
          <button onClick={handleStart}>Start Timer</button>
        </div>
      );
    }
    return <TimerManualStartComponent {...(args as ProgressTimerProps)} />;
  },
};
