import { Routes, Route } from "react-router-dom"
import { useLocation } from "react-router-dom"

// Pages
import { AvisoLegal } from "./pages/AvisoLegal.jsx"
import { Home } from "./pages/Home.jsx"
import { PoliticaPrivacidad } from "./pages/PoliticaPrivacidad.jsx"
import { PoliticaCookies } from "./pages/PoliticaCookies.jsx"

// Components
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { Navbar } from "./components/Navbar.jsx"

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome ? <Header /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad/>}/>
        <Route path="/politica-cookies" element={<PoliticaCookies/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
