import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button/Button';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'components/Stack',
  tags: ['autodocs'],
  component: Stack,
  parameters: {
    layout: 'centered',
    alignContent: { default: 'unset' },
    alignItems: { default: 'unset' },
    flexDirection: { default: 'row' },
  },
  argTypes: {
    children: {
      description:
        'List of DOM elements that have to be rendered inside the container',
    },
    style: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const SimpleRowStack: Story = {
  args: {
    children: (
      <>
        <Button style={{ backgroundColor: '#ffbebe' }}>Button 1</Button>
        <Button style={{ backgroundColor: '#b0b4ff' }}>Button 2</Button>
        <Button style={{ backgroundColor: '#a1ffb2' }}>Button 3</Button>
      </>
    ),
  },
};
export const SimpleColumnStack: Story = {
  args: {
    style: { flexDirection: 'column' },
    children: (
      <>
        <Button style={{ backgroundColor: '#ffbebe' }}>Button 1</Button>
        <Button style={{ backgroundColor: '#b0b4ff' }}>Button 2</Button>
        <Button style={{ backgroundColor: '#a1ffb2' }}>Button 3</Button>
      </>
    ),
  },
};
