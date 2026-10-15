/**
 * Post-build SEO step.
 *
 * Turns the single-page `dist/index.html` into one static HTML file per route,
 * each with its own <title>, description, canonical URL and social card. That
 * matters because crawlers and link unfurlers (LinkedIn, WhatsApp, Slack, X)
 * read the raw HTML and do not run JavaScript.
 *
 * Also emits `sitemap.xml` and `robots.txt` from the same source of truth.
 *
 * Runs automatically via `npm run build`; safe to run on its own with
 * `node scripts/generate-seo.mjs` after a `vite build`.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SEO, SITE_URL, TITLE_SUFFIX, INDEXABLE_ROUTES } from '../src/data/seo.js'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(ROOT, 'dist')
const INDEX = path.join(DIST, 'index.html')

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

/** Tags stripped from the base document so each route can provide its own. */
const STRIP = [
  /<title>[\s\S]*?<\/title>\s*/gi,
  /<meta\s+name="description"[\s\S]*?\/?>\s*/gi,
  /<meta\s+name="robots"[\s\S]*?\/?>\s*/gi,
  /<link\s+rel="canonical"[\s\S]*?\/?>\s*/gi,
  /<meta\s+property="og:[\s\S]*?\/?>\s*/gi,
  /<meta\s+name="twitter:[\s\S]*?\/?>\s*/gi,
  /\n\s*<!--\s*(?:Open Graph|Twitter)\s*-->/gi,
]

function headFor(route) {
  const meta = SEO[route]
  const url = `${SITE_URL}${route === '/' ? '/' : route}`
  const title = meta.fullTitle ? meta.title : `${meta.title}${TITLE_SUFFIX}`
  const share = meta.shareTitle || title
  const image = `${SITE_URL}${meta.image}`

  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Hugo Ramírez" />`,
    `<meta property="og:title" content="${esc(share)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(share)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ].join('\n    ')
}

async function main() {
  if (!existsSync(INDEX)) {
    console.error('[seo] dist/index.html not found — run `vite build` first.')
    process.exit(1)
  }

  const base = await readFile(INDEX, 'utf8')

  let shell = base
  for (const re of STRIP) shell = shell.replace(re, '')
  shell = shell.replace(/\n\s*\n\s*\n/g, '\n\n')

  for (const route of INDEXABLE_ROUTES) {
    const page = shell.replace('</head>', `  ${headFor(route)}\n  </head>`)
    const outDir = route === '/' ? DIST : path.join(DIST, route)
    if (route !== '/') await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), page, 'utf8')
  }

  const today = new Date().toISOString().slice(0, 10)
  const entries = [
    ...INDEXABLE_ROUTES.map((route) => ({
      loc: `${SITE_URL}${route === '/' ? '/' : route}`,
      priority: route === '/' ? '1.0' : '0.8',
    })),
    { loc: `${SITE_URL}/cv.html`, priority: '0.6' },
  ]

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    ),
    '</urlset>',
    '',
  ].join('\n')

  await writeFile(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8')
  await writeFile(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
    'utf8',
  )

  console.log(
    `[seo] wrote ${INDEXABLE_ROUTES.length} route pages + sitemap.xml (${entries.length} urls) + robots.txt`,
  )
}

main().catch((err) => {
  console.error('[seo] failed:', err)
  process.exit(1)
})
