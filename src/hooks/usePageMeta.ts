import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const SITE_NAME = 'Grupo Mestres & Serviços'
const SITE_URL = 'https://www.grupomestres.com'

function setMetaContent(selector: string, content: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

interface PageMetaOptions {
  /** Use the title as-is on the homepage (no " | Site Name" suffix). */
  isHome?: boolean
  /** Set for pages that shouldn't be indexed, e.g. the 404 page. */
  noIndex?: boolean
}

/**
 * Sets document.title, meta description/OG/Twitter tags, the canonical link, and the
 * robots meta tag on mount and whenever the route or content changes.
 */
export function usePageMeta(title: string, description: string, options: PageMetaOptions | boolean = {}) {
  const { pathname } = useLocation()
  const opts = typeof options === 'boolean' ? { isHome: options } : options
  const { isHome = false, noIndex = false } = opts

  useEffect(() => {
    const finalTitle = isHome ? title : `${title} | ${SITE_NAME}`
    document.title = finalTitle
    setMetaContent('meta[name="description"]', description)
    setMetaContent('meta[property="og:title"]', finalTitle)
    setMetaContent('meta[property="og:description"]', description)
    setMetaContent('meta[name="twitter:title"]', finalTitle)
    setMetaContent('meta[name="twitter:description"]', description)
    setMetaContent('meta[name="robots"]', noIndex ? 'noindex, follow' : 'index, follow')

    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
    setMetaContent('meta[property="og:url"]', canonicalUrl)
    const canonicalEl = document.querySelector('link[rel="canonical"]')
    if (canonicalEl) canonicalEl.setAttribute('href', canonicalUrl)
  }, [title, description, isHome, noIndex, pathname])
}
