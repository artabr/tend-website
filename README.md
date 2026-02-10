# Tend Habit tracker Website

This project is a Next.js application that uses Contentlayer for content management and FlyonUI for UI components. Content is managed in Markdown files and rendered using modern React components with Tailwind CSS styling.

## Technologies Used

- [Next.js](https://nextjs.org) v15.5.9 - React framework for production
- [Contentlayer](https://contentlayer.dev) - Content SDK for managing Markdown content
- [FlyonUI](https://flyonui.com) - Modern UI component library built on Tailwind CSS
- TypeScript v5 - For type-safe development
- Tailwind CSS v3.4.4 - For styling

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

The application follows a modern, file-based content architecture:

1. Content is managed in Markdown files in the `content/` directory
2. Contentlayer processes Markdown files and generates TypeScript types
3. Content is fetched directly in React Server Components based on locale
4. UI is built with FlyonUI components styled with Tailwind CSS

## Development

### Prerequisites

- Node.js 22+ installed
- Bun 1.0.0+ installed

### Environment Setup

No environment variables are required for local development. Content is managed directly in Markdown files.

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

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Contentlayer Documentation](https://contentlayer.dev/docs)
- [FlyonUI Documentation](https://flyonui.com/docs)
- [Biome Documentation](https://biomejs.dev/docs)
- [Bun Documentation](https://bun.sh/docs)
