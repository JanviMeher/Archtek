# Archtek Design Studio

Warm, modern architecture and interior design portfolio website for [Archtek Design Studio](https://www.archtekds.com) — built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with design tokens in `app/globals.css`
- **Fonts:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body) via `next/font/google`
- **Deployment:** Vercel-ready

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx          # Root layout, fonts, Header/Footer
  page.tsx            # Home
  globals.css         # Design tokens + Tailwind
  projects/
    page.tsx          # Projects index with filters
    [slug]/page.tsx   # Case study template
  services/page.tsx
  about/page.tsx
  contact/page.tsx
components/
  layout/             # Header, Footer
  ui/                 # Button, FormField, FilterChips, MetadataRow
  contact/            # InquiryForm, CareersAccordion
  ...                 # ProjectCard, ServiceCard, CTABand, FadeIn, etc.
data/
  projects.ts         # Typed project data (CMS-ready)
  team.ts
  services.ts
  site.ts             # Global config, nav, contact info
lib/
  metadata.ts         # SEO / Open Graph helpers
  utils.ts
design-tokens.md      # Design system handoff
content-matrix.md     # Content status tracker
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured projects, philosophy, services, process, stats, CTA |
| `/projects` | Filterable project grid |
| `/projects/[slug]` | Case study — 3 full featured + 4 supporting projects |
| `/services` | Architecture, interiors, 3D viz, process, clients |
| `/about` | Origin story, partners, team |
| `/contact` | Inquiry form, careers, office info, map, WhatsApp |

## Data layer

Project content lives in `data/projects.ts` as typed objects. To migrate to a CMS (Sanity, Contentful):

1. Mirror the `Project` interface as your schema
2. Replace static imports with fetch calls in page components
3. Keep `generateStaticParams` for SSG or switch to ISR

## Environment

No environment variables required for the MVP. For production forms, add:

```env
# Example for future form integration
RESEND_API_KEY=
CONTACT_FORM_TO=info@archtekds.com
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo in [Vercel](https://vercel.com)
3. Deploy — no extra configuration needed

## Documentation

- [design-tokens.md](./design-tokens.md) — Colors, typography, spacing, components
- [content-matrix.md](./content-matrix.md) — Copy and asset status per page

## License

Private — © Archtek Design Studio
