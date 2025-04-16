import type { Meta, StoryObj } from '@storybook/react';

import { HTMLAttributes } from 'react';
import { AppearanceList } from '../../models/button/Button.model';
import { SizesList } from '../../models/global/Global.model';
import { VariantsListExtended } from '../../models/variants/Variants.model';
import { darkDefaultTheme } from '../../Themes/Dark';
import { lightDefaultTheme } from '../../Themes/Light';
import { ThemeProvider } from '../theme-provider/ThemeProvider';
import { useTheme } from '../theme-provider/useTheme';
import { Button } from './Button';

const containerStyle: HTMLAttributes<HTMLDivElement>['style'] = {
  minWidth: '600px',
  minHeight: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '5px',
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
    appearance: {
      control: 'select',
      options: Object.values(AppearanceList),
    },
    variant: {
      control: 'select',
      options: Object.values(VariantsListExtended),
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
    },
    size: {
      control: 'select',
      options: Object.values(SizesList),
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
    appearance: AppearanceList.regular,
    type: 'button',
    variant: VariantsListExtended.none,
    size: SizesList.medium,
  },
};
