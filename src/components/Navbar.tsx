import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { List, X, CaretDown } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext'
import logo from '../assets/logos/gms-wordmark-white.png'
import flagPt from '../assets/flags/pt.png'
import flagEn from '../assets/flags/en.png'
import './Navbar.css'

const areasNegocio = [
  { to: '/areas-de-negocio/engenharia-construcao-civil', label: 'Engenharia & Construção Civil' },
  { to: '/areas-de-negocio/petroleo-gas', label: 'Petróleo & Gás' },
  { to: '/areas-de-negocio/mineracao', label: 'Mineração' },
  { to: '/areas-de-negocio/agricola', label: 'Agrícola' },
  { to: '/areas-de-negocio/energia', label: 'Energia' },
]

const labels = {
  pt: {
    inicio: 'Início',
    sobreNos: 'Sobre Nós',
    empresas: 'Empresas do Grupo',
    areas: 'Áreas de Negócio',
    visaoGeral: 'Visão Geral',
    governanca: 'Governança',
    fundacao: 'Fundação',
    contactos: 'Contactos',
  },
  en: {
    inicio: 'Home',
    sobreNos: 'About Us',
    empresas: 'Group Companies',
    areas: 'Business Areas',
    visaoGeral: 'Overview',
    governanca: 'Governance',
    fundacao: 'Foundation',
    contactos: 'Contact',
  },
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLLIElement | null>(null)
  const langRef = useRef<HTMLDivElement | null>(null)
  const { lang, setLang } = useLanguage()
  const t = labels[lang]

  useEffect(() => {
    setOpen(false)
    setAreasOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAreasOpen(false)
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Grupo Mestres & Serviços" />
        </Link>

        <nav className={`navbar-nav ${open ? 'is-open' : ''}`}>
          <ul className="navbar-list">
            <li><NavLink to="/" end className="navbar-link">{t.inicio}</NavLink></li>
            <li><NavLink to="/sobre-nos" className="navbar-link">{t.sobreNos}</NavLink></li>
            <li><NavLink to="/empresas-do-grupo" className="navbar-link">{t.empresas}</NavLink></li>

            <li className="navbar-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="navbar-link navbar-dropdown-trigger"
                onClick={() => setAreasOpen((v) => !v)}
                aria-expanded={areasOpen}
              >
                {t.areas}
                <CaretDown size={13} weight="bold" className={`caret ${areasOpen ? 'is-rotated' : ''}`} />
              </button>
              <ul className={`navbar-dropdown-menu ${areasOpen ? 'is-open' : ''}`}>
                <li>
                  <Link to="/areas-de-negocio" className="navbar-dropdown-item navbar-dropdown-item-index">
                    {t.visaoGeral}
                  </Link>
                </li>
                {areasNegocio.map((a) => (
                  <li key={a.to}>
                    <Link to={a.to} className="navbar-dropdown-item">{a.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* <li><NavLink to="/governanca" className="navbar-link">{t.governanca}</NavLink></li> */}
            <li>
              <NavLink to="/fundacao-isaias-trindade" className="navbar-link navbar-link-fundacao">
                {t.fundacao}
              </NavLink>
            </li>
            <li><NavLink to="/contactos" className="navbar-link navbar-link-cta">{t.contactos}</NavLink></li>
          </ul>
        </nav>

        <div className="navbar-right">
        <div className="navbar-lang" ref={langRef}>
          <button
            type="button"
            className="navbar-lang-trigger"
            onClick={() => setLangOpen((v) => !v)}
            aria-expanded={langOpen}
            aria-label="Escolher idioma / Choose language"
          >
            <img src={lang === 'pt' ? flagPt : flagEn} alt="" />
            <CaretDown size={11} weight="bold" className={`caret ${langOpen ? 'is-rotated' : ''}`} />
          </button>
          <ul className={`navbar-lang-menu ${langOpen ? 'is-open' : ''}`}>
            <li>
              <button type="button" className="navbar-lang-item" onClick={() => { setLang('pt'); setLangOpen(false) }}>
                <img src={flagPt} alt="" /> Português
              </button>
            </li>
            <li>
              <button type="button" className="navbar-lang-item" onClick={() => { setLang('en'); setLangOpen(false) }}>
                <img src={flagEn} alt="" /> English
              </button>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
        </div>
      </div>
    </header>
  )
}
