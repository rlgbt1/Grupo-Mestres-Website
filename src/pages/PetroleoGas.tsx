import { Handshake } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import oilgas from '../assets/images/oilgas.jpg'
import refineryNight from '../assets/images/refinery-night.jpg'
import './AreaOverview.css'

const copy = {
  pt: {
    eyebrow: 'Área de Actuação',
    title: 'Petróleo & Gás',
    intro: 'Parceiro local de confiança para operadores e investidores do sector petrolífero angolano.',
    oilAlt: 'Plataforma offshore de operações de petróleo e gás',
    refineryAlt: 'Complexo industrial do sector petrolífero',
    overview: 'Visão Geral',
    heading: 'Parcerias Estratégicas no Sector Energético',
    body: 'O Grupo Mestres actua no sector de petróleo e gás através de parcerias estratégicas com operadores estabelecidos no mercado angolano, prestando apoio logístico e técnico a actividades offshore. Esta é uma das frentes onde o Grupo se posiciona como o parceiro local de confiança para empresas estrangeiras que procuram operar em Angola.',
    how: 'Como Operamos',
    partnerships: 'Parcerias Estratégicas',
    cardTitle: 'Colaboração com Operadores Offshore',
    cardBody: 'Apoio logístico e técnico a operadores do sector petrolífero, com uma rede de relações construída ao longo de mais de três décadas de actuação em Angola.',
  },
  en: {
    eyebrow: 'Business Area',
    title: 'Oil & Gas',
    intro: 'A trusted local partner for operators and investors in Angola’s oil sector.',
    oilAlt: 'Offshore oil and gas operations platform',
    refineryAlt: 'Industrial complex in the oil sector',
    overview: 'Overview',
    heading: 'Strategic Partnerships in the Energy Sector',
    body: 'Grupo Mestres operates in oil and gas through strategic partnerships with established operators in the Angolan market, providing logistical and technical support for offshore activities. This is one of the fronts where the Group positions itself as the trusted local partner for foreign companies looking to operate in Angola.',
    how: 'How We Operate',
    partnerships: 'Strategic Partnerships',
    cardTitle: 'Collaboration with Offshore Operators',
    cardBody: 'Logistical and technical support for oil sector operators, backed by a relationship network built over more than three decades of activity in Angola.',
  },
}

export default function PetroleoGas() {
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
            <img src={oilgas} alt={t.oilAlt} />
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
            <span className="eyebrow eyebrow-dark">{t.how}</span>
            <h2>{t.partnerships}</h2>
          </Reveal>
          <div className="frentes-grid frentes-grid-single">
            <Reveal className="frente-card">
              <Handshake size={26} weight="light" className="frente-icon" />
              <h3>{t.cardTitle}</h3>
              <p>{t.cardBody}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="area-overview-media area-overview-media-wide">
            <img src={refineryNight} alt={t.refineryAlt} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
