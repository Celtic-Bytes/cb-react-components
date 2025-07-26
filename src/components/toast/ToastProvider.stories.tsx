import { Button } from '@src/components/button/Button';
import { StoryContainer } from '@src/stories/components/StoryContainer';
import { StoryThemeToggle } from '@src/stories/components/StoryThemeToggle';
import type { Meta, StoryObj } from '@storybook/react';
import { useContext } from 'react';
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
  return (
    <StoryContainer>
      <StoryThemeToggle />
      <Button
        variant='primary'
        onClick={() =>
          addToast({
            message: 'Hello from Toast!',
            title: 'Toast Title',
            variant: 'success',
            showIcon: true,
            showProgressBar: true,
            duration: 3000,
          })
        }
      >
        Show Toast
      </Button>
      <div style={{ marginTop: 24 }}>
        <p>
          Click the button to show a toast. Use the theme toggle to switch
          modes.
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
