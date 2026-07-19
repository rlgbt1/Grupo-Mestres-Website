import { Link } from 'react-router-dom'
import { ArrowRight, Handshake } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import mining from '../assets/images/mining.jpg'
import './AreaOverview.css'

const copy = {
  pt: {
    eyebrow: 'Área de Actuação',
    title: 'Mineração',
    intro: 'A frente mineira do Grupo é conduzida pela Mestres Mineral Resources, a empresa constituída dedicada à exploração de recursos minerais.',
    imageAlt: 'Operação de mineração no leste de Angola',
    overview: 'Visão Geral',
    heading: 'Uma Frente Conduzida por Empresa Própria',
    body: 'Ao contrário das outras áreas de negócio, a mineração já corresponde a uma empresa constituída do Grupo: a Mestres Mineral Resources. É lá que estão detalhadas as concessões, os recursos explorados e a fábrica de lapidação de diamantes em construção em Saurimo.',
    cta: 'Ver Mestres Mineral Resources',
    investors: 'Investidores',
    partnerships: 'Parcerias Estratégicas',
    lede: 'Damos vida ao seu projecto mineiro em Angola: acesso a concessões minerais prontas para investimento, uma rede de relações institucionais construída ao longo de décadas e capacidade de execução local para investidores estrangeiros e empresas estratégicas.',
    partnerTitle: 'O Seu Parceiro Local em Angola',
    partnerBody: 'Acompanhamos investidores estrangeiros e empresas estratégicas em todas as fases do projecto mineiro, da concessão à execução no terreno.',
  },
  en: {
    eyebrow: 'Business Area',
    title: 'Mining',
    intro: 'The Group’s mining front is led by Mestres Mineral Resources, the incorporated company dedicated to mineral resource exploration.',
    imageAlt: 'Mining operation in eastern Angola',
    overview: 'Overview',
    heading: 'A Front Led by Its Own Company',
    body: 'Unlike the other business areas, mining already corresponds to an incorporated Group company: Mestres Mineral Resources. This is where concessions, explored resources and the diamond-cutting factory under construction in Saurimo are detailed.',
    cta: 'View Mestres Mineral Resources',
    investors: 'Investors',
    partnerships: 'Strategic Partnerships',
    lede: 'We bring mining projects in Angola to life: access to investment-ready mineral concessions, an institutional relationship network built over decades, and local execution capacity for foreign investors and strategic companies.',
    partnerTitle: 'Your Local Partner in Angola',
    partnerBody: 'We support foreign investors and strategic companies through every stage of a mining project, from concession to on-the-ground execution.',
  },
}

export default function Mineracao() {
  const { lang } = useLanguage()
  const t = copy[lang]
  usePageMeta(t.title, t.intro)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
      </PageHero>

      <section className="section">
        <div className="container area-overview-intro">
          <Reveal as="div" className="area-overview-media">
            <img src={mining} alt={t.imageAlt} loading="lazy" />
          </Reveal>
          <Reveal as="div" delay={100} className="area-overview-body">
            <span className="eyebrow eyebrow-dark">{t.overview}</span>
            <h2>{t.heading}</h2>
            <p>{t.body}</p>
            <Link to="/empresas-do-grupo" className="btn btn-primary">
              {t.cta} <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.investors}</span>
            <h2>{t.partnerships}</h2>
            <p className="section-lede">{t.lede}</p>
          </Reveal>
          <div className="frentes-grid frentes-grid-single">
            <Reveal className="card frente-card">
              <Handshake size={26} weight="light" className="frente-icon" />
              <h3>{t.partnerTitle}</h3>
              <p>{t.partnerBody}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
