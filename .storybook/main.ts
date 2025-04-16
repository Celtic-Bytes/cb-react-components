import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  /* https://storybook.js.org/docs/configure/integration/images-and-assets?ref=hackernoon.com#serving-static-files-via-storybook-configuration */
  staticDirs: ['../public'],
  // TODO: Modify the icon to something mine
  managerHead: (head) =>
    `${head}
      <link rel="shortcut icon" href="../public/favicon.png" type="image/ico">`,
};
export default config;
