import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ProgressTypesList } from '@src/models/progress/Progress.model';
import { StoryContainer } from '@src/stories/components/StoryContainer';
import { StoryToolsContainer } from '@src/stories/components/StoryToolsContainer';
import { Progress, ProgressTimerProps } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'components/Progress',
  tags: ['autodocs'],
  component: Progress,
  argTypes: {},
  args: {},
  parameters: {
    layout: 'centered',
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
          <button onClick={() => setStart(true)}>Start Timer</button>
        </div>
      );
    }
    return <TimerManualStartComponent {...(args as ProgressTimerProps)} />;
  },
};
