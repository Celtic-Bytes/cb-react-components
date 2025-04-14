import type { Meta, StoryObj } from '@storybook/react';

import { HTMLAttributes } from 'react';
import { Variant } from '../../shared/shared.model';
import { ThemeProvider } from '../theme-provider/ThemeProvider';
import { darkDefaultTheme } from '../theme-provider/Themes/Dark';
import { lightDefaultTheme } from '../theme-provider/Themes/Light';
import { useTheme } from '../theme-provider/useTheme';
import { Button } from './Button';

const containerStyle: HTMLAttributes<HTMLDivElement>['style'] = {
  minWidth: '600px',
  minHeight: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['none', ...Object.values(Variant)],
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider themes={[darkDefaultTheme, lightDefaultTheme]}>
          <div style={containerStyle}>
            {/* Move toggle button INSIDE provider's children */}
            <ThemeToggleButton />
            <div style={{ marginTop: '20px' }}>
              <Story />
              <div style={{ width: '5px', height: '5px' }}></div>
              <Story />
            </div>
          </div>
        </ThemeProvider>
      );
    },
  ],
};

const ThemeToggleButton = () => {
  const { switchThemeByIndex, currentThemeIndex } = useTheme();

  const toggleTheme = () => {
    const newIndex = currentThemeIndex === 0 ? 1 : 0;
    switchThemeByIndex(newIndex);
  };

  return (
    <button onClick={toggleTheme}>
      {currentThemeIndex === 0 ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonExample: Story = {
  args: {
    children: 'My button',
    disabled: false,
    appearance: 'regular',
    type: 'button',
    variant: 'none',
  },
};
