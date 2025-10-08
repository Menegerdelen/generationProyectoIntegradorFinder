

import { Link, useNavigate } from 'react-router-dom'
import logoNav from '../../../../src/assets/img/logosFinder/logoFinder.png'
import './admin.navbar.css'

export const AdminNavbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/admin/login");
    };

    return (
        <nav className="navbar navbar-expand-lg colorPrimario" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand fw-bold tituloNav" to="/admin/panel">
                        <img src={ logoNav } alt="" className="logoNav"/>
                    FINDER ADMIN PANEL</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/admin/panel">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/admin/regiones" >Regiones</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/admin/universidades" >Universidades</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " to="/admin/detalles-universidades" >Detalles Universiades</Link>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn btn-outline-light ms-3"
                            onClick={handleLogout}
                        >
                            Cerrar sesión
                        </button>
                    </li>

                </ul>
                </div>
            </div>
        </nav>
    )
}

