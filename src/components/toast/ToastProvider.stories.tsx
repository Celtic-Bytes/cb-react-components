import { Button } from '@src/components/button/Button';
import { StoryContainer } from '@src/stories/components/StoryContainer';
import { StoryThemeToggle } from '@src/stories/components/StoryThemeToggle';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useContext } from 'react';
import { ToastContext } from './ToastContext';
import { ToastProvider } from './ToastProvider';

const meta: Meta<typeof ToastProvider> = {
  title: 'components/Toast/ToastProvider',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `ToastProvider provides toast context and renders toasts. Use the button below to add a toast and toggle theme to see it in light/dark mode.`,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToastProvider>;

const Demo = () => {
  const { addToast } = useContext(ToastContext);
  const [position, setPosition] = React.useState('top-end');
  const positions = [
    'top-start',
    'top-center',
    'top-end',
    'middle-start',
    'middle-center',
    'middle-end',
    'bottom-start',
    'bottom-center',
    'bottom-end',
  ];
  return (
    <StoryContainer>
      <StoryThemeToggle />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <label htmlFor='toast-position'>Toast Position:</label>
        <select
          id='toast-position'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          {positions.map((pos) => (
            <option
              key={pos}
              value={pos}
            >
              {pos}
            </option>
          ))}
        </select>
        <Button
          variant='primary'
          onClick={() =>
            addToast({
              message: `Hello from Toast! (${position})`,
              title: 'Toast Title',
              variant: 'success',
              showIcon: true,
              showProgressBar: true,
              duration: 3000,
              position:
                position as import('@src/models/global/global.model').Position,
            })
          }
        >
          Show Toast
        </Button>
      </div>
      <div style={{ marginTop: 24 }}>
        <p>
          Select a position and click the button to show a toast. Use the theme
          toggle to switch modes.
        </p>
      </div>
    </StoryContainer>
  );
};

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  ),
};
