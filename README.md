# Hugo Ramírez — Portfolio

Personal portfolio for **Hugo Ramírez**, a bilingual (EN/Spanish) **Technical Support Specialist (L1/L2)** working with enterprise SaaS and CPQ platforms.

The site is written for recruiters and hiring managers in the US and EU: it leads with measurable support impact, documents real incident investigations (root-cause analysis) and keeps the software development background as supporting proof rather than the headline.

## Highlights

- **Dark-first, premium design** with a full light theme (no flash of the wrong theme on load).
- **Multi-page guided tour** — the story is split into focused pages, each with a progress bar (`Step 3/7`) and a clear "next step" panel, so a visitor always knows what to read next.
- **Impact metrics** animated on scroll (CSAT, SLA, cases/day, RCAs, accounts).
- **Selected incident cases** structured as problem → action → result → prevention.
- **Core competencies** grouped by support engineering, debugging/observability, cloud & systems, tools and development.
- Interactive project grid with filters, thumbnails and a downloadable résumé.
- **Per-page SEO** — every route ships its own `<title>`, description, canonical URL and 1200×630 social card, prerendered as static HTML for link unfurlers and crawlers.
- Accessible: keyboard focus styles, skip link, reduced-motion support, semantic landmarks.

## Tech stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v3](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [lucide-react](https://lucide.dev) + [react-icons](https://react-icons.github.io/react-icons/) for icons

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/ + per-route SEO files
npm run preview  # preview the production build
```

> `npm run build` runs `vite build` and then `scripts/generate-seo.mjs`, which
> writes one static HTML file per route (correct `<head>` without JavaScript)
> plus `sitemap.xml` and `robots.txt`. Use `npm run build:spa` to skip that step.

## Pages & the guided flow

Routes are defined in `src/App.jsx` (React Router). The guided order lives in
`src/data/journey.js`, which drives the progress bar, the "next step" panel and
the tour hub on the home page:

`/` → `/about` → `/skills` → `/experience` → `/case-studies` → `/projects` → `/education` → `/#contact`

Unknown URLs render a friendly 404 (`src/pages/NotFound.jsx`).

## Editing content

All content lives in **`src/data/portfolio.js`** — personal info, metrics, competencies, experience, incident cases, education and projects. Update that single file to keep the site in sync with the résumé.

To update the downloadable CV, replace **`public/resume.pdf`**.

## Contact form (Web3Forms)

The contact form delivers messages straight to the inbox via
[Web3Forms](https://web3forms.com) — no backend required.

1. Go to [web3forms.com](https://web3forms.com) and enter the destination address
   (`hugoo.ramirez493@gmail.com`). No account is needed.
2. Copy the access key they email you.
3. Paste it into **`VITE_WEB3FORMS_KEY`** in a `.env` file (copy `.env.example`)
   or into the `WEB3FORMS_ACCESS_KEY` constant in `src/components/Contact.jsx`.

The access key is public by design and safe to ship in client-side code. **While
it is empty, the form falls back to opening the visitor's mail client** so a
message is never lost. Submissions include the visitor's email as the reply-to
address, and a hidden honeypot field filters out naive bots.

## Responsive

Verified with automated layout measurements (headless Chromium) from **320px to
1536px** — including iPhone SE, iPhone 16 / 16 Pro / 16 Plus / 16 Pro Max,
Pixel 7 and iPad — with **zero horizontal overflow** at every width.

## Structure

```
src/
  components/    # section + UI components (shared across pages)
  data/          # portfolio.js (content), journey.js (guided order), seo.js (per-page metadata)
  hooks/         # useTheme, useCountUp, usePageMeta
  pages/         # one component per route (Home, About, Skills, ...)
  App.jsx        # <Routes>
  main.jsx       # BrowserRouter + ThemeProvider
  index.css      # design tokens, component + utility layers
scripts/
  generate-seo.mjs   # post-build: per-route static HTML + sitemap.xml + robots.txt
```

## Theming

Colours are driven by CSS custom properties defined in `src/index.css` under `:root` (light) and `.dark`. Tailwind reads them through arbitrary values such as `bg-[var(--bg-card)]`. Translucent tints use the `bg-tint-*` / `bd-*` utilities because Tailwind cannot apply `/opacity` to `var(...)` colours.
