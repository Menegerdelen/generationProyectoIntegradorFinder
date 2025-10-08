

import { miembrosData } from '../../components/QSComponents/data/Miembros.data'
import { SectionCard } from '../../components/QSComponents/SectionCard'
import'./quiensomos.css'

export const QuienesSomos = () => {
    return (
        <>
                <section id="misionvision" className="container my-5">
                    <div id="titulo"className="text-center my-2">
                                <h1 className="fw-bold">¿Quienes somos?</h1>
                            </div>

                            <div className="row gap-2 justify-content-center">
                                <div className="col-12 col-md-5">
                                    <div className="card colorPrimario text-light h-100">
                                        <div className="card-body">
                                            <div id="mision">
                                                <h2 className="fw-bold text-center">Misión</h2>
                                                <p>Nuestra misión es generar un cambio para los futuros estudiantes de Educación Superior en Chile, entregándoles la información necesaria y oportuna, para que puedan tomar decisiones informadas de su futuro.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-5">
                                    <div className="card colorPrimario text-light h-100">
                                        <div className="card-body">
                                            <div id="vision">
                                                <h2 className="fw-bold text-center">Visión</h2>
                                                <p>Ser la página de referencia líder para futuros estudiantes de educación superior en Chile, de esa manera, contribuyendo a un Chile más informado.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </section>

                <section id="quienSomos" className="container my-5">
                    <div className="equipo text-center">
                        <h1 className="fw-bold">Nuestro equipo!</h1>
                    </div>
                    <div className="row g-4 text-center justify-content-center">
                        < SectionCard members={ miembrosData } />
                    </div>
                </section>
        </>
    )
    }
