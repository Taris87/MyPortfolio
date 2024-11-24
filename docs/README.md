# Portfolio Website Documentation

## Overview
This documentation covers the implementation details and features of the portfolio website built with React, TypeScript, and Tailwind CSS.

## Key Components

### Services Component
The Services component showcases professional services with interactive card elements:

- **Card Design**:
  - Elegant gradient backgrounds with glass morphism effect
  - Smooth hover animations with animated borders
  - Interactive flip animation for detailed information
  - Responsive design with dark mode support

#### Implementation Details:
```tsx
// Card Background
backdrop-blur-md bg-gradient-to-br from-white/90 via-white/70 to-white/90
dark:from-gray-800/90 dark:via-gray-800/70 dark:to-gray-800/90

// Hover Effects
hover:shadow-xl hover:shadow-primary/5
group-hover:before:opacity-100
group-hover:before:animate-border
```

### Styling System
The project uses Tailwind CSS with custom configurations:

- **Custom Animations**:
  - Border animation for interactive elements
  - Smooth transitions for hover states
  - Card flip animations

- **Color Scheme**:
  - Primary color with light/dark variants
  - Gradient combinations for visual depth
  - Dark mode support throughout the application

### Internationalization
The website supports multiple languages:
- English (default)
- German

Translation keys are managed in `translations.ts` with type safety.

## Development Guidelines

### Adding New Features
1. Maintain consistent styling with existing components
2. Ensure dark mode compatibility
3. Add appropriate translations for all text content
4. Test responsiveness across different screen sizes

### Best Practices
- Use TypeScript for type safety
- Follow the established component structure
- Maintain accessibility standards
- Keep animations subtle and purposeful

## Technical Stack
- React 18+
- TypeScript
- Tailwind CSS
- Vite (Build Tool)
- i18next (Internationalization)

## Project Structure
```
src/
├── components/
│   ├── Services.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── translations/
│   └── translations.ts
├── styles/
│   └── index.css
└── App.tsx
```
