import type { Meta, StoryObj } from '@storybook/react';

import { StarIcon } from '@src/icons/icons';
import { StoryContainer } from '@src/stories/components/StoryContainer';
import { StoryToolsContainer } from '@src/stories/components/StoryToolsContainer';
import { useState } from 'react';
import { AppearanceList } from '../../models/button/Button.model';
import { SizesList, VariantList } from '../../models/global/Global.model';
import { Button } from './Button';

const Checkbox = ({
  text,
  checked,
  onChange,
  id,
}: {
  text: string; // Text label for the checkbox
  checked: boolean; // Current checked state
  onChange: (checked: boolean) => void; // Handler for the change event
  id: string;
}) => {
  const [isChecked, setIsChecked] = useState(checked); // Local state for checked state[
  const handleChange = () => {
    onChange(!isChecked); // Call the handler with the new checked state
    setIsChecked(!isChecked);
    // Call the handler with the new checked state
  };
  return (
    <div>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label> {/* Display the text */}
    </div>
  );
};

const CheckboxList = ({
  setToggleTopIcon,
  setToggleRightIcon,
  setToggleBottomIcon,
  setToggleLeftIcon,
}: {
  setToggleTopIcon: (e: boolean) => void;
  setToggleRightIcon: (e: boolean) => void;
  setToggleBottomIcon: (e: boolean) => void;
  setToggleLeftIcon: (e: boolean) => void;
}) => {
  return (
    <>
      <Checkbox
        text='top icon'
        checked={false}
        onChange={(e) => {
          setToggleTopIcon(e);
        }}
        id='topicon'
      />
      <Checkbox
        text='right icon'
        checked={false}
        onChange={(e) => {
          setToggleRightIcon(e);
        }}
        id='rightIcon'
      />
      <Checkbox
        text='bottom icon'
        checked={false}
        onChange={(e) => {
          setToggleBottomIcon(e);
        }}
        id='bottomicon'
      />
      <Checkbox
        text='left icon'
        checked={false}
        onChange={(e) => {
          setToggleLeftIcon(e);
        }}
        id='lefticon'
      />
    </>
  );
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
      options: Object.values(VariantList),
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
    },
    size: {
      control: 'select',
      options: Object.values(SizesList),
    },
    id: { control: 'text' },
  },
  args: {
    id: 'cb-button-1',
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const [toggleTopIcon, setToggleTopIcon] = useState(false);
      const [toggleRightIcon, setToggleRightIcon] = useState(false);
      const [toggleBottomIcon, setToggleBottomIcon] = useState(false);
      const [toggleLeftIcon, setToggleLeftIcon] = useState(false);

      const originalArgs = context.args;

      // Prepare the args to pass to the Story, merging original args
      // with the conditionally added icons based on state
      const storyArgs = {
        ...originalArgs,
        iconBottom: toggleBottomIcon ? <StarIcon /> : undefined,
        iconTop: toggleTopIcon ? <StarIcon /> : undefined,
        iconLeft: toggleLeftIcon ? <StarIcon /> : undefined,
        iconRight: toggleRightIcon ? <StarIcon /> : undefined,
      };
      return (
        <StoryContainer>
          <StoryToolsContainer>
            <CheckboxList
              setToggleTopIcon={setToggleTopIcon}
              setToggleRightIcon={setToggleRightIcon}
              setToggleBottomIcon={setToggleBottomIcon}
              setToggleLeftIcon={setToggleLeftIcon}
            />
          </StoryToolsContainer>
          <Story args={storyArgs} />
          <Story />
        </StoryContainer>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonExample: Story = {
  args: {
    id: 'cb-button-1',
    children: 'My button',
    disabled: false,
    appearance: AppearanceList.regular,
    type: 'button',
    variant: VariantList.default,
    size: SizesList.medium,
  },
};
