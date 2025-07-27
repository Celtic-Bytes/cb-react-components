import {
  BackgroundVariantList,
  SizesList,
} from '@src/models/global/global.model';
import { StoryContainer } from '@src/stories/components/StoryContainer';
import { StoryToolsContainer } from '@src/stories/components/StoryToolsContainer';
import { Meta, StoryObj } from '@storybook/react';
import { ToastItem } from './ToastItem';

const meta: Meta<typeof ToastItem> = {
  title: 'components/Toast/ToastItem',
  tags: ['autodocs'],
  component: ToastItem,
  argTypes: {
    id: {
      control: 'text',
    },
    backgroundVariant: {
      control: 'select',
      options: Object.values(BackgroundVariantList),
    },
    autoClose: {
      control: 'boolean',
    },
    // ...existing code...
    // ...existing code...
    size: {
      control: 'select',
      options: Object.values(SizesList),
    },
    title: { control: 'text' },
    // ...existing code...
  },
  parameters: {
    layout: 'centered',
  },
  args: {
    backgroundVariant: BackgroundVariantList.solid,
    children: 'Hello world',
    autoClose: true,
    // ...existing code...
    size: SizesList.medium,
    title: 'Title',
  },
  decorators: [
    (Story, context) => {
      const originalArgs = context.args;

      const storyArgs = {
        ...originalArgs,
      };
      return (
        <StoryContainer>
          <StoryToolsContainer />
          <div style={{ marginTop: '20px' }}>
            <Story args={storyArgs} />
          </div>
        </StoryContainer>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ToastItem>;

export const Primary: Story = {
  args: {
    children: 'Hello world',
  },
};
