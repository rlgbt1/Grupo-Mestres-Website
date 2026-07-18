import type { ReactNode } from 'react'
import Reveal from './Reveal'
import './PageHero.css'

interface PageHeroProps {
  eyebrow: string
  title: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="page-hero bg-dark-texture">
      <div className="container page-hero-content">
        <Reveal className="eyebrow">{eyebrow}</Reveal>
        <Reveal as="h1" delay={70} className="page-hero-title">{title}</Reveal>
        {children && <Reveal delay={140} className="page-hero-body">{children}</Reveal>}
      </div>
    </section>
  )
}
