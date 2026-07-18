import { Link } from 'react-router-dom'
import { ArrowRight, Buildings, Target, HandHeart, TrendUp, Quotes } from '@phosphor-icons/react'
import Reveal from '../components/Reveal'
import StatBar from '../components/StatBar'
import { useLanguage } from '../i18n/LanguageContext'
import construction from '../assets/images/construction.jpg'
import engineeringConstruction from '../assets/images/engineering-construction-site.jpg'
import mining from '../assets/images/mining.jpg'
import oilgas from '../assets/images/oilgas.jpg'
import agroSoil from '../assets/images/agro-soil.jpg'
import energyTowers from '../assets/images/energy-towers.jpg'
import fundacaoLogo from '../assets/logos/fundacao-isaias-trindade.png'
import rt from '../assets/images/reinaldo-trindade.jpg'
import './Home.css'

const copy = {
  pt: {
    eyebrowHero: '35 Anos a Construir Angola',
    heroTitle: 'Um Grupo Empresarial Angolano com Actuação em Sectores Estratégicos da Economia Nacional.',
    heroSubtitle:
      'Com experiência nas áreas da engenharia, petróleo & gás, energia, agricultura e recursos minerais, o Grupo Mestres desenvolve empresas, projectos e soluções que contribuem para o crescimento económico sustentável de Angola.',
    ctaPrimary: 'Conhecer o Grupo',
    ctaSecondary: 'Contacte-nos',
    empresaEyebrow: 'Empresa do Grupo',
    empresaTitle: 'Uma Empresa Constituída, com Identidade Própria',
    empresaLede: 'A Mestres Mineral Resources é a empresa de mineração do Grupo, com concessões e operações previstas no leste de Angola.',
    mmrTitle: 'Mestres Mineral Resources',
    mmrDesc: 'Aquisição de concessões mineiras e exploração de ouro, diamantes, calcário e quartzo, com uma fábrica de lapidação de diamantes em construção em Saurimo.',
    mmrLink: 'Conhecer a Empresa',
    areasEyebrow: 'Áreas de Negócio',
    areasTitle: 'Frentes de Actuação em Estruturação',
    areasLede: 'Além da Mestres Mineral Resources, o Grupo actua e está a estruturar-se em cinco frentes estratégicas para a economia angolana.',
    tag: 'Área de Actuação',
    saberMais: 'Saber Mais',
    fundadorEyebrow: 'Fundador',
    fundadorQuote: 'Construímos o Grupo Mestres passo a passo, sector a sector, sempre com a mesma convicção: Angola cresce quando as suas próprias empresas assumem a responsabilidade de a construir.',
    fundadorNome: 'Eng. Reinaldo Trindade',
    fundadorCargo: 'Fundador & CEO',
    fundadorCta: 'Conhecer o Fundador',
    compromissoEyebrow: 'Compromisso',
    compromissoTitle: 'Uma Visão de Crescimento com Propósito',
    fundacaoEyebrow: 'Braço Social',
    fundacaoTitle: 'Fundação Isaías Trindade',
    fundacaoDesc: 'Cultura, educação, saúde e ambiente: o braço social do Grupo apoia comunidades vulneráveis, a formação técnica de jovens, a colecção cultural africana e a preservação do património cultural angolano.',
    fundacaoLink: 'Conhecer a Fundação',
    ctaFinalTitle: 'Quer Estruturar uma Parceria com o Grupo Mestres?',
    ctaFinalDesc: 'A nossa direcção está disponível para conversar sobre oportunidades de investimento e colaboração técnica, com acesso a concessões, rede de parcerias de décadas e capacidade de execução local.',
    ctaFinalBtn: 'Contacte-nos',
    areas: [
      { to: '/areas-de-negocio/engenharia-construcao-civil', label: 'Engenharia & Construção Civil', desc: 'Infraestruturas públicas e privadas, projectos industriais, pontes e representações corporativas em Angola.', image: engineeringConstruction },
      { to: '/areas-de-negocio/petroleo-gas', label: 'Petróleo & Gás', desc: 'Parcerias estratégicas com operadores offshore e apoio ao sector petrolífero angolano.', image: oilgas },
      { to: '/areas-de-negocio/mineracao', label: 'Mineração', desc: 'Concessões e exploração de ouro, diamantes, calcário e quartzo, conduzidas pela Mestres Mineral Resources.', image: mining },
      { to: '/areas-de-negocio/agricola', label: 'Agrícola', desc: 'Criação de gado e produção hortícola na Fazenda Ebbanus Britus, em Icolo e Bengo.', image: agroSoil },
      { to: '/areas-de-negocio/energia', label: 'Energia', desc: 'Infraestrutura energética e complexos industriais em desenvolvimento para o futuro de Angola.', image: energyTowers },
    ],
    pilares: [
      { icon: TrendUp, title: 'Excelência Técnica', desc: 'Rigor de execução em cada projecto, do primeiro estudo à entrega.' },
      { icon: HandHeart, title: 'Responsabilidade Social', desc: 'Impacto humano real através da Fundação Isaías Trindade.' },
      { icon: Target, title: 'Visão de Longo Prazo', desc: 'Estrutura pensada para escalar, não para o próximo trimestre.' },
    ],
  },
  en: {
    eyebrowHero: '35 Years Building Angola',
    heroTitle: 'An Angolan Business Group Operating Across Strategic Sectors of the National Economy.',
    heroSubtitle:
      'With experience across engineering, oil & gas, energy, agriculture and mineral resources, Grupo Mestres develops businesses, projects and solutions that contribute to Angola’s sustainable economic growth.',
    ctaPrimary: 'Discover the Group',
    ctaSecondary: 'Contact Us',
    empresaEyebrow: 'Group Company',
    empresaTitle: 'An Incorporated Company, with Its Own Identity',
    empresaLede: 'Mestres Mineral Resources is the Group’s mining company, with concessions and operations planned in eastern Angola.',
    mmrTitle: 'Mestres Mineral Resources',
    mmrDesc: 'Acquisition of mining concessions and exploration of gold, diamonds, limestone and quartz, with a diamond-cutting factory under construction in Saurimo.',
    mmrLink: 'Discover the Company',
    areasEyebrow: 'Business Areas',
    areasTitle: 'Fronts of Action Under Development',
    areasLede: 'Beyond Mestres Mineral Resources, the Group operates and is structuring itself across five strategic fronts for the Angolan economy.',
    tag: 'Business Area',
    saberMais: 'Learn More',
    fundadorEyebrow: 'Founder',
    fundadorQuote: 'We built Grupo Mestres step by step, sector by sector, always with the same conviction: Angola grows when its own companies take responsibility for building it.',
    fundadorNome: 'Eng. Reinaldo Trindade',
    fundadorCargo: 'Founder & Chairman',
    fundadorCta: 'Meet the Founder',
    compromissoEyebrow: 'Commitment',
    compromissoTitle: 'A Vision of Growth with Purpose',
    fundacaoEyebrow: 'Social Arm',
    fundacaoTitle: 'Isaías Trindade Foundation',
    fundacaoDesc: 'Culture, education, health and environment: the Group’s social arm supports vulnerable communities, technical training for young people, an African cultural collection, and the preservation of Angolan cultural heritage.',
    fundacaoLink: 'Discover the Foundation',
    ctaFinalTitle: 'Want to Structure a Partnership with Grupo Mestres?',
    ctaFinalDesc: 'Our leadership is available to discuss investment opportunities and technical collaboration, with access to concessions, decades of partnerships, and local execution capacity.',
    ctaFinalBtn: 'Contact Us',
    areas: [
      { to: '/areas-de-negocio/engenharia-construcao-civil', label: 'Engineering & Civil Construction', desc: 'Public and private infrastructure, industrial projects, bridges and corporate representations in Angola.', image: engineeringConstruction },
      { to: '/areas-de-negocio/petroleo-gas', label: 'Oil & Gas', desc: 'Strategic partnerships with offshore operators and support to the Angolan oil sector.', image: oilgas },
      { to: '/areas-de-negocio/mineracao', label: 'Mining', desc: 'Concessions and exploration of gold, diamonds, limestone and quartz, run by Mestres Mineral Resources.', image: mining },
      { to: '/areas-de-negocio/agricola', label: 'Agriculture', desc: 'Livestock farming and vegetable production at Fazenda Ebbanus Britus, in Icolo e Bengo.', image: agroSoil },
      { to: '/areas-de-negocio/energia', label: 'Energy', desc: 'Energy infrastructure and industrial complexes under development for Angola’s future.', image: energyTowers },
    ],
    pilares: [
      { icon: TrendUp, title: 'Technical Excellence', desc: 'Rigorous execution in every project, from the first study to delivery.' },
      { icon: HandHeart, title: 'Social Responsibility', desc: 'Real human impact through the Isaías Trindade Foundation.' },
      { icon: Target, title: 'Long-Term Vision', desc: 'A structure built to scale, not for the next quarter.' },
    ],
  },
}

export default function Home() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src={construction} alt="" />
          <div className="hero-media-overlay" />
        </div>
        <div className="container hero-content">
          <Reveal className="eyebrow">{t.eyebrowHero}</Reveal>
          <Reveal as="h1" delay={80} className="hero-title">
            {t.heroTitle}
          </Reveal>
          <Reveal delay={160} className="hero-subtitle">
            <p>{t.heroSubtitle}</p>
          </Reveal>
          <Reveal delay={240} className="hero-actions">
            <Link to="/sobre-nos" className="btn btn-primary">
              {t.ctaPrimary} <ArrowRight size={17} weight="bold" />
            </Link>
            <Link to="/contactos" className="btn btn-outline btn-outline-dark">
              {t.ctaSecondary}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="stat-band bg-dark-texture">
        <div className="container">
          <StatBar />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.empresaEyebrow}</span>
            <h2>{t.empresaTitle}</h2>
            <p className="section-lede">{t.empresaLede}</p>
          </Reveal>

          <Reveal className="company-feature">
            <div className="company-feature-media">
              <img src={mining} alt="Operação de mineração no leste de Angola" />
            </div>
            <div className="company-feature-body">
              <h3>{t.mmrTitle}</h3>
              <p>{t.mmrDesc}</p>
              <Link to="/empresas-do-grupo" className="link-arrow">
                {t.mmrLink} <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt areas-home-section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.areasEyebrow}</span>
            <h2>{t.areasTitle}</h2>
            <p className="section-lede">{t.areasLede}</p>
          </Reveal>

          <div className="areas-grid">
            {t.areas.map((a, i) => (
              <Reveal key={a.to} delay={i * 90} className="area-card">
                <div className="area-card-media">
                  <img src={a.image} alt="" />
                </div>
                <div className="area-card-body">
                  <span className="area-card-tag">{t.tag}</span>
                  <h3>{a.label}</h3>
                  <p>{a.desc}</p>
                  <Link to={a.to} className="link-arrow">
                    {t.saberMais} <ArrowRight size={15} weight="bold" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt founder-home-section">
        <div className="container">
          <Reveal className="founder-teaser bg-dark-texture">
            <div className="founder-teaser-media">
              <img src={rt} alt={t.fundadorNome} />
            </div>
            <div className="founder-teaser-body">
              <Quotes size={24} weight="fill" className="founder-teaser-quote-icon" />
              <p className="founder-teaser-quote">{t.fundadorQuote}</p>
              <div className="founder-teaser-signature">
                <strong>{t.fundadorNome}</strong>
                <span>{t.fundadorCargo}</span>
              </div>
              <Link to="/sobre-nos" className="link-arrow founder-teaser-link">
                {t.fundadorCta} <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.compromissoEyebrow}</span>
            <h2>{t.compromissoTitle}</h2>
          </Reveal>
          <div className="pilares-grid">
            {t.pilares.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="pilar-card">
                <p.icon size={28} weight="light" className="pilar-icon" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="fundacao-band bg-dark-texture">
        <div className="container fundacao-band-inner">
          <Reveal as="div" className="fundacao-band-media">
            <img src={fundacaoLogo} alt="Fundação Isaías Trindade" />
          </Reveal>
          <Reveal as="div" delay={100} className="fundacao-band-body">
            <span className="eyebrow">{t.fundacaoEyebrow}</span>
            <h2>{t.fundacaoTitle}</h2>
            <p>{t.fundacaoDesc}</p>
            <Link to="/fundacao-isaias-trindade" className="btn btn-outline btn-outline-dark">
              {t.fundacaoLink}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container cta-final-inner">
          <Buildings size={32} weight="light" className="cta-final-icon" />
          <h2>{t.ctaFinalTitle}</h2>
          <p>{t.ctaFinalDesc}</p>
          <Link to="/contactos" className="btn btn-primary">
            {t.ctaFinalBtn} <ArrowRight size={17} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
