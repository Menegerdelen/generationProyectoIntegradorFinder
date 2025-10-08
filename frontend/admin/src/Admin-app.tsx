
import { BrowserRouter as Routes, Route } from 'react-router-dom'

import '../../src/App.css'
import { LoginPage } from './LoginPage'
import { AdminNavbar } from './components/AdminNavbar/AdminNavbar'
import { UniAdmin } from './pages/UniversidadAdmin/UniAdmin'
import { RegAdmin } from './pages/RegionesADmin/RegAdmin'
import { DetAdmin } from './pages/DetallesAdmin/DetAdmin'

export const Admin = () => {
    return (
        <>
            <AdminNavbar/>
            <main>
                <Routes>
                    <Route path='login' element={ <LoginPage /> } />
                    <Route path='regiones' element={ <RegAdmin/> } />
                    <Route path='universidades' element={ <UniAdmin/> } />
                    <Route path='detalles-universidades' element={ <DetAdmin/> } />
                </Routes>
            </main>
        </>
    )
}
