import type { Meta, StoryObj } from '@storybook/react';

import { HTMLAttributes } from 'react';
import { darkDefaultTheme } from '../../Themes/Dark';
import { lightDefaultTheme } from '../../Themes/Light';
import { Button } from '../button/Button';
import { ThemeProvider } from './ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'components/ThemeProvider',
  tags: ['autodocs'],
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
  },
};

const containerStyle: HTMLAttributes<HTMLDivElement>['style'] = {
  minWidth: '600px',
  minHeight: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const DarkTheme: Story = {
  args: {
    themes: [darkDefaultTheme],
    children: (
      <div style={containerStyle}>
        {' '}
        <Button>Dark Theme Button</Button>
      </div>
    ),
  },
};

export const LightTheme: Story = {
  args: {
    themes: [lightDefaultTheme],
    children: (
      <div style={containerStyle}>
        {' '}
        <Button>Light Theme Button</Button>
      </div>
    ),
  },
};
