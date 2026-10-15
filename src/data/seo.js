/**
 * Single source of truth for per-page SEO metadata.
 *
 * Consumed by:
 *  - the React app  -> `usePageMeta` (updates <head> on client-side navigation)
 *  - the build step -> `scripts/generate-seo.mjs` (writes per-route static HTML,
 *                       sitemap.xml and robots.txt so link previews and crawlers
 *                       get the right metadata without running JavaScript)
 *
 * Keep it free of imports/JSX so it can be loaded from plain Node.
 */

/** Public production URL. Update this one constant if the domain changes. */
export const SITE_URL = 'https://portfolio-nine-phi.vercel.app'

/** Appended to the short `title` on every page except the home page. */
export const TITLE_SUFFIX = ' · Hugo Ramírez — Technical Support Specialist (L1/L2)'

/** Short share-title used inside OG / Twitter cards. */
export const SHARE_TITLE = 'Hugo Ramírez — Technical Support Specialist (L1/L2)'

export const SEO = {
  '/': {
    fullTitle: true,
    title: 'Hugo Ramírez — Technical Support Specialist (L1/L2) | Enterprise SaaS & CPQ',
    shareTitle: 'Technical Support Specialist (L1/L2) — Enterprise SaaS & CPQ',
    description:
      'Technical Support Specialist (L1/L2) with 4+ years across enterprise SaaS and CPQ platforms. 94% CSAT, sub-10-minute first response, 30+ documented incidents and RCAs. Bilingual English (C1) / Spanish. Open to US & EU hours.',
    image: '/og/home.png',
  },
  '/about': {
    title: 'About',
    shareTitle: 'About Hugo Ramírez — Support Engineer',
    description:
      'Technical Support Specialist (L1/L2) based in Cali, Colombia. How I approach support engineering, the languages I speak and my availability for US & EU hours.',
    image: '/og/about.png',
  },
  '/skills': {
    title: 'Skills & tools',
    shareTitle: 'Skills & tools — Support Engineering',
    description:
      'Support engineering toolkit: incident management, root-cause analysis, log analysis, SQL and SSO/OIDC — plus the enterprise SaaS platforms and tools I use every day.',
    image: '/og/skills.png',
  },
  '/experience': {
    title: 'Experience',
    shareTitle: 'Experience — L1/L2 Technical Support',
    description:
      'Four years of L1/L2 technical support across enterprise SaaS and CPQ: high-volume bilingual support and deep incident work, sustaining 94% CSAT.',
    image: '/og/experience.png',
  },
  '/case-studies': {
    title: 'Case Studies',
    shareTitle: 'Case Studies — Incidents, root cause to fix',
    description:
      'Three real production incidents investigated end to end — SSO authentication failure, broken deep links and an expired-credential outage — with root cause and prevention.',
    image: '/og/case-studies.png',
  },
  '/projects': {
    title: 'Projects',
    shareTitle: 'Projects — Full-stack & front-end work',
    description:
      'Full-stack and front-end projects built with React, Node.js, Angular and TypeScript — e-commerce platforms, REST APIs and UI replicas.',
    image: '/og/projects.png',
  },
  '/education': {
    title: 'Education',
    shareTitle: 'Education & verified certifications',
    description:
      'Systems Engineering degree in progress, a full-stack development bootcamp and verified Coursera certifications from Meta and UC Davis.',
    image: '/og/education.png',
  },
}

/** Ordered list of indexable routes (drives sitemap.xml). */
export const INDEXABLE_ROUTES = Object.keys(SEO)
