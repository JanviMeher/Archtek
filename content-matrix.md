# Content Matrix

Page/section copy and asset status for Archtek Design Studio website MVP.

**Legend:** ✅ Ready · 🟡 Placeholder · 🔴 Needs client input

## Global

| Section | Copy | Image | Status |
|---------|------|-------|--------|
| Site metadata | SEO titles/descriptions | OG image (Unsplash) | 🟡 |
| Navigation | 5 links + CTA | Logo wordmark text only | 🟡 Logo asset needed |
| Footer | Address, phone, email, hours | — | ✅ |
| WhatsApp link | +91 9545488585 | — | ✅ |

## Home (`/`)

| Section | Copy | Image | Status |
|---------|------|-------|--------|
| Hero | Tagline + intro | Unsplash residential | 🟡 Replace with studio/project hero |
| Featured projects | 3 cards | Unsplash per project | 🟡 Client photography |
| Philosophy strip | Context / Function / Craft | — | ✅ |
| Services preview | 3 service cards | Unsplash | 🟡 |
| Process teaser | Discover → Deliver | — | ✅ |
| Social proof | Stats + quote | — | 🟡 Verify project count; real client quote |
| Studio glimpse | Team/studio CTA | Unsplash office | 🔴 Studio photo |
| Contact CTA band | Standard CTA | — | ✅ |

## Projects (`/projects`)

| Section | Copy | Image | Status |
|---------|------|-------|--------|
| Page header | Portfolio intro | — | ✅ |
| Filter bar | Residential / Commercial / Interiors / All | — | ✅ |
| Project grid | 7 projects | Unsplash placeholders | 🟡 Full project inventory from client |
| Empty state | Filter no-match message | — | ✅ |

## Project case study (`/projects/[slug]`)

| Project | Overview copy | Gallery | Specs | Status |
|---------|---------------|---------|-------|--------|
| Lonavala Residence | Written (300 words) | 4 Unsplash | Table | 🟡 Photos + verified specs |
| Pokharna Residence | Written | 4 Unsplash | Table | 🟡 Photos + verified specs |
| Infinity Square | Written | 4 Unsplash | Table | 🟡 Photos + verified specs |
| Baner Penthouse | Short | Unsplash | Table | 🟡 Expand or remove |
| Aundh Retail | Short | Unsplash | Table | 🟡 Expand or remove |
| Koregaon Park Clinic | Short | Unsplash | Table | 🟡 Expand or remove |
| Hinjewadi Mixed-use | Short | Unsplash | Table | 🟡 In-progress status |

## Services (`/services`)

| Section | Copy | Image | Status |
|---------|------|-------|--------|
| Hero | What we do | — | ✅ |
| Architecture block | Scope list | Unsplash | 🟡 |
| Interiors block | Scope list | Unsplash | 🟡 |
| 3D Visualization block | Scope list | Unsplash | 🟡 |
| Process timeline | 5 steps + deliverables | — | ✅ |
| Who we work with | 3 client types | — | ✅ |
| CTA | Book consultation | — | ✅ |

## About (`/about`)

| Section | Copy | Image | Status |
|---------|------|-------|--------|
| Origin story | 2015, Pune, partners | — | ✅ |
| Philosophy | 3 pillars | — | ✅ |
| Abhishek Badale | Bio + focus areas | Unsplash portrait | 🔴 Real photo + credentials |
| Anand Munot | Bio + focus areas | Unsplash portrait | 🔴 Real photo + credentials |
| Team grid (6) | Name, role, short bio | Unsplash portraits | 🔴 Real team photos |
| Careers CTA | Link to contact | — | ✅ |

## Contact (`/contact`)

| Section | Copy | Image | Status |
|---------|------|-------|--------|
| Inquiry form | All fields + validation UI | — | ✅ UI only; 🔴 backend integration |
| Office info | Crescent Park address | — | ✅ Canonical address confirmed |
| Map embed | Google Maps iframe | — | 🟡 Confirm exact pin |
| Careers accordion | Form + copy | — | ✅ UI only; 🔴 backend integration |
| WhatsApp / call | Links | — | ✅ |

## Items requiring client action

1. **Photography** — Replace all Unsplash placeholders with project and team photos
2. **Project inventory** — Confirm full portfolio list, specs, and case study copy
3. **Partner bios** — Credentials, education, professional memberships
4. **Stats** — Verify project count (currently 120+) and years in practice
5. **Logo** — Provide vector wordmark/mark for header and footer
6. **Map pin** — Confirm exact office location on Google Maps
7. **Form backend** — Connect inquiry and careers forms (Resend, Formspree, or server action)
8. **Social links** — Confirm Instagram/LinkedIn URLs
9. **Privacy policy** — Required before collecting form data in production
10. **Client testimonials** — Replace placeholder quotes with approved testimonials

## Plan todos addressed via implementation

| Plan todo | Addressed by |
|-----------|--------------|
| Moodboard | Warm modern direction implemented in design tokens |
| Content audit | This matrix + canonical Crescent Park address |
| Wireframes | All 6 MVP pages built responsive at 375/768/1280 |
| Design system | `globals.css` tokens + `design-tokens.md` |
| Hi-fi mockups | Full UI implementation serves as hi-fi |
| Prototype | Navigable site: Home → Project → Contact flow |
| Handoff | `design-tokens.md`, `content-matrix.md`, README |
