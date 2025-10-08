
import videoTNE  from '../../../assets/img/tne/video_tne.mp4'



export const Informacion = () => {
    return (
        <section id="sec-info-importante" className="mt-5">
            <div className="container">
                <h4
                    className="text-center mb-4"
                    style={{ color: "#000000ff", fontSize: "2rem" }}
                >
                    Información Importante sobre TNE 2025
                </h4>
                
                {/* Esta fila contendrá las 3 tarjetas en 3 columnas */}
                <div className="row g-4">
                    {/* Tarjeta 1: ¿Qué es la TNE? (col-md-4) */}
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">¿Qué es la TNE?</h5>
                                <p className="card-text">
                                    La Tarjeta Nacional Estudiantil (TNE) es un beneficio que permite a
                                    los estudiantes acceder a tarifas preferenciales en el transporte
                                    público y otros beneficios.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tarjeta 2: Beneficios principales (col-md-4) */}
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Beneficios principales:</h5>
                                <ul>
                                    <li>Tarifa reducida en transporte público</li>
                                    <li>Descuentos en comercios asociados</li>
                                    <li>Acceso a beneficios culturales</li>
                                    <li>Identificación estudiantil oficial</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tarjeta 3: Requisitos (col-md-4) */}
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Requisitos:</h5>
                                <ul>
                                    <li>Ser estudiante regular</li>
                                    <li>Institución educativa reconocida</li>
                                    <li>Cédula de identidad vigente</li>
                                    <li>Matrícula vigente 2025</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Esta fila contendrá la tarjeta del video */}
                <div className="row mt-4">
                    {/* Tarjeta 4: Video Resumido (col-md-12 para ocupar todo el ancho) */}
                    <div className="col-md-12">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">¿Mucho texto?</h5>
                                <p className="card-text mb-3">
                                    Te invitamos a ver un video resumido:
                                </p>
                                <div className="video-container">
                                    <video controls className="video-responsive">
                                        <source src={videoTNE} type="video/mp4" />

                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};