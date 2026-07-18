import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <main>
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
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </LanguageProvider>
  )
}

export default App
