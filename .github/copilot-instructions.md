# CB React Components - AI Coding Instructions

## Overview

This is a custom React 19 or higher component library built without Tailwind, using TypeScript, Vite, and Storybook. The project emphasizes simplicity, customization, and a cohesive theming system.

## Architecture & Key Patterns

### Dynamic CSS-in-JS Theming System

- **Core concept**: CSS is generated dynamically from theme objects and injected into `<head>`
- **Theme structure**: Located in `src/Themes/` with dark/light variants containing `config.global`, `config.variants`, and component-specific configs
- **CSS generation**: Each component has a `*-css.ts` file (e.g., `button-css.ts`) that exports a function accepting a `Theme` and returning CSS strings
- **Integration**: `ThemeCssGenerator.ts` combines all component CSS and injects via `<style>` elements
- **Color mixing**: Uses CSS `color-mix()` for hover states and variant adjustments based on theme type

### Component Structure Pattern

Every component follows this structure:

```
component-name/
├── ComponentName.tsx          # Main component
├── ComponentName.stories.tsx  # Storybook stories
├── component-name-css.ts      # CSS generation function
└── ComponentName.css          # Optional static styles
```

### Model-Driven Design

- **Global models**: `src/models/global/Global.model.ts` defines shared types (`Variant`, `Sizes`, `Position`)
- **Component models**: Each component has its own model file defining interfaces and enums
- **Theme models**: `ThemeProviders.model.ts` defines the complete theme structure
- **Consistent variants**: All components use the same variant system: `default`, `primary`, `secondary`, `success`, `danger`, `warning`, `info`

## Development Workflow

### Essential Commands

- `npm run storybook` - Start development server (port 6006)
- `npm run build` - Build library for distribution
- `npm run lint` - Run ESLint
- Debug: Use VS Code's "Storybook" launch configuration (F5) which auto-starts Storybook

### Component Development Process

1. Create component models in `src/models/[component]/`
2. Implement CSS generation function using theme system
3. Build main component with proper TypeScript interfaces
4. Create comprehensive Storybook stories with controls
5. Use `StoryContainer` and `StoryToolsContainer` for consistent story layouts

### Theme System Usage

- Wrap components in `<ThemeProvider>` for theming
- Use `useTheme()` hook to access current theme and switching functions
- Generate CSS with `getComponentCss(theme)` pattern
- Apply theme-aware styling using CSS custom properties and color mixing

## Key Conventions

### CSS Class Naming

- Base class: `cb-[component]` (e.g., `cb-button`)
- Variants: `cb-[component]--[variant]` (e.g., `cb-button--primary`)
- Appearances: `cb-[component]--[appearance]` (e.g., `cb-button--outlined`)
- Sizes: `cb-[component]--size-[size]` (e.g., `cb-button--size-large`)
- Element parts: `cb-[component]__[part]` (e.g., `cb-button__content`)

### TypeScript Patterns

- Use `FC<PropsInterface>` for functional components
- Extend `HTMLAttributes<HTMLElement>` for native HTML prop support
- Generate unique IDs with `useId()` and `useRef()` for SSR safety
- Destructure props with defaults in function signatures

### Import Alias

- Use `@src/` alias for all internal imports (configured in `tsconfig.json` and `vite.config.ts`)

### Icon System

- SVG icons defined in `src/icons/icons.tsx` with consistent props and accessibility attributes
- Variant-based icon mapping in `src/utils/icon-utils.tsx`
- Icons support `SVGProps<SVGSVGElement>` with `currentColor` fill

## Build & Distribution

- Vite library mode builds both ESM and UMD formats
- TypeScript declarations generated via `vite-plugin-dts`
- React and React-DOM are peer dependencies
- Published as `@celticbytes/cb-react-components`
