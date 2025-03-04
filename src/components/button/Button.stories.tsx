import type { Meta, StoryObj } from '@storybook/react';

import { HTMLAttributes } from 'react';
import { ThemeProvider } from '../theme-provider/ThemeProvider';
import { darkDefaultTheme } from '../theme-provider/Themes/Dark';
import { lightDefaultTheme } from '../theme-provider/Themes/Light';
import { Button } from './Button';
import { Variant } from './Button.model';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: Object.values(Variant),
    }
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const containerStyle: HTMLAttributes<HTMLDivElement>['style'] = {
  minWidth: '600px',
  minHeight: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Darkbutton: Story = {
  args: {
    children: 'My button',
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[darkDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
export const Lightbutton: Story = {
  args: {
    children: 'My button',
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[lightDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const darkButtonDangerOutlined: Story = {
  args: {
    children: 'My button',
    variant: Variant.Danger,
    outlined: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[darkDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const darkDisabledButton: Story = {
  args: {
    children: 'My button',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[darkDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
export const lightDisabledButton: Story = {
  args: {
    children: 'My button',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[lightDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const darkDisabledButtonOutlined: Story = {
  args: {
    children: 'My button',
    disabled: true,
    outlined: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[darkDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
export const lightDisabledButtonOutlined: Story = {
  args: {
    children: 'My button',
    disabled: true,
    outlined: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[lightDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const darkbuttonDangerDisabled: Story = {
  args: {
    children: 'My button',
    variant: Variant.Danger,
    disabled: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[darkDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const lightbuttonDangerDisabled: Story = {
  args: {
    children: 'My button',
    variant: Variant.Danger,
    disabled: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[lightDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const darkButtonDangerDisabledOutlined: Story = {
  args: {
    children: 'My button',
    variant: Variant.Danger,
    disabled: true,
    outlined: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[darkDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
export const lightButtonDangerDisabledOutlined: Story = {
  args: {
    children: 'My button',
    variant: Variant.Danger,
    disabled: true,
    outlined: true,
  },
  decorators: [
    (Story) => (
      <ThemeProvider themes={[lightDefaultTheme]}>
        <div style={containerStyle}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
