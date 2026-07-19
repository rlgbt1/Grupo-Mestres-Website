import { Link } from 'react-router-dom'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Buildings, Quotes, ArrowRight, TrendUp, UsersThree, Handshake, Flag } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import rt from '../assets/images/reinaldo-trindade.jpg'
import './SobreNos.css'

const copy = {
  pt: {
    eyebrow: 'Sobre Nós',
    heroTitle: '35 Anos ao Serviço do Desenvolvimento de Angola',
    heroBody: 'Do primeiro projecto de serviços técnicos, em 1991, ao grupo estruturado de hoje: uma trajectória construída sobre rigor de execução e compromisso com o país.',
    historiaEyebrow: 'Nossa História',
    historiaTitle: 'De Projecto Técnico a Holding Empresarial',
    historiaP1: 'O Grupo Mestres & Serviços nasceu em 1991, pela mão do Eng. Reinaldo Trindade, como um projecto dedicado a serviços técnicos especializados. Ao longo de mais de três décadas, consolidou-se como agente activo no fortalecimento do sector privado angolano, participando na modernização de infraestruturas e na dinamização da economia nacional.',
    historiaP2: 'Hoje o Grupo atravessa uma nova fase: um reposicionamento estratégico que o transforma numa holding empresarial moderna, organizada em torno de sectores-chave da economia angolana e de uma fundação social própria. Actuamos como o parceiro local de confiança para investidores estrangeiros e empresas estratégicas que procuram operar em Angola, com acesso a concessões, uma rede de parcerias de décadas e capacidade de execução no terreno.',
    fundacaoAno: '1991',
    fundacaoLegenda: 'Ano de Fundação, em Luanda',
    jornadaEyebrow: 'Nossa Trajectória',
    jornadaTitle: 'Nossa Jornada',
    jornadaLede: 'Da fundação do Grupo aos projectos que definem a sua actuação actual, numa sequência de marcos que resumem uma trajectória sólida.',
    visaoMissaoEyebrow1: 'Visão',
    visaoTexto: 'Tornar o Grupo Mestres uma holding de referência nacional e africana, reconhecida pela excelência técnica, responsabilidade social e capacidade de inovação em sectores estratégicos para o desenvolvimento sustentável de Angola.',
    visaoMissaoEyebrow2: 'Missão',
    missaoTitle: 'O Que Nos Move:',
    missao: [
      'Criação de valor económico e social nas comunidades onde operamos',
      'Geração de emprego qualificado e valorização do capital humano nacional',
      'Confiança consistente junto de investidores e parceiros estratégicos',
      'Alinhamento directo com as metas de desenvolvimento nacional de Angola',
    ],
    fundadorQuote: 'Construímos o Grupo Mestres passo a passo, sector a sector, sempre com a mesma convicção: Angola cresce quando as suas próprias empresas assumem a responsabilidade de a construir.',
    fundadorNome: 'Eng. Reinaldo Trindade',
    fundadorCargo: 'Fundador & CEO',
    saibaMais: 'Saiba Mais Sobre o Fundador',
    novaFaseTitle: 'Uma Nova Fase Estratégica',
    novaFaseBody: 'O reposicionamento do Grupo Mestres consolida uma estrutura de governança com órgãos sociais claros, departamentos funcionais transversais e áreas de negócio com responsabilidades definidas, criando as condições para atrair parceiros, investidores e talento de forma sustentada.',
  },
  en: {
    eyebrow: 'About Us',
    heroTitle: '35 Years Serving Angola’s Development',
    heroBody: 'From the first technical services project, in 1991, to the structured holding of today: a trajectory built on rigorous execution and commitment to the country.',
    historiaEyebrow: 'Our Story',
    historiaTitle: 'From Technical Project to Business Holding',
    historiaP1: 'Grupo Mestres & Serviços was founded in 1991 by Eng. Reinaldo Trindade, as a project dedicated to specialised technical services. Over more than three decades, it established itself as an active agent in strengthening the Angolan private sector, participating in the modernisation of infrastructure and the dynamisation of the national economy.',
    historiaP2: 'Today the Group is going through a new phase: a strategic repositioning that transforms it into a modern business holding, organised around key sectors of the Angolan economy and its own social foundation. We act as the trusted local partner for foreign investors and strategic companies looking to operate in Angola, with access to concessions, a network of decades-long partnerships, and on-the-ground execution capacity.',
    fundacaoAno: '1991',
    fundacaoLegenda: 'Year Founded, in Luanda',
    jornadaEyebrow: 'Our Trajectory',
    jornadaTitle: 'Our Journey',
    jornadaLede: 'From the founding of the Group to the projects that define its current activity, through a sequence of milestones that summarise a solid trajectory.',
    visaoMissaoEyebrow1: 'Vision',
    visaoTexto: 'To make Grupo Mestres a holding of national and African reference, recognised for technical excellence, social responsibility and innovation capacity in sectors strategic to Angola’s sustainable development.',
    visaoMissaoEyebrow2: 'Mission',
    missaoTitle: 'What Drives Us:',
    missao: [
      'Creating economic and social value in the communities where we operate',
      'Generating qualified employment and valuing national human capital',
      'Consistent trust from investors and strategic partners',
      'Direct alignment with Angola’s national development goals',
    ],
    fundadorQuote: 'We built Grupo Mestres step by step, sector by sector, always with the same conviction: Angola grows when its own companies take responsibility for building it.',
    fundadorNome: 'Eng. Reinaldo Trindade',
    fundadorCargo: 'Founder & Chairman',
    saibaMais: 'Learn More About the Founder',
    novaFaseTitle: 'A New Strategic Phase',
    novaFaseBody: 'The repositioning of Grupo Mestres consolidates a governance structure with clear governing bodies, transversal functional departments and business areas with defined responsibilities, creating the conditions to attract partners, investors and talent sustainably.',
  },
}

const timeline = {
  pt: [
    { year: '1991', title: 'Fundação', desc: 'Fundação do Grupo Mestres & Serviços, estabelecendo as bases de uma empresa angolana dedicada ao desenvolvimento de soluções empresariais e de engenharia.', founding: true },
    { year: '1995', title: 'Construção', desc: 'Sub-empreiteiro da Habitar no condomínio dos deputados de Angola; obras em Cabinda e importação de alimentos.' },
    { year: '2001', title: 'Reconhecimento Internacional', desc: 'O Chairman é distinguido como "Global Leader for Tomorrow" no Fórum Económico Mundial, em Davos. O Grupo assume a representação da General Motors para a EMD, fornecendo carruagens ao CFL e abrindo caminho para parcerias com empresas como ES-KO Group e Huawei.' },
    { year: '2006', title: 'Sonangol E.P. e P&P', desc: 'Execução de trabalhos de manutenção e conservação de infraestruturas para a Sonangol E.P., incluindo intervenções no Edifício Gika.' },
    { year: '2012', title: 'Protocolo com a Huawei', desc: 'Protocolo de cooperação para o desenvolvimento de iniciativas tecnológicas e infraestruturas de data center.' },
    { year: '2014', title: 'Fundação Isaías Trindade', desc: 'Registo legal e início de actividade do braço social do Grupo.' },
    { year: '2016', title: 'Engenharia Civil', desc: 'Construção de redes de abastecimento de água no Uíge, com captação por furos artesianos e distribuição por chafariz.' },
    { year: '2023', title: 'Entrada no Sector Mineiro', desc: 'Entrada do Grupo Mestres no sector mineiro e constituição de outras empresas pertencentes ao Grupo.' },
    { year: '2026+', title: 'Uma Jornada Consolidada', desc: 'Projectos industriais e energéticos em curso, numa trajectória de transformação e progresso.' },
  ],
  en: [
    { year: '1991', title: 'Foundation', desc: 'Foundation of Grupo Mestres & Serviços, establishing the base of an Angolan company dedicated to developing business and engineering solutions.', founding: true },
    { year: '1995', title: 'Construction', desc: 'Subcontractor to Habitar on the parliamentary members’ housing complex in Angola; works in Cabinda and food imports.' },
    { year: '2001', title: 'International Recognition', desc: 'The Chairman is named "Global Leader for Tomorrow" at the World Economic Forum, in Davos. The Group takes on the representation of General Motors for EMD, supplying railcars to CFL and opening the way for partnerships with companies such as ES-KO Group and Huawei.' },
    { year: '2006', title: 'Sonangol E.P. and P&P', desc: 'Execution of infrastructure maintenance and conservation works for Sonangol E.P., including interventions at the Gika Building.' },
    { year: '2012', title: 'Huawei Protocol', desc: 'Cooperation protocol for the development of technological initiatives and data center infrastructure.' },
    { year: '2014', title: 'Isaías Trindade Foundation', desc: 'Legal registration and start of activity of the Group’s social arm.' },
    { year: '2016', title: 'Civil Engineering', desc: 'Construction of water supply networks in Uíge, with artesian borehole abstraction and public fountain distribution.' },
    { year: '2023', title: 'Entry into Mining', desc: 'Grupo Mestres enters the mining sector and incorporates other companies belonging to the Group.' },
    { year: '2026+', title: 'A Consolidated Journey', desc: 'Industrial and energy projects under way, on a trajectory of transformation and progress.' },
  ],
}

function useTimelineProgress(itemCount: number) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [state, setState] = useState({
    activeIndex: 0,
    lineHeight: 0,
    lineStart: 14,
    lineTotal: 0,
  })

  useEffect(() => {
    const update = () => {
      const node = ref.current
      if (!node) return

      const rect = node.getBoundingClientRect()
      const dots = Array.from(node.querySelectorAll<HTMLElement>('.timeline-dot'))
      if (dots.length === 0) return

      const centers = dots.map((dot) => {
        const dotRect = dot.getBoundingClientRect()
        return dotRect.top - rect.top + dotRect.height / 2
      })
      const first = centers[0]
      const last = centers[centers.length - 1]
      const distance = Math.max(1, last - first)
      const viewportAnchor = window.innerHeight * 0.48
      const raw = (viewportAnchor - (rect.top + first)) / distance
      const progress = Math.min(1, Math.max(0, raw))
      const progressTop = first + progress * distance
      const activeIndex = centers.reduce((current, center, index) => (center <= progressTop + 1 ? index : current), 0)

      setState({
        activeIndex,
        lineHeight: Math.max(0, progressTop - first),
        lineStart: first,
        lineTotal: distance,
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [itemCount])

  return { ref, ...state }
}

export default function SobreNos() {
  const { lang } = useLanguage()
  const t = copy[lang]
  usePageMeta(t.heroTitle, t.heroBody)
  const jornada = timeline[lang]
  const {
    activeIndex: timelineActiveIndex,
    lineHeight: timelineLineHeight,
    lineStart: timelineLineStart,
    lineTotal: timelineLineTotal,
    ref: timelineRef,
  } = useTimelineProgress(jornada.length)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.heroTitle}>
        <p>{t.heroBody}</p>
      </PageHero>

      <section className="section">
        <div className="container">
          <Reveal className="fundador-card">
            <div className="fundador-media">
              <img src={rt} alt="Eng. Reinaldo Trindade, Fundador e Presidente do Grupo Mestres" loading="lazy" />
            </div>
            <div className="fundador-body">
              <Quotes size={32} weight="fill" className="fundador-quote-icon" />
              <p className="fundador-quote">{t.fundadorQuote}</p>
              <div className="fundador-signature">
                <strong>{t.fundadorNome}</strong>
                <span>{t.fundadorCargo}</span>
              </div>
              <Link to="/sobre-nos/fundador" className="link-arrow fundador-link">
                {t.saibaMais} <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container historia-grid">
          <Reveal as="div" className="historia-body">
            <span className="eyebrow eyebrow-dark">{t.historiaEyebrow}</span>
            <h2>{t.historiaTitle}</h2>
            <p>{t.historiaP1}</p>
            <p>{t.historiaP2}</p>
          </Reveal>
          <Reveal as="div" delay={100} className="historia-media">
            <div className="historia-stat">
              <div className="historia-year">
                <span>{t.fundacaoAno}</span>
                <p>{t.fundacaoLegenda}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt jornada-section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.jornadaEyebrow}</span>
            <h2>{t.jornadaTitle}</h2>
            <p className="section-lede">{t.jornadaLede}</p>
          </Reveal>

          <div
            ref={timelineRef}
            className="timeline-frame"
            style={{
              '--timeline-line-height': `${timelineLineHeight}px`,
              '--timeline-line-start': `${timelineLineStart}px`,
              '--timeline-line-total': `${timelineLineTotal}px`,
            } as CSSProperties}
          >
            <ol className="timeline">
              {jornada.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.year}
                  delay={i * 70}
                  className={`timeline-item ${item.founding ? 'timeline-item-founding' : ''} ${i <= timelineActiveIndex ? 'timeline-item-passed' : ''} ${i === timelineActiveIndex ? 'timeline-item-current' : ''}`}
                >
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section visao-band bg-dark-texture">
        <div className="container">
          <Reveal className="visao-statement">
            <Quotes size={40} weight="fill" className="visao-quote-mark" />
            <span className="eyebrow">{t.visaoMissaoEyebrow1}</span>
            <p className="visao-text">{t.visaoTexto}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow eyebrow-dark">{t.visaoMissaoEyebrow2}</span>
            <h2>{t.missaoTitle}</h2>
          </Reveal>
          <div className="missao-grid">
            {t.missao.map((m, i) => {
              const Icon = [TrendUp, UsersThree, Handshake, Flag][i]
              return (
                <Reveal key={m} delay={i * 80} className="card missao-item">
                  <Icon size={24} weight="light" className="missao-item-icon" />
                  <p>{m}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt nova-fase">
        <div className="container nova-fase-inner">
          <Buildings size={30} weight="light" className="nova-fase-icon" />
          <h2>{t.novaFaseTitle}</h2>
          <p>{t.novaFaseBody}</p>
        </div>
      </section>
    </>
  )
}
