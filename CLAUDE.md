# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

There are no tests in this project.

## Environment Variables

A `.env` file is required. The contact form API route (`app/api/contact/route.js`) needs:

```
EMAIL_ADDRESS=   # Gmail address to send/receive contact form emails
GMAIL_PASSKEY=   # Gmail app password (not account password)
```

## Key libraries

| Library | Purpose |
|---|---|
| `framer-motion` | Scroll-reveal animations (`FadeIn` helper), project filter `AnimatePresence` |
| `react-fast-marquee` | Dual-direction skills marquee (two rows, opposite directions) |
| `lottie-react` | Loaded dynamically (SSR disabled) via `animation-lottie.jsx` |
| `react-toastify` | Contact form toast notifications |

## Architecture

Single-page Next.js 15 (App Router) portfolio. All sections render on the root `/` route as stacked components in `app/page.js`.

**Data layer** — all portfolio content lives as plain JS exports in `utils/data/`:
- `personal-data.js` — name, bio, links, contact info
- `projects-data.js` — project list with tools, repo URLs, demo URLs
- `skills.js` — skills array (drives the marquee display)
- `experience.js`, `educations.js`, `contactsData.js`

To update portfolio content, only these data files need to change — no component edits required.

**Animation pattern** — `app/components/helper/fade-in.jsx` is a `"use client"` wrapper around `framer-motion`'s `whileInView`. Import it in any server component to add scroll-reveal without converting the whole component to a client component. The hero section uses plain CSS animations (`hero-text-enter` / `hero-image-enter` in globals.scss) because it's above the fold and avoids hydration flashes.

**Projects filter** — `project-filter.jsx` is the only client component in the projects subtree. It receives `projectsData` as a serialisable prop from the server component `projects/index.jsx` and uses `AnimatePresence` + `layoutId` for animated category filtering.

**Path alias** — `@/` maps to the project root (via `jsconfig.json`), so `@/utils/data/personal-data` resolves from anywhere.

**Styling** — Tailwind CSS for all layout/utility styles. Two SCSS files in `app/css/` handle card glow effects and global resets. The primary brand colors used throughout are `#16f2b3` (teal/green accent) and `#10172d` (dark background).

**Lottie animations** — `app/components/helper/animation-lottie.jsx` wraps `lottie-react` with `dynamic()` (SSR disabled) to avoid hydration errors. Animation JSON files are stored in `app/assets/lottie/`.

**Contact form flow** — `ContactForm` (client component) POSTs to `/api/contact`, which uses Nodemailer with Gmail SMTP to send the message to `EMAIL_ADDRESS`.

**Image hosting** — Remote images are served from Cloudinary (`res.cloudinary.com`) and dev.to CDN; both are allowlisted in `next.config.js`.
