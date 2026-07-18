import { Buildings, Target, UsersThree, Briefcase } from '@phosphor-icons/react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import './Governanca.css'

const copy = {
  pt: {
    eyebrow: 'Governança',
    title: 'Uma Estrutura Pensada para Escalar com Transparência',
    intro: 'O modelo de governança do Grupo Mestres organiza a responsabilidade estratégica e operacional em níveis claros, apoiados por departamentos funcionais transversais.',
    support: 'Suporte Transversal',
    departmentsTitle: 'Departamentos Funcionais',
    levels: [
      { icon: Buildings, title: 'Conselho de Administração', desc: 'Chairman e membros do Conselho, executivos e não-executivos, com responsabilidade estratégica.' },
      { icon: Target, title: 'Direcção Executiva', desc: 'CEO, COO e CFO, apoiados por um Conselho Consultivo independente.' },
      { icon: UsersThree, title: 'Líderes de Áreas de Negócio', desc: 'Management Directors responsáveis por cada vertical do Grupo.' },
      { icon: Briefcase, title: 'Directores de Empresa e Projecto', desc: 'Direcção operacional, apoiada por um conjunto de PMEs e consultores especializados.' },
    ],
    departments: ['Jurídico', 'Financeiro', 'Operações', 'Recursos Humanos', 'Tecnologia'],
  },
  en: {
    eyebrow: 'Governance',
    title: 'A Structure Designed to Scale with Transparency',
    intro: 'Grupo Mestres’ governance model organises strategic and operational responsibility into clear levels, supported by transversal functional departments.',
    support: 'Transversal Support',
    departmentsTitle: 'Functional Departments',
    levels: [
      { icon: Buildings, title: 'Board of Directors', desc: 'Chairman and Board members, executive and non-executive, with strategic responsibility.' },
      { icon: Target, title: 'Executive Management', desc: 'CEO, COO and CFO, supported by an independent Advisory Board.' },
      { icon: UsersThree, title: 'Business Area Leaders', desc: 'Management Directors responsible for each Group vertical.' },
      { icon: Briefcase, title: 'Company and Project Directors', desc: 'Operational management, supported by SMEs and specialised consultants.' },
    ],
    departments: ['Legal', 'Finance', 'Operations', 'Human Resources', 'Technology'],
  },
}

export default function Governanca() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="orgchart">
            {t.levels.map((n, i) => (
              <div key={n.title} className="orgchart-row">
                <Reveal delay={i * 90} className="orgchart-node">
                  <span className="orgchart-index">{String(i + 1).padStart(2, '0')}</span>
                  <n.icon size={24} weight="light" className="orgchart-icon" />
                  <div>
                    <h3>{n.title}</h3>
                    <p>{n.desc}</p>
                  </div>
                </Reveal>
                {i < t.levels.length - 1 && <div className="orgchart-connector" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <Reveal className="departamentos-band">
            <span className="eyebrow eyebrow-dark">{t.support}</span>
            <h2>{t.departmentsTitle}</h2>
            <ul className="departamentos-list">
              {t.departments.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  )
}
