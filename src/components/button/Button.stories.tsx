import type { Meta, StoryObj } from '@storybook/react';

import { HTMLAttributes, SVGProps, useState } from 'react';
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

const toolsStyle: HTMLAttributes<HTMLDivElement>['style'] = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '0.7rem',
};

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  </svg>
);

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
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <label htmlFor={id}>{text}</label> {/* Display the text */}
    </div>
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
        <ThemeProvider themes={[darkDefaultTheme, lightDefaultTheme]}>
          <div style={containerStyle}>
            <div style={toolsStyle}>
              <Checkbox
                text="top icon"
                checked={false}
                onChange={(e) => {
                  setToggleTopIcon(e);
                }}
                id="topicon"
              />
              <Checkbox
                text="right icon"
                checked={false}
                onChange={(e) => {
                  setToggleRightIcon(e);
                }}
                id="rightIcon"
              />
              <Checkbox
                text="bottom icon"
                checked={false}
                onChange={(e) => {
                  setToggleBottomIcon(e);
                }}
                id="bottomicon"
              />
              <Checkbox
                text="left icon"
                checked={false}
                onChange={(e) => {
                  setToggleLeftIcon(e);
                }}
                id="lefticon"
              />
              <ThemeToggleButton />
            </div>
            <div style={{ marginTop: '20px' }}>
              <Story args={storyArgs} />
              <div style={{ width: '5px', height: '5px' }}></div>
              <Story />
            </div>
          </div>
        </ThemeProvider>
      );
    },
  ],
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
