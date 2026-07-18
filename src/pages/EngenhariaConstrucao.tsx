import { TrainSimple } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import construction from '../assets/images/engineering-construction-site.jpg'
import emdLogo from '../assets/logos/emd-division-logo.webp'
import './AreaOverview.css'

const copy = {
  pt: {
    eyebrow: 'Área de Actuação',
    title: 'Engenharia & Construção Civil',
    intro: 'Um portefólio activo de execução de obra, da infraestrutura pública essencial aos projectos industriais e representações corporativas.',
    constructionAlt: 'Obra de construção civil do Grupo Mestres',
    emdAlt: 'Logótipo General Motors Electro-Motive Division',
    overview: 'Visão Geral',
    heading: 'Execução com Equipas Próprias e Parceiros Técnicos',
    body: 'Capacidades consolidadas em engenharia e gestão de projectos de construção. Desenvolvemos soluções de engenharia para projectos industriais e de infraestrutura, com equipas próprias e parceiros técnicos que garantem uma execução rigorosa em todo o território angolano.',
    portfolio: 'Portefólio',
    portfolioTitle: 'Projectos Desenvolvidos',
    reps: 'Representações Corporativas',
    repsTitle: 'Uma Linha de Actuação Própria',
    repsBody: 'Em 2001, o Grupo Mestres assumiu a representação da General Motors para a EMD (Electro-Motive Division), fornecendo carruagens ao CFL (Caminho de Ferro de Luanda). A partir dessa base, o Grupo consolidou relações com parceiros internacionais como ES-KO Group e Huawei, reforçando as representações corporativas como uma linha de actuação própria.',
    projects: [
      { title: 'Fontenários Públicos', desc: 'Construção de fontenários comunitários para acesso a água potável em zonas com necessidades de infraestrutura básica.' },
      { title: 'Infraestruturas Públicas e Privadas', desc: 'Execução de obras de infraestrutura em projectos públicos e privados, com equipas próprias e parceiros técnicos.' },
      { title: 'Pontes', desc: 'Projectos de engenharia de pontes, ligando comunidades e infraestruturas de transporte.' },
      { title: 'Complexos Residenciais', desc: 'Desenvolvimento de complexos habitacionais, do projecto à execução da obra.' },
      { title: 'Projectos Industriais', desc: 'Execução de instalações industriais, incluindo a Fábrica de Botijas de Gás.' },
    ],
  },
  en: {
    eyebrow: 'Business Area',
    title: 'Engineering & Civil Construction',
    intro: 'An active construction portfolio, from essential public infrastructure to industrial projects and corporate representations.',
    constructionAlt: 'Grupo Mestres civil construction work',
    emdAlt: 'General Motors Electro-Motive Division logo',
    overview: 'Overview',
    heading: 'Execution with In-House Teams and Technical Partners',
    body: 'Established capabilities in engineering and construction project management. We develop engineering solutions for industrial and infrastructure projects, with in-house teams and technical partners that ensure rigorous execution across Angola.',
    portfolio: 'Portfolio',
    portfolioTitle: 'Projects Delivered',
    reps: 'Corporate Representations',
    repsTitle: 'A Distinct Line of Activity',
    repsBody: 'In 2001, Grupo Mestres took on the representation of General Motors for EMD (Electro-Motive Division), supplying railcars to CFL (Luanda Railway). From that base, the Group consolidated relationships with international partners such as ES-KO Group and Huawei, reinforcing corporate representations as a distinct line of activity.',
    projects: [
      { title: 'Public Water Fountains', desc: 'Construction of community water fountains for access to drinking water in areas with basic infrastructure needs.' },
      { title: 'Public and Private Infrastructure', desc: 'Execution of infrastructure works in public and private projects, with in-house teams and technical partners.' },
      { title: 'Bridges', desc: 'Bridge engineering projects connecting communities and transport infrastructure.' },
      { title: 'Residential Complexes', desc: 'Development of residential complexes, from project design to construction execution.' },
      { title: 'Industrial Projects', desc: 'Execution of industrial facilities, including the gas cylinder factory.' },
    ],
  },
}

export default function EngenhariaConstrucao() {
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
            <img src={construction} alt={t.constructionAlt} />
          </Reveal>
          <Reveal as="div" delay={100} className="area-overview-body">
            <span className="eyebrow eyebrow-dark">{t.overview}</span>
            <h2>{t.heading}</h2>
            <p>{t.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.portfolio}</span>
            <h2>{t.portfolioTitle}</h2>
          </Reveal>
          <div className="projectos-grid">
            {t.projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="projecto-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container area-overview-intro">
          <Reveal as="div" className="area-overview-media emd-logo-panel">
            <img src={emdLogo} alt={t.emdAlt} />
          </Reveal>
          <Reveal as="div" delay={100} className="area-overview-body">
            <TrainSimple size={28} weight="light" className="rep-corp-icon" />
            <span className="eyebrow eyebrow-dark">{t.reps}</span>
            <h2>{t.repsTitle}</h2>
            <p>{t.repsBody}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
