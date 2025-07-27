import { Button } from '@src/components/button/Button';
import { InfoIcon } from '@src/icons/icons';
import { StoryContainer } from '@src/stories/components/StoryContainer';
import { StoryThemeToggle } from '@src/stories/components/StoryThemeToggle';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToastProvider } from './ToastProvider';
import { useToast } from './useToast';

const meta: Meta<typeof ToastProvider> = {
  title: 'components/Toast/ToastProvider',
  tags: ['autodocs'],
  component: ToastProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### ToastProvider Usage

Wrap your app or component tree with the ToastProvider provider to enable toast notifications. Use the bButton below to trigger a toast and toggle theme to see it in light/dark mode.

**Configuration:**
- Most toast configuration options (appearance, variant, size, autoClose, etc.) are set via the ToastItem props. To customize toasts, see the [ToastItem Storybook](./ToastItem.stories.tsx) for all available options and controls.

**Example:**

\`\`\`tsx
import { ToastProvider, useToast } from '@src/components/toast';

function App() {
  const { addToast } = useToast();
  return (
    <ToastProvider>
      <button onClick={() => addToast({ children: 'Hello!', title: 'Toast' })}>
        Show Toast
      </button>
    </ToastProvider>
  );
}
\`\`\`
`,
      },
      autodocs: true,
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Optional ID for the ToastProvider component.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
export default meta;


type Story = StoryObj<typeof ToastProvider>;

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

const AutoCloseDemo = () => {
  const { addToast } = useToast();
  const [position, setPosition] = React.useState('top-end');
  return (
    <StoryContainer>
      <StoryThemeToggle />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <label htmlFor='toast-position-auto'>Toast Position:</label>
        <select
          id='toast-position-auto'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          {positions.map((pos) => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
        <Button
          variant='primary'
          onClick={() =>
            addToast({
              children: `AutoClose Toast! (${position})`,
              title: 'AutoClose',
              duration: 3000,
              autoClose: true,
              position: position as import('@src/models/global/global.model').Position,
            })
          }
        >
          Show AutoClose Toast
        </Button>
      </div>
    </StoryContainer>
  );
};

export const AutoClose: Story = {
  render: () => (
    <ToastProvider>
      <AutoCloseDemo />
    </ToastProvider>
  ),
  name: 'AutoClose Toast',
  parameters: {
    docs: {
      description: {
        story: 'Shows a toast that closes automatically after a set duration.'
      }
    }
  }
};

const ManualCloseDemo = () => {
  const { addToast } = useToast();
  const [position, setPosition] = React.useState('top-end');
  return (
    <StoryContainer>
      <StoryThemeToggle />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <label htmlFor='toast-position-manual'>Toast Position:</label>
        <select
          id='toast-position-manual'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          {positions.map((pos) => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
        <Button
          variant='secondary'
          onClick={() =>
            addToast({
              children: `Manual Close Toast! (${position})`,
              title: 'Manual Close',
              autoClose: false,
              duration: 3000,
              position: position as import('@src/models/global/global.model').Position,
            })
          }
        >
          Show Manual Close Toast
        </Button>
      </div>
    </StoryContainer>
  );
};

export const ManualClose: Story = {
  render: () => (
    <ToastProvider>
      <ManualCloseDemo />
    </ToastProvider>
  ),
  name: 'Manual Close Toast',
  parameters: {
    docs: {
      description: {
        story: 'Shows a toast that must be closed manually by the user.'
      }
    }
  }
};

const IconDemo = () => {
  const { addToast } = useToast();
  const [position, setPosition] = React.useState('top-end');
  return (
    <StoryContainer>
      <StoryThemeToggle />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <label htmlFor='toast-position-icon'>Toast Position:</label>
        <select
          id='toast-position-icon'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          {positions.map((pos) => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
        <Button
          variant='info'
          onClick={() =>
            addToast({
              children: `Toast with Icon! (${position})`,
              title: 'Icon Toast',
              icon: <InfoIcon style={{ marginRight: 8 }} />,
              duration: 3000,
              position: position as import('@src/models/global/global.model').Position,
            })
          }
        >
          Show Toast With Icon
        </Button>
      </div>
    </StoryContainer>
  );
};

export const WithIcon: Story = {
  render: () => (
    <ToastProvider>
      <IconDemo />
    </ToastProvider>
  ),
  name: 'Toast With Icon',
  parameters: {
    docs: {
      description: {
        story: 'Shows a toast with an icon.'
      }
    }
  }
};

// General demo (all-in-one)
const Demo = () => {
  const { addToast } = useToast();
  const [position, setPosition] = React.useState('top-start');
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
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
        <Button
          variant='primary'
          onClick={() =>
            addToast({
              children: `Hello from Toast! (${position})`,
              title: 'Toast Title',
              duration: 3000,
              position: position as import('@src/models/global/global.model').Position,
            })
          }
        >
          Show Toast
        </Button>
        <Button
          variant='secondary'
          onClick={() =>
            addToast({
              children: `Manual close toast! (${position})`,
              title: 'Manual Toast',
              autoClose: false,
              duration: 3000,
              position: position as import('@src/models/global/global.model').Position,
            })
          }
        >
          Show Toast (Manual Close)
        </Button>
        <Button
          variant='info'
          onClick={() =>
            addToast({
              children: `Toast with icon! (${position})`,
              title: 'Icon Toast',
              icon: <InfoIcon style={{ marginRight: 8 }} />,
              duration: 3000,
              position: position as import('@src/models/global/global.model').Position,
            })
          }
        >
          Show Toast (With Icon)
        </Button>
      </div>
      <div style={{ marginTop: 24 }}>
        <p>
          Select a position and click the button to show a toast. Use the theme toggle to switch modes.
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
  name: 'All Features Demo',
  parameters: {
    docs: {
      description: {
        story: 'General demo showing all toast features together.'
      }
    }
  }
};
