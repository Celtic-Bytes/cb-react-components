import {
  BackgroundVariantList,
  SizesList,
  VariantList,
} from '@src/models/global/Global.model';
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
    persistant: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
    showProgressBar: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: Object.values(SizesList),
    },
    title: { control: 'text' },
    variant: {
      control: 'select',
      options: Object.values(VariantList),
    },
  },
  parameters: {
    layout: 'centered',
  },
  args: {
    backgroundVariant: BackgroundVariantList.solid,
    children: 'Hello world',
    persistant: false,
    showIcon: true,
    showProgressBar: true,
    size: SizesList.medium,
    title: 'Title',
    variant: VariantList.default,
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
