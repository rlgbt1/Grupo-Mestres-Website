import { Link } from 'react-router-dom'
import { ArrowRight, House } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import './NotFound.css'

const copy = {
  pt: {
    eyebrow: 'Erro 404',
    title: 'Página Não Encontrada',
    body: 'A página que procura não existe ou foi movida. Verifique o endereço ou volte à página inicial.',
    cta: 'Voltar ao Início',
  },
  en: {
    eyebrow: '404 Error',
    title: 'Page Not Found',
    body: 'The page you are looking for does not exist or has been moved. Check the address or return to the homepage.',
    cta: 'Back to Home',
  },
}

export default function NotFound() {
  const { lang } = useLanguage()
  const t = copy[lang]
  usePageMeta(t.title, t.body, { noIndex: true })

  return (
    <section className="section not-found bg-dark-texture">
      <div className="container not-found-inner">
        <Reveal className="eyebrow">{t.eyebrow}</Reveal>
        <Reveal as="h1" delay={70} className="not-found-title">{t.title}</Reveal>
        <Reveal delay={140} className="not-found-body">
          <p>{t.body}</p>
        </Reveal>
        <Reveal delay={220}>
          <Link to="/" className="btn btn-primary">
            <House size={17} weight="bold" /> {t.cta} <ArrowRight size={17} weight="bold" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
