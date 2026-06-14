# Archtek Design Studio — Design Tokens

Handoff document for developers and designers. Maps 1:1 to CSS variables in `app/globals.css`.

## Color palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-background` | `#F7F5F2` | Page background — warm off-white |
| `--color-foreground` | `#2C2C2C` | Primary text — charcoal |
| `--color-accent` | `#C4A574` | CTAs, links, highlights — terracotta/ochre |
| `--color-accent-dark` | `#A8885A` | Hover states on accent |
| `--color-accent-light` | `#E8DCC8` | Subtle accent backgrounds |
| `--color-sage` | `#8A9186` | Labels, metadata, captions |
| `--color-sage-light` | `#B8BDB4` | Placeholder text, dividers |
| `--color-muted` | `#6B6B6B` | Body secondary text |
| `--color-border` | `#E5E0D8` | Borders, dividers |
| `--color-card` | `#FFFFFF` | Card surfaces |
| `--color-accent-band` | `#EBE4D8` | CTA bands, alternating sections |

## Typography

| Role | Font | CSS variable | Notes |
|------|------|--------------|-------|
| Display / headings | Fraunces | `--font-display` | Humanist serif — warmth and craft |
| Body / UI | DM Sans | `--font-body` | Clean sans — legibility |

### Scale (implemented in components)

| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 (hero) | 48–72px | 36–48px |
| H2 (section) | 36–48px | 28–36px |
| H3 (card) | 20–24px | 18–20px |
| Body | 16px | 16px |
| Label / caption | 12px uppercase, 0.12em tracking | Same |

Line height: 1.65 body, 1.15 headings.

## Spacing

Base unit: **8px**

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-section-y` | `clamp(3rem, 8vw, 7.5rem)` | Section vertical padding (48–120px) |
| `--spacing-section-x` | `clamp(1.25rem, 4vw, 2rem)` | Horizontal container padding |
| `--max-width-content` | `1280px` | 12-col grid max width |

## Layout

- **Grid:** 12-column mental model; implemented via CSS Grid (`grid-cols-2`, `grid-cols-3`, etc.)
- **Breakpoints:** 375px (mobile), 768px (`md`), 1280px (`lg`)
- **Container:** `.container-content` — centered, max 1280px

## Radius & shadows

| Token | Value |
|-------|-------|
| `--radius-sm` | 8px |
| `--radius-md` | 10px |
| `--radius-lg` | 12px |
| `--shadow-soft` | Subtle card shadow |
| `--shadow-card` | Default elevation |
| `--shadow-hover` | Hover state on cards |

## Components

| Component | File | Variants |
|-----------|------|----------|
| Button | `components/ui/Button.tsx` | primary, secondary, ghost · sm, md, lg |
| FormField | `components/ui/FormField.tsx` | text, email, tel, textarea, select, file |
| FilterChips | `components/ui/FilterChips.tsx` | active / inactive |
| MetadataRow | `components/ui/MetadataRow.tsx` | dot-separated items |
| ProjectCard | `components/ProjectCard.tsx` | hover scale + metadata reveal |
| ServiceCard | `components/ServiceCard.tsx` | image + link |
| CTABand | `components/CTABand.tsx` | reusable accent section |
| FadeIn | `components/FadeIn.tsx` | scroll reveal, respects reduced motion |

## Motion

- **Fade-up on scroll:** `.fade-up` + Intersection Observer (600ms ease)
- **Card hover:** `scale(1.02)` + shadow increase (300ms)
- **Hero load:** slow scale-in (20s, motion-safe only)
- **Reduced motion:** all animations disabled via `prefers-reduced-motion: reduce`

## Focus & accessibility

- Focus ring: 2px solid `--color-accent`, 3px offset
- Semantic HTML: `<main>`, `<nav>`, `<section>`, `<article>`, `<address>`
- Form labels linked via `htmlFor` / `id`
- Images require descriptive `alt` text
