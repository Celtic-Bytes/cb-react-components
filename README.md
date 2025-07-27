## Information

Libraries to check how they work:
Material UI:

- https://mui.com/material-ui/all-components/
- https://github.com/mui/material-ui/tree/master/packages/mui-material/src

Chakra UI:

- https://v2.chakra-ui.com/docs/components
- https://github.com/chakra-ui/chakra-ui

Ant Design:

- https://ant.design/components/overview
- https://github.com/ant-design/ant-design

React Bootstrap:

- https://react-bootstrap.netlify.app/docs/components/accordion
- https://github.com/react-bootstrap/react-bootstrap/tree/master/src

Prime React:

- https://primereact.org/
- https://github.com/primefaces/primereact/tree/master/components/lib

ShadCN :

- https://ui.shadcn.com/docs/components/accordion
- https://github.com/radix-ui/primitives/blob/main/packages/react/
- https://github.com/shadcn-ui/ui/tree/main/apps/www/registry/default/ui

React-toastify:

- https://github.com/fkhadra/react-toastify

## Storybook Usage & Documentation Warning

This project uses [Storybook](https://storybook.js.org/) for component development and documentation.

### How to Launch Storybook

- Run `npm install` to install dependencies.
- Start Storybook with:

```sh
npm run storybook
```

Storybook will launch at [http://localhost:6006](http://localhost:6006).

### Debugging

- Use the included VS Code launch configuration (`.vscode/launch.json`) to debug with Chrome.
- Set breakpoints in your components and start the "Storybook" debug configuration.

### Important: Documentation Description Issue

When writing documentation for your components in Storybook (especially in the `description.component` field), **do not use angle brackets (`< >`) or backticks (`` ` ``) around component names**. Storybook and React may try to interpret these as real HTML/JSX elements, which can cause rendering errors or warnings in the browser console.

#### What NOT to do (will cause errors)

```js
description: {
  component: `Wrap your app with <ToastProvider> to enable toasts.`;
}
```

or

```js
description: {
  component: `Wrap your app with ` < ToastProvider > ` to enable toasts.`;
}
```

#### What is OK (safe)

```js
description: {
  component: `Wrap your app with the ToastProvider provider to enable toasts.`;
}
```

**Tip:** Use plain text for component names in documentation. Avoid any non-letter symbols around them to prevent Storybook/React from misinterpreting them.

If you need to show code, use a code block for full examples, but keep inline references to component names as plain text.

---

## Getting Started & Debugging

To work in this project:

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start Storybook for development:**
   ```sh
   npm run storybook
   ```
   - Opens Storybook at [http://localhost:6006](http://localhost:6006).
3. **Build the library:**
   ```sh
   npm run build
   ```
4. **Lint the code:**
   ```sh
   npm run lint
   ```
5. **Debugging:**
   - Use the VS Code launch configuration named "Storybook" (see `.vscode/launch.json`).
   - Set breakpoints in your components and start the debugger.

**Note:** This project is experimental and not recommended for production use.

This project is a free component library for React. I didn't like the current libraries on the market. I wanted something simple, customizable, and without Tailwind. So I decided to create my own component library. This library is experimental and shouldn't be used for production.

## Debug

To debug your components just add a breakpoint in your component and run the pre-configured `launch.json` setting. Or add the following configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Storybook",
      "url": "http://localhost:6006",
      "webRoot": "${workspaceFolder}",
      "preLaunchTask": "start-storybook"
    }
  ]
}
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
