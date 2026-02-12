# AGENTS.md

Guidelines for AI agents working on the Tend website codebase.

## Component Structure

All landing page UI lives under `src/components/home/`. Each page section is a **directory** containing granular sub-components, each in its own file.

### Naming Convention

Components follow **MUI-style naming**:

- **PascalCase** names that clearly describe the component's role.
- Root elements carry a `className` in the format `ComponentName-root` (e.g. `className="FeatureBlock-root"`), giving every element a distinct, targetable CSS class.
- Compound names read as `Section` → `SectionPart` → `SectionPartSlot` (mirrors MUI patterns like `Card` → `CardHeader` → `CardContent`).

### Directory Layout

```
src/components/home/
├── HomePage.tsx              ← orchestrator, composes all sections
├── HeroSection/
│   ├── HeroSection.tsx       ← section wrapper
│   ├── HeroBrand.tsx         ← logo
│   ├── HeroHeadline.tsx      ← h1 headline
│   ├── HeroSubheadline.tsx   ← subtitle + link
│   ├── HeroCallToAction.tsx  ← CTA button
│   ├── HeroMedia.tsx         ← hero image
│   └── index.ts              ← barrel export
├── WaitlistSection/
│   ├── WaitlistSection.tsx
│   ├── WaitlistHeading.tsx
│   ├── WaitlistDescription.tsx
│   ├── WaitlistForm.tsx
│   ├── WaitlistDisclaimer.tsx
│   └── index.ts
├── FeaturesSection/
│   ├── FeaturesSection.tsx
│   ├── FeatureBlock.tsx          ← single feature row (media + content)
│   ├── FeatureBlockContent.tsx   ← text side container
│   ├── FeatureBlockHeading.tsx   ← feature title
│   ├── FeatureBlockDescription.tsx
│   ├── FeatureBlockMedia.tsx     ← feature image
│   └── index.ts
├── WhySection/
│   ├── WhySection.tsx
│   ├── WhySectionHeading.tsx
│   ├── WhyBlock.tsx
│   ├── WhyBlockHeading.tsx
│   ├── WhyBlockDescription.tsx
│   ├── WhySectionDisclaimer.tsx
│   └── index.ts
├── FollowUsSection/
│   ├── FollowUsSection.tsx
│   ├── FollowUsCard.tsx          ← dark card container
│   ├── FollowUsContent.tsx       ← text side
│   ├── FollowUsHeading.tsx
│   ├── FollowUsDescription.tsx
│   ├── FollowUsActions.tsx       ← button group
│   ├── FollowUsSocialLink.tsx    ← individual social button
│   ├── FollowUsMedia.tsx         ← decorative icon
│   └── index.ts
└── Footer/
    ├── Footer.tsx
    ├── FooterBrand.tsx
    ├── FooterNav.tsx
    └── index.ts
```

### Rules for Adding or Modifying Components

1. **One component per file.** Every visual element gets its own `.tsx` file.
2. **Barrel exports.** Each section directory has an `index.ts` that re-exports the top-level section component only.
3. **Section directories import internally.** Sub-components are imported by their parent within the same directory — never cross-referenced from other sections.
4. **`HomePage.tsx` imports from barrel exports.** It only sees section-level components (e.g. `import { HeroSection } from './HeroSection/index'`).
5. **className on root element.** Every component's outermost element must have `className="ComponentName-root"`.
6. **Descriptive names.** Each component name should clearly communicate what it renders — prefer `FeatureBlockHeading` over `Title`, `FollowUsSocialLink` over `LinkButton`.
7. **Props over context.** Data flows top-down via props. Content comes from `HomePage` → section → sub-component.
8. **Styling via MUI `sx` prop.** All styles use the MUI `sx` prop on MUI components (`Box`, `Typography`, `Stack`, etc.). No separate CSS files.

### Adding a New Section

1. Create a directory under `src/components/home/` named `NewSection/`.
2. Create the section wrapper `NewSection.tsx` and its sub-components.
3. Add `className="ComponentName-root"` to each component's root element.
4. Create `index.ts` exporting only the section wrapper.
5. Import and render in `HomePage.tsx`.
6. Add the section's content shape to the `HomePageProps` interface in `HomePage.tsx`.
7. Provide content in `content/home-en.md` (and `home-ru.md` for Russian).
