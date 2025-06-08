# Tend Habit tracker Website

This project is a Next.js application that combines Builder.io for page structure and components with Directus CMS for content management. It implements a hybrid approach where page layouts and components are managed through Builder.io, while the actual content data is fetched from Directus CMS based on the current locale and route.

## Technologies Used

- [Next.js](https://nextjs.org) v15.3.2 - React framework for production
- [Builder.io](https://www.builder.io) - Visual development platform for page structure and components
- [Directus CMS](https://directus.io) - Headless CMS for content management
- TypeScript v5 - For type-safe development
- Tailwind CSS v3.4.4 - For styling of the UI elements that are not managed by Builder.io (a subject to change)

## Development Tools

### Package Manager and Runtime

- [Bun](https://bun.sh) v1.0.0+ - Fast JavaScript runtime and package manager
  - We use Bun primarily as a fast package manager that maintains npm compatibility
  - Bun's package management is significantly faster than npm while keeping the same node_modules structure
  - All npm scripts and commands work the same way with Bun
- Node.js v22+ - JavaScript runtime environment

### Code Quality

- [Biome](https://biomejs.dev) v1.9.4+ - All-in-one linter and formatter
  - Biome provides fast, reliable linting and formatting in a single tool
  - Zero configuration required
  - Significantly faster than ESLint + Prettier combination
  - IDE Extensions:
    - [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
    - [JetBrains Plugin](https://plugins.jetbrains.com/plugin/22761-biome)

## Architecture

The application follows a hybrid architecture:

1. Page structure and component layouts are managed through Builder.io
2. Content data is fetched from Directus CMS based on:
   - Current locale
   - Current route
3. The BuilderComponent receives both the structure from Builder.io and the content from Directus CMS to render the complete page

## Development

### Prerequisites

- Node.js 22+ installed
- Access to Builder.io dashboard
- Access to Directus CMS dashboard
- Bun 1.0.0+ installed

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Builder.io
NEXT_PUBLIC_BUILDER_API_KEY=your_builder_api_key
```

### Running Development Build

```bash
# Install dependencies
bun install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Branching and Deployment

### Branch Naming Convention

- Feature branches should follow the pattern: `feature/description-of-feature`

### Deployment

- `main` branch deploys to production
- Feature branches deploy to preview environments on Netlify using their Next.js adapter (based on OpenNext)
- You can find the preview URL for your feature branch in:
  - GitHub's commit checks section
  - GitHub's Deployments section

## Useful Links

- [Builder.io Dashboard](https://builder.io/content)
- [Directus CMS Dashboard](https://directus.tend-app.ru/admin)

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Builder.io Documentation](https://www.builder.io/c/docs/developers)
- [Directus Documentation](https://docs.directus.io)
- [Biome Documentation](https://biomejs.dev/docs)
- [Bun Documentation](https://bun.sh/docs)
