import { Lightning } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import energyTowers from '../assets/images/energy-towers.jpg'
import './AreaOverview.css'

const copy = {
  pt: {
    eyebrow: 'Área de Actuação',
    title: 'Energia',
    intro: 'Infraestrutura energética e complexos industriais em desenvolvimento para o futuro de Angola.',
    imageAlt: 'Infraestrutura de transporte de energia',
    overview: 'Visão Geral',
    heading: 'Infraestrutura para o Futuro Energético de Angola',
    body: 'O Grupo Mestres está a desenvolver um complexo industrial e infraestrutura energética, numa frente que acompanha as prioridades nacionais de diversificação da matriz energética. Dada a fase actual do projecto, os detalhes técnicos e de localização serão divulgados progressivamente.',
  },
  en: {
    eyebrow: 'Business Area',
    title: 'Energy',
    intro: 'Energy infrastructure and industrial complexes under development for Angola’s future.',
    imageAlt: 'Energy transmission infrastructure',
    overview: 'Overview',
    heading: 'Infrastructure for Angola’s Energy Future',
    body: 'Grupo Mestres is developing an industrial complex and energy infrastructure, a front aligned with national priorities for diversifying the energy matrix. Given the current project stage, technical and location details will be disclosed progressively.',
  },
}

export default function Energia() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
      </PageHero>

      <section className="section">
        <div className="container area-overview-intro">
          <Reveal as="div" className="area-overview-media">
            <img src={energyTowers} alt={t.imageAlt} />
          </Reveal>
          <Reveal as="div" delay={100} className="area-overview-body">
            <Lightning size={28} weight="light" className="rep-corp-icon" />
            <span className="eyebrow eyebrow-dark">{t.overview}</span>
            <h2>{t.heading}</h2>
            <p>{t.body}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
