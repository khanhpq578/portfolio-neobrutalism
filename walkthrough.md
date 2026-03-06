# Refactoring Walkthrough

Successfully split the massive 1900-line [page.tsx](file:///Users/lisod/projects/libs/portfolio/app/page.tsx) into an organized Next.js App Router structure according to its internal guide!

## What was Changed

- **Constants**: Extracted hardcoded data and colors.
  - [NEW] [constants/theme.ts](file:///Users/lisod/projects/libs/portfolio/constants/theme.ts)
  - [NEW] [constants/data.ts](file:///Users/lisod/projects/libs/portfolio/constants/data.ts)
- **Hooks**: Isolated custom React hooks.
  - [NEW] [hooks/useCountUp.ts](file:///Users/lisod/projects/libs/portfolio/hooks/useCountUp.ts)
  - [NEW] [hooks/useReveal.ts](file:///Users/lisod/projects/libs/portfolio/hooks/useReveal.ts)
- **Global Styles**: Moved inline global style overrides.
  - [MODIFY] [app/globals.css](file:///Users/lisod/projects/libs/portfolio/app/globals.css)
- **UI Primitives**: Extracted small, reusable UI components.
  - [NEW] [components/ui/Button.tsx](file:///Users/lisod/projects/libs/portfolio/components/ui/Button.tsx)
  - [NEW] [components/ui/Badge.tsx](file:///Users/lisod/projects/libs/portfolio/components/ui/Badge.tsx)
  - [NEW] [components/ui/SectionHeader.tsx](file:///Users/lisod/projects/libs/portfolio/components/ui/SectionHeader.tsx)
  - [NEW] [components/ui/SkillCard.tsx](file:///Users/lisod/projects/libs/portfolio/components/ui/SkillCard.tsx)
  - [NEW] ... and more.
- **Sections**: Extracted large modular page sections.
  - [NEW] [components/sections/Hero.tsx](file:///Users/lisod/projects/libs/portfolio/components/sections/Hero.tsx)
  - [NEW] [components/sections/About.tsx](file:///Users/lisod/projects/libs/portfolio/components/sections/About.tsx)
  - [NEW] [components/sections/Journey.tsx](file:///Users/lisod/projects/libs/portfolio/components/sections/Journey.tsx)
  - [NEW] [components/sections/Skills.tsx](file:///Users/lisod/projects/libs/portfolio/components/sections/Skills.tsx)
  - [NEW] [components/sections/Projects.tsx](file:///Users/lisod/projects/libs/portfolio/components/sections/Projects.tsx)
  - [NEW] [components/sections/Contact.tsx](file:///Users/lisod/projects/libs/portfolio/components/sections/Contact.tsx)
- **App Layout**: Modularized the root components.
  - [NEW] [components/Nav.tsx](file:///Users/lisod/projects/libs/portfolio/components/Nav.tsx)
  - [NEW] [components/Footer.tsx](file:///Users/lisod/projects/libs/portfolio/components/Footer.tsx)
- **Page Assembly**: Cleaned up the main entry.
  - [MODIFY] [app/page.tsx](file:///Users/lisod/projects/libs/portfolio/app/page.tsx)

## Validation

- **ESLint Fixes**: Resolved standard Next.js IDE warnings during the split, including:
  - Escaping single quotes (`'` -> `&apos;`) in [Hero.tsx](file:///Users/lisod/projects/libs/portfolio/components/sections/Hero.tsx) and [Contact.tsx](file:///Users/lisod/projects/libs/portfolio/components/sections/Contact.tsx).
  - Extracting the static `NAV_ITEMS` array outside of the [Nav](file:///Users/lisod/projects/libs/portfolio/components/Nav.tsx#19-170) component to resolve a `react-hooks/exhaustive-deps` warning.
- **Component Integrity**: Verified all components use `"use client"` where necessary (e.g., hooks, navigation, layout). All explicit variables passed via props are appropriately typed for TypeScript inference.
