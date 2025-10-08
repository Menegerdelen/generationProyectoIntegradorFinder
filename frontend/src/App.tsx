
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// import { Footer } from './components/Footer/Footer'
// import { Navbar } from './components/Navbar/Navbar'

// Import de paginas
import { Inicio } from './pages/Index/Inicio'
import { BAES } from './pages/Baes/Baes'
import { TNE } from './pages/TNE/TNE'
import { QuienesSomos } from './pages/QuienSomos/QuienesSomos'
import { Mapa } from './pages/MapaUniversidades/Mapa'
import { ListadoUniversidadesPorRegion } from './components/MapaComponents/ListadoUniversidades'
import { LoginPage } from '../admin/src/LoginPage'
import { AdminPanel } from '../admin/AdminPanel'
import { RegAdmin } from '../admin/src/pages/RegionesADmin/RegAdmin'
import { UniAdmin } from '../admin/src/pages/UniversidadAdmin/UniAdmin'
import { DetAdmin } from '../admin/src/pages/DetallesAdmin/DetAdmin'
import { PaginaLayout } from './PaginaLayout'
import { AdminLayout } from './AdminLayout'




function App() {

  return (
    <Router>

          <Routes>
            <Route element={ <PaginaLayout/> }>
              <Route path='/' element={ <Inicio /> } />
              <Route path='baes' element={ <BAES/> } />
              <Route path='tne' element={ <TNE/> } />
              <Route path='quien-somos' element={ <QuienesSomos/> } />
              <Route path='mapa' element={ <Mapa/> } />
              <Route path="universidades/region/:id_region" element={<ListadoUniversidadesPorRegion />} />
              <Route path='admin/login' element={ <LoginPage/> } />
            </Route>
            
            <Route path='admin' element={ <AdminLayout/> }>
              <Route path='panel' element={<AdminPanel/>} />
              <Route path='regiones' element={ <RegAdmin/> } />
              <Route path='universidades' element={ <UniAdmin/> } />
              <Route path='detalles-universidades' element={ <DetAdmin/> } />
            </Route>

          </Routes>

    </Router>
  )
}

export default App
