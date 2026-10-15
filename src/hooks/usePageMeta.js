import { useEffect } from 'react'
import { SITE_URL, TITLE_SUFFIX } from '../data/seo'

function upsert(selector, create) {
  let el = document.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

function setMeta(attr, key, value) {
  if (!value) return
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute(attr, key)
    return m
  })
  el.setAttribute('content', value)
}

/**
 * Keeps <head> in sync with the active route so every page is shareable and
 * indexable with its own title, description, canonical URL and social image.
 */
export default function usePageMeta({
  title,
  description,
  image = '/og/home.png',
  path = '/',
  fullTitle = false,
  shareTitle,
  noindex = false,
} = {}) {
  useEffect(() => {
    const full = title ? (fullTitle ? title : `${title}${TITLE_SUFFIX}`) : null
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    const absImage = /^https?:/.test(image) ? image : `${SITE_URL}${image}`

    if (full) {
      document.title = full
      setMeta('property', 'og:title', full)
      setMeta('name', 'twitter:title', full)
    }
    if (shareTitle) {
      setMeta('property', 'og:title', shareTitle)
      setMeta('name', 'twitter:title', shareTitle)
    }
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }

    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', absImage)
    setMeta('name', 'twitter:image', absImage)

    const link = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link')
      l.setAttribute('rel', 'canonical')
      return l
    })
    link.setAttribute('href', url)
  }, [title, description, image, path, fullTitle, shareTitle, noindex])
}
