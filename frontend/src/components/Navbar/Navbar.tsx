
import { Link } from 'react-router-dom'
import logoNav from "../../assets/img/logosFinder/logoFinder.png"
import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg colorPrimario" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand fw-bold tituloNav" to="/">
                        <img src={ logoNav } alt="" className="logoNav"/>
                    FINDER</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/baes" >BAES</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/tne" >TNE</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " to="/mapa" >Mapa</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " to="/quien-somos" >Quien Somos</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " to="/admin/login" >Ingreso Admin</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
