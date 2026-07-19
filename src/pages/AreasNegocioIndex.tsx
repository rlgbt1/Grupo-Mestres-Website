import { Link } from 'react-router-dom'
import { ArrowRight, Palette } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import construction from '../assets/images/engineering-construction-site.jpg'
import oilgas from '../assets/images/oilgas.jpg'
import mining from '../assets/images/mining.jpg'
import agroSoil from '../assets/images/agro-soil.jpg'
import energyTowers from '../assets/images/energy-towers.jpg'
import './AreasNegocioIndex.css'

const copy = {
  pt: {
    eyebrow: 'Áreas de Negócio',
    title: 'Frentes de Actuação do Grupo Mestres',
    intro: 'Além da Mestres Mineral Resources, o Grupo actua e está a estruturar-se em cinco frentes estratégicas para a economia angolana, cada uma com o seu próprio ritmo de maturação.',
    detail: 'Ver Detalhe',
    art: 'O Grupo mantém ainda uma colecção cultural africana, com peças e esculturas tradicionais, preservada e divulgada através da',
    foundation: 'Fundação Isaías Trindade',
    areas: [
      { to: '/areas-de-negocio/engenharia-construcao-civil', tag: 'Área de Actuação', label: 'Engenharia & Construção Civil', desc: 'Portefólio activo de infraestruturas públicas e privadas, pontes, complexos residenciais, projectos industriais e representações corporativas.', image: construction },
      { to: '/areas-de-negocio/petroleo-gas', tag: 'Área de Actuação', label: 'Petróleo & Gás', desc: 'Parcerias estratégicas com operadores offshore e apoio ao sector petrolífero angolano.', image: oilgas },
      { to: '/areas-de-negocio/mineracao', tag: 'Ligada à Mestres Mineral Resources', label: 'Mineração', desc: 'Aquisição de concessões e exploração de ouro, diamantes, calcário e quartzo, conduzida pela empresa constituída do Grupo, a Mestres Mineral Resources.', image: mining },
      { to: '/areas-de-negocio/agricola', tag: 'Área de Actuação', label: 'Agrícola', desc: 'Criação de gado e produção hortícola na Fazenda Ebbanus Britus, em Icolo e Bengo.', image: agroSoil },
      { to: '/areas-de-negocio/energia', tag: 'Área de Actuação', label: 'Energia', desc: 'Infraestrutura energética e complexos industriais em desenvolvimento para o futuro de Angola.', image: energyTowers },
    ],
  },
  en: {
    eyebrow: 'Business Areas',
    title: 'Grupo Mestres Fronts of Action',
    intro: 'Beyond Mestres Mineral Resources, the Group operates and is structuring itself across five strategic fronts for the Angolan economy, each with its own stage of maturity.',
    detail: 'View Detail',
    art: 'The Group also maintains an African cultural collection, with traditional pieces and sculptures, preserved and shared through the',
    foundation: 'Isaías Trindade Foundation',
    areas: [
      { to: '/areas-de-negocio/engenharia-construcao-civil', tag: 'Business Area', label: 'Engineering & Civil Construction', desc: 'Active portfolio of public and private infrastructure, bridges, residential complexes, industrial projects and corporate representations.', image: construction },
      { to: '/areas-de-negocio/petroleo-gas', tag: 'Business Area', label: 'Oil & Gas', desc: 'Strategic partnerships with offshore operators and support to the Angolan oil sector.', image: oilgas },
      { to: '/areas-de-negocio/mineracao', tag: 'Linked to Mestres Mineral Resources', label: 'Mining', desc: 'Acquisition of concessions and exploration of gold, diamonds, limestone and quartz, led by the Group’s incorporated company, Mestres Mineral Resources.', image: mining },
      { to: '/areas-de-negocio/agricola', tag: 'Business Area', label: 'Agriculture', desc: 'Livestock farming and vegetable production at Fazenda Ebbanus Britus, in Icolo e Bengo.', image: agroSoil },
      { to: '/areas-de-negocio/energia', tag: 'Business Area', label: 'Energy', desc: 'Energy infrastructure and industrial complexes under development for Angola’s future.', image: energyTowers },
    ],
  },
}

export default function AreasNegocioIndex() {
  const { lang } = useLanguage()
  const t = copy[lang]
  usePageMeta(t.title, t.intro)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
      </PageHero>

      <section className="section">
        <div className="container areas-index-list">
          {t.areas.map((a, i) => (
            <Reveal key={a.to} delay={i * 90} className="areas-index-item">
              <div className="areas-index-media">
                <img src={a.image} alt="" loading="lazy" />
              </div>
              <div className="areas-index-body">
                <span className="area-card-tag">{a.tag}</span>
                <h2>{a.label}</h2>
                <p>{a.desc}</p>
                <Link to={a.to} className="link-arrow">
                  {t.detail} <ArrowRight size={15} weight="bold" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt arte-callout">
        <div className="container arte-callout-inner">
          <Palette size={28} weight="light" className="arte-callout-icon" />
          <p>
            {t.art}{' '}
            <Link to="/fundacao-isaias-trindade" className="arte-callout-link">{t.foundation}</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
