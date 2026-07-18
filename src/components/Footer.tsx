import { Link } from 'react-router-dom'
import { LinkedinLogo, EnvelopeSimple, MapPin } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext'
import logo from '../assets/logos/gms-wordmark-white.png'
import './Footer.css'

const copy = {
  pt: {
    tagline: 'Grupo empresarial angolano com 35 anos de história, a estruturar sectores estratégicos para o desenvolvimento sustentável de Angola.',
    grupo: 'Grupo',
    sobreNos: 'Sobre Nós',
    empresas: 'Empresas do Grupo',
    governanca: 'Governança',
    fundacao: 'Fundação Isaías Trindade',
    areas: 'Áreas de Negócio',
    engenharia: 'Engenharia & Construção Civil',
    petroleo: 'Petróleo & Gás',
    mineracao: 'Mineração',
    agricola: 'Agrícola',
    energia: 'Energia',
    contacto: 'Contacto',
    fale: 'Fale Connosco',
    rights: 'Todos os direitos reservados.',
  },
  en: {
    tagline: 'An Angolan business group with 35 years of history, structuring strategic sectors for the sustainable development of Angola.',
    grupo: 'Group',
    sobreNos: 'About Us',
    empresas: 'Group Companies',
    governanca: 'Governance',
    fundacao: 'Isaías Trindade Foundation',
    areas: 'Business Areas',
    engenharia: 'Engineering & Civil Construction',
    petroleo: 'Oil & Gas',
    mineracao: 'Mining',
    agricola: 'Agriculture',
    energia: 'Energy',
    contacto: 'Contact',
    fale: 'Get in Touch',
    rights: 'All rights reserved.',
  },
}

export default function Footer() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <footer className="footer bg-dark-texture">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Grupo Mestres & Serviços" />
          <p>{t.tagline}</p>
          <a
            className="footer-social"
            href="https://www.linkedin.com/company/grupo-mestres-servi%C3%A7os/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Grupo Mestres & Serviços no LinkedIn"
          >
            <LinkedinLogo size={20} weight="fill" />
          </a>
        </div>

        <nav className="footer-col">
          <h4>{t.grupo}</h4>
          <Link to="/sobre-nos">{t.sobreNos}</Link>
          <Link to="/empresas-do-grupo">{t.empresas}</Link>
          {/* <Link to="/governanca">{t.governanca}</Link> */}
          <Link to="/fundacao-isaias-trindade">{t.fundacao}</Link>
        </nav>

        <nav className="footer-col">
          <h4>{t.areas}</h4>
          <Link to="/areas-de-negocio/engenharia-construcao-civil">{t.engenharia}</Link>
          <Link to="/areas-de-negocio/petroleo-gas">{t.petroleo}</Link>
          <Link to="/areas-de-negocio/mineracao">{t.mineracao}</Link>
          <Link to="/areas-de-negocio/agricola">{t.agricola}</Link>
          <Link to="/areas-de-negocio/energia">{t.energia}</Link>
        </nav>

        <div className="footer-col">
          <h4>{t.contacto}</h4>
          <a href="mailto:info@grupomestres.com" className="footer-contact-line">
            <EnvelopeSimple size={16} />
            info@grupomestres.com
          </a>
          <span className="footer-contact-line">
            <MapPin size={16} />
            Rua Comandante Gika, 191, R/C, Alvalade, Luanda
          </span>
          <Link to="/contactos" className="footer-cta">{t.fale}</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Grupo Mestres & Serviços. {t.rights}</span>
        <span>www.grupomestres.com</span>
      </div>
    </footer>
  )
}
