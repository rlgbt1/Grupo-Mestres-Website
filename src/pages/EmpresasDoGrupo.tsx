import { Link } from 'react-router-dom'
import { Mountains, ArrowRight, Atom } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import mmrLogo from '../assets/logos/mestres-mineral-r-logo.png'
import goldMineIcon from '../assets/icons/gold-mine.svg'
import diamondIcon from '../assets/icons/diamond.svg'
import stoneRockIcon from '../assets/icons/stone-rock.svg'
import miningCartIcon from '../assets/icons/mining-cart.svg'
import './EmpresasDoGrupo.css'

const copy = {
  pt: {
    eyebrow: 'Empresas do Grupo',
    title: 'Mestres Mineral Resources',
    intro: 'A empresa de mineração do Grupo Mestres, dedicada à aquisição de concessões e à exploração responsável de recursos minerais no leste de Angola.',
    company: 'Empresa Constituída',
    heading: 'Uma Identidade Própria dentro do Grupo',
    body: 'A Mestres Mineral Resources é, a par da Fundação Isaías Trindade, uma das duas entidades já constituídas do Grupo Mestres & Serviços. Actua na aquisição de concessões mineiras e na exploração de ouro, diamantes, calcário e quartzo, com operações previstas para o leste de Angola.',
    clarify: 'As restantes áreas de negócio do Grupo (Engenharia & Construção Civil, Petróleo & Gás, Agrícola e Energia) estão, por agora, atribuídas a entidades legais diferentes. Não fazem parte da Mestres Mineral Resources nem têm ainda página de empresa própria.',
    resources: 'Recursos',
    resourcesTitle: 'O que Exploramos',
    critical: { title: 'Minerais Críticos', desc: 'Prospecção e avaliação de minerais críticos, essenciais para cadeias de valor estratégicas e para a transição energética global.' },
    where: 'Onde Operamos',
    whereTitle: 'Presença no Leste de Angola',
    status: 'Em Construção',
    factoryTitle: 'Fábrica de Lapidação de Diamantes, Saurimo',
    factoryBody: 'Estrutura de lapidação que irá agregar valor à produção diamantífera dentro do território nacional.',
    ctaTitle: 'Interessado em Parcerias no Sector Mineiro?',
    ctaBody: 'Fale com a nossa direcção sobre oportunidades de investimento e colaboração técnica.',
    cta: 'Contacte-nos',
    resourcesItems: [
      { title: 'Ouro', desc: 'Prospecção e exploração aurífera em concessões no leste do país.', icon: goldMineIcon },
      { title: 'Diamantes', desc: 'Exploração diamantífera com projecto de lapidação integrado.', icon: diamondIcon },
      { title: 'Calcário', desc: 'Exploração de calcário para aplicação industrial e de construção.', icon: stoneRockIcon },
      { title: 'Quartzo', desc: 'Exploração de quartzo para aplicações industriais especializadas.', icon: miningCartIcon },
    ],
  },
  en: {
    eyebrow: 'Group Companies',
    title: 'Mestres Mineral Resources',
    intro: 'Grupo Mestres’ mining company, dedicated to acquiring concessions and responsibly exploring mineral resources in eastern Angola.',
    company: 'Incorporated Company',
    heading: 'A Distinct Identity within the Group',
    body: 'Mestres Mineral Resources is, alongside the Isaías Trindade Foundation, one of the two already incorporated entities of Grupo Mestres & Serviços. It operates in the acquisition of mining concessions and the exploration of gold, diamonds, limestone and quartz, with operations planned for eastern Angola.',
    clarify: 'The Group’s remaining business areas (Engineering & Civil Construction, Oil & Gas, Agriculture and Energy) are currently assigned to different legal entities. They are not part of Mestres Mineral Resources and do not yet have their own company page.',
    resources: 'Resources',
    resourcesTitle: 'What We Explore',
    critical: { title: 'Critical Minerals', desc: 'Prospecting and assessment of critical minerals, essential to strategic value chains and the global energy transition.' },
    where: 'Where We Operate',
    whereTitle: 'Presence in Eastern Angola',
    status: 'Under Construction',
    factoryTitle: 'Diamond-Cutting Factory, Saurimo',
    factoryBody: 'A cutting facility that will add value to diamond production within the national territory.',
    ctaTitle: 'Interested in Mining Sector Partnerships?',
    ctaBody: 'Speak with our leadership about investment opportunities and technical collaboration.',
    cta: 'Contact Us',
    resourcesItems: [
      { title: 'Gold', desc: 'Prospecting and gold exploration in concessions in the east of the country.', icon: goldMineIcon },
      { title: 'Diamonds', desc: 'Diamond exploration with an integrated cutting project.', icon: diamondIcon },
      { title: 'Limestone', desc: 'Limestone exploration for industrial and construction applications.', icon: stoneRockIcon },
      { title: 'Quartz', desc: 'Quartz exploration for specialised industrial applications.', icon: miningCartIcon },
    ],
  },
}

export default function EmpresasDoGrupo() {
  const { lang } = useLanguage()
  const t = copy[lang]
  usePageMeta(t.title, t.intro)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
      </PageHero>

      <section className="section">
        <div className="container mmr-intro">
          <Reveal as="div" className="mmr-brand-panel">
            <div className="mmr-brand-mark">
              <img src={mmrLogo} alt="Mestres Mineral Resources, Lda." loading="lazy" />
            </div>
          </Reveal>
          <Reveal as="div" delay={100} className="mmr-intro-body">
            <span className="eyebrow eyebrow-dark">{t.company}</span>
            <h2>{t.heading}</h2>
            <p>{t.body}</p>
            <p className="mmr-clarify">{t.clarify}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.resources}</span>
            <h2>{t.resourcesTitle}</h2>
          </Reveal>
          <div className="recursos-grid">
            {t.resourcesItems.map((r, i) => (
              <Reveal key={r.title} delay={i * 80} className="card recurso-card">
                <img src={r.icon} alt="" className="recurso-icon" loading="lazy" />
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320} className="minerais-criticos-card">
            <Atom size={28} weight="light" className="minerais-criticos-icon" />
            <div>
              <h3>{t.critical.title}</h3>
              <p>{t.critical.desc}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.where}</span>
            <h2>{t.whereTitle}</h2>
          </Reveal>
          <div className="localizacoes-grid">
            <Reveal className="localizacao-card">
              <Mountains size={26} weight="light" className="localizacao-icon" />
              <span className="localizacao-tag">{t.status}</span>
              <h3>{t.factoryTitle}</h3>
              <p>{t.factoryBody}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt cta-final">
        <div className="container cta-final-inner">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaBody}</p>
          <Link to="/contactos" className="btn btn-primary">
            {t.cta} <ArrowRight size={17} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
