import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@src/main';
import { StoryContainer } from '@src/stories/components/StoryContainer';
import { StoryToolsContainer } from '@src/stories/components/StoryToolsContainer';
import { darkDefaultTheme } from '@src/Themes/Dark';
import { ThemeProvider } from './ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'components/ThemeProvider',
  tags: ['autodocs'],
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The \`ThemeProvider\` component is used to provide theming capabilities to your application. It allows you to define a set of themes and dynamically switch between them.

### Usage
1. Import the \`ThemeProvider\` component:
   \`\`\`tsx
   import { ThemeProvider } from './ThemeProvider';
   \`\`\`

2. Wrap your application or specific components with \`ThemeProvider\`:
   \`\`\`tsx
   <ThemeProvider themes={[darkDefaultTheme, lightDefaultTheme]}>
     <YourComponent />
   </ThemeProvider>
   \`\`\`

3. Use the \`useTheme\` hook to access the current theme and switch themes dynamically:
   \`\`\`tsx
   import { useTheme } from './useTheme';

   const { switchThemeByIndex, currentThemeIndex } = useTheme();

   const toggleTheme = () => {
     const newThemeIndex = currentThemeIndex === 0 ? 1 : 0;
     switchThemeByIndex(newThemeIndex);
   };
   \`\`\`

### Props
- \`themes\` (optional): An array of \`Theme\` objects. If not provided, default themes (\`darkDefaultTheme\` and \`lightDefaultTheme\`) will be used.
- \`children\`: The content to be wrapped by the \`ThemeProvider\`.

### Example
\`\`\`tsx
import { ThemeProvider, darkDefaultTheme, lightDefaultTheme } from './ThemeProvider';

<ThemeProvider themes={[darkDefaultTheme, lightDefaultTheme]}>
  <div>
    <p>This content is themed!</p>
  </div>
</ThemeProvider>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    themes: {
      control: 'object',
      description:
        'Array of Theme. If not provided, default themes will be used.',
      table: {
        type: { summary: 'Theme[]' },
      },
    },
  },
  args: {
    themes: [],
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
type Story = StoryObj<typeof ThemeProvider>;

export const Example: Story = {
  args: {
    themes: [darkDefaultTheme],
    children: <Button>Dark Theme Button</Button>,
  },
};
