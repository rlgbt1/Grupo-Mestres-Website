import { Link } from 'react-router-dom'
import { ArrowLeft, Medal, Buildings, HandHeart } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import rt from '../assets/images/reinaldo-trindade.jpg'
import './Fundador.css'

const copy = {
  pt: {
    eyebrow: 'Sobre Nós',
    title: 'Eng. Reinaldo Trindade',
    subtitle: 'Fundador & CEO do Grupo Mestres & Serviços',
    back: 'Voltar a Sobre Nós',
    p1: 'Com mais de 35 anos de actuação ao serviço do desenvolvimento económico, social e institucional de Angola, o Eng. Reinaldo Trindade fundou o Grupo Mestres & Serviços em 1991, dando início a uma trajectória empresarial diversificada que hoje se estende à engenharia, energia, agricultura e recursos minerais.',
    p2: 'Para além do Grupo Mestres, integra a liderança de outras empresas angolanas, incluindo a Angola Fire & Safety (SAF3), na área de segurança industrial, a Trans Hex Angola, no sector diamantífero, e a Harmonia Seguros, uma seguradora co-fundada em 2024.',
    cargosTitle: 'Posições Institucionais',
    cargos: [
      'Presidente da Fundação Isaías Trindade, desde 2016',
      'Presidente da Câmara de Comércio e Indústria Hispano-Americana Angolana (CCIHA), desde 2016',
      'Presidente da Mesa da Assembleia da Federação das Câmaras Bilaterais de Comércio e Indústria de Angola, desde Julho de 2024',
      'Cônsul Honorário dos Estados Unidos Mexicanos na República de Angola, desde 2012',
    ],
    reconhecimentosTitle: 'Reconhecimentos',
    reconhecimentos: [
      '"Global Leader for Tomorrow", Fórum Económico Mundial, Davos, 2001',
      'Convidado da Clinton Global Initiative, em 2008 e 2010',
    ],
    formacaoTitle: 'Formação',
    formacao: 'Licenciatura em Engenharia de Automação, Universidade Técnica de Ilmenau, Alemanha (1988).',
  },
  en: {
    eyebrow: 'About Us',
    title: 'Eng. Reinaldo Trindade',
    subtitle: 'Founder & Chairman of Grupo Mestres & Serviços',
    back: 'Back to About Us',
    p1: 'With more than 35 years serving Angola’s economic, social and institutional development, Eng. Reinaldo Trindade founded Grupo Mestres & Serviços in 1991, launching a diversified business trajectory that today spans engineering, energy, agriculture and mineral resources.',
    p2: 'Beyond Grupo Mestres, he sits on the leadership of other Angolan companies, including Angola Fire & Safety (SAF3), in industrial safety, Trans Hex Angola, in the diamond sector, and Harmonia Seguros, an insurer co-founded in 2024.',
    cargosTitle: 'Institutional Positions',
    cargos: [
      'Chairman of the Isaías Trindade Foundation, since 2016',
      'Chairman of the Angolan Hispanic-American Chamber of Commerce and Industry (CCIHA), since 2016',
      'Chairman of the Assembly Board of the Federation of Bilateral Chambers of Commerce and Industry of Angola, since July 2024',
      'Honorary Consul of the United Mexican States in the Republic of Angola, since 2012',
    ],
    reconhecimentosTitle: 'Recognitions',
    reconhecimentos: [
      '"Global Leader for Tomorrow", World Economic Forum, Davos, 2001',
      'Guest of the Clinton Global Initiative, in 2008 and 2010',
    ],
    formacaoTitle: 'Education',
    formacao: 'Degree in Automation Engineering, Technical University of Ilmenau, Germany (1988).',
  },
}

export default function Fundador() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title}>
        <p>{t.subtitle}</p>
      </PageHero>

      <section className="section">
        <div className="container fundador-page">
          <Link to="/sobre-nos" className="link-arrow fundador-back">
            <ArrowLeft size={15} weight="bold" /> {t.back}
          </Link>

          <div className="fundador-page-grid">
            <Reveal as="div" className="fundador-page-media">
              <img src={rt} alt={t.title} />
            </Reveal>

            <Reveal as="div" delay={100} className="fundador-page-body">
              <p>{t.p1}</p>
              <p>{t.p2}</p>

              <div className="fundador-block">
                <Buildings size={22} weight="light" className="fundador-block-icon" />
                <h3>{t.cargosTitle}</h3>
                <ul>
                  {t.cargos.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="fundador-block">
                <Medal size={22} weight="light" className="fundador-block-icon" />
                <h3>{t.reconhecimentosTitle}</h3>
                <ul>
                  {t.reconhecimentos.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="fundador-block">
                <HandHeart size={22} weight="light" className="fundador-block-icon" />
                <h3>{t.formacaoTitle}</h3>
                <p>{t.formacao}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
