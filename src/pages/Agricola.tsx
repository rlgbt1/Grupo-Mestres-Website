import { Cow, Carrot, MapPin } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import agroSoil from '../assets/images/agro-soil.jpg'
import agroAerial from '../assets/images/agro-aerial.jpg'
import './AreaOverview.css'

const copy = {
  pt: {
    eyebrow: 'Área de Actuação',
    title: 'Agrícola',
    intro: 'Criação de gado e produção hortícola na Fazenda Ebbanus Britus, uma frente que reforça a diversificação sectorial do Grupo Mestres.',
    soilAlt: 'Solo cultivado da Fazenda Ebbanus Britus',
    aerialAlt: 'Vista aérea de exploração agrícola',
    overview: 'Visão Geral',
    heading: 'Fazenda Ebbanus Britus',
    body: 'A Fazenda Ebbanus Britus ocupa 50 hectares em Icolo e Bengo, na Estrada de Catete, e reúne criação de gado e produção hortícola. É a frente agrícola do Grupo Mestres, alinhada com a estratégia de diversificação sectorial e de segurança alimentar para Angola.',
    location: 'Icolo e Bengo, Estrada de Catete',
    production: 'Produção',
    productionTitle: 'O que Produzimos',
    items: [
      { icon: Cow, title: 'Criação de Gado', desc: 'Criação de bois e cabritos na Fazenda Ebbanus Britus.' },
      { icon: Carrot, title: 'Produção Hortícola', desc: 'Plantação de tomate, cenoura e alface para o mercado nacional.' },
    ],
  },
  en: {
    eyebrow: 'Business Area',
    title: 'Agriculture',
    intro: 'Livestock farming and vegetable production at Fazenda Ebbanus Britus, a front that reinforces Grupo Mestres’ sector diversification.',
    soilAlt: 'Cultivated soil at Fazenda Ebbanus Britus',
    aerialAlt: 'Aerial view of agricultural operations',
    overview: 'Overview',
    heading: 'Fazenda Ebbanus Britus',
    body: 'Fazenda Ebbanus Britus covers 50 hectares in Icolo e Bengo, on Estrada de Catete, and brings together livestock farming and vegetable production. It is Grupo Mestres’ agricultural front, aligned with sector diversification and food security for Angola.',
    location: 'Icolo e Bengo, Estrada de Catete',
    production: 'Production',
    productionTitle: 'What We Produce',
    items: [
      { icon: Cow, title: 'Livestock Farming', desc: 'Cattle and goat farming at Fazenda Ebbanus Britus.' },
      { icon: Carrot, title: 'Vegetable Production', desc: 'Tomato, carrot and lettuce cultivation for the national market.' },
    ],
  },
}

export default function Agricola() {
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
            <img src={agroSoil} alt={t.soilAlt} loading="lazy" />
          </Reveal>
          <Reveal as="div" delay={100} className="area-overview-body">
            <span className="eyebrow eyebrow-dark">{t.overview}</span>
            <h2>{t.heading}</h2>
            <p>{t.body}</p>
            <p className="area-overview-location">
              <MapPin size={16} weight="light" /> {t.location}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.production}</span>
            <h2>{t.productionTitle}</h2>
          </Reveal>
          <div className="frentes-grid">
            {t.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="card frente-card">
                <p.icon size={26} weight="light" className="frente-icon" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="area-overview-media area-overview-media-wide">
            <img src={agroAerial} alt={t.aerialAlt} loading="lazy" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
