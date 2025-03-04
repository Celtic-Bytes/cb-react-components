import type { Meta, StoryObj } from '@storybook/react';

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

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const SimpleThemeProvider: Story = {
  args: {
    children: <Button>My button</Button>,
  },
};
