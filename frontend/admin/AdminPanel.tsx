
import { Link } from "react-router-dom"


export const AdminPanel = () => {
    return (
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="text-center">
                        <h2>Ir a regiones</h2>
                        <button type="button" className="btn btn-info">
                            <Link className="nav-link" to="/admin/regiones" >Regiones</Link>
                        </button>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="text-center">
                        <h2>Ir a Universidades</h2>
                        <button type="button" className="btn btn-info">
                            <Link className="nav-link" to="/admin/universidades" >Universidades</Link>
                        </button>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="text-center">
                        <h2>Ir a Detalles</h2>
                        <button type="button" className="btn btn-info">
                            <Link className="nav-link " to="/admin/detalles-universidades" >Detalles Universiades</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
