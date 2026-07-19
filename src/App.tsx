import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import Fundador from './pages/Fundador'
import EmpresasDoGrupo from './pages/EmpresasDoGrupo'
import AreasNegocioIndex from './pages/AreasNegocioIndex'
import EngenhariaConstrucao from './pages/EngenhariaConstrucao'
import PetroleoGas from './pages/PetroleoGas'
import Mineracao from './pages/Mineracao'
import Agricola from './pages/Agricola'
import Energia from './pages/Energia'
// Governança page temporarily hidden — route disabled below, file kept for later re-enable
// import Governanca from './pages/Governanca'
import Fundacao from './pages/Fundacao'
import Contactos from './pages/Contactos'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  const isFirstRender = useRef(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    // Skip focus-management on the very first mount so the initial Tab press
    // reaches the skip link, not #main-content — only move focus on actual
    // client-side route changes, where there's no page reload to reset it.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname])
  return null
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <a href="#main-content" className="skip-link">Saltar para o conteúdo principal / Skip to main content</a>
        <ScrollToTop />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/sobre-nos/fundador" element={<Fundador />} />
            <Route path="/empresas-do-grupo" element={<EmpresasDoGrupo />} />
            <Route path="/areas-de-negocio" element={<AreasNegocioIndex />} />
            <Route path="/areas-de-negocio/engenharia-construcao-civil" element={<EngenhariaConstrucao />} />
            <Route path="/areas-de-negocio/petroleo-gas" element={<PetroleoGas />} />
            <Route path="/areas-de-negocio/mineracao" element={<Mineracao />} />
            <Route path="/areas-de-negocio/agricola" element={<Agricola />} />
            <Route path="/areas-de-negocio/energia" element={<Energia />} />
            {/* <Route path="/governanca" element={<Governanca />} /> */}
            <Route path="/fundacao-isaias-trindade" element={<Fundacao />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
