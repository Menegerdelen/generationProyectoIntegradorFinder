

export const Frecuentes = () => {
    return (
        <section className="sec-info2 mt-5">
            <div className="container">
                <div className="row g-4">
                    {/* Tarjeta de Costo de Revalidación (ocupa todo el ancho) */}
                    <div className="col-lg-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title cardTitleTne">COSTO REVALIDACIÓN</h5>
                                <p className="card-text">
                                    La revalidación solo se paga en educación superior, cuesta
                                    $1.100 y se paga en la misma universidad o instituto. En básica
                                    y media es gratis.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta de Documentos para Reposición (ocupa todo el ancho) */}
                    <div className="col-lg-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title cardTitleTne">
                                    ¿QUÉ DOCUMENTOS NECESITO PARA LA REPOSICIÓN DE MI TNE?
                                </h5>
                                
                                {/* Contenido de Educación Básica/Media */}
                                <p><strong>EDUCACIÓN BÁSICA O MEDIA</strong></p>
                                <ul>
                                    <li>Cédula de Identidad vigente o Certificado de Nacimiento (solo menores de 18 años).</li>
                                    <li>Certificado de Alumno/a Regular (CAR) con firma y timbre original.</li>
                                    <li>Si la TNE se perdió: Constancia de Carabineros (puede obtenerse desde comisariavirtual.cl).</li>
                                    <li>Si la TNE está deteriorada: Presenta tu TNE antigua.</li>
                                    <li>Estudiantes migrantes: La documentación varía según la situación (RUT provisorio, pasaporte, constancia consular, etc.).</li>
                                    <li>Estudiantes de colegios particulares pagados: Carta de Desmedro Socioeconómico emitida por el establecimiento.</li>
                                </ul>

                                {/* Contenido de Educación Superior */}
                                <p><strong>EDUCACIÓN SUPERIOR</strong></p>
                                <ul>
                                    <li>Cédula de Identidad vigente</li>
                                    <li>Certificado de Alumno/a Regular (CAR) con firma y timbre original.</li>
                                    <li>Comprobante de depósito de $3.600 en Banco Estado (no por transferencia electrónica).</li>
                                    <li>Si la TNE se perdió: Constancia de Carabineros.</li>
                                    <li>Si la TNE está deteriorada: Presenta tu TNE antigua.</li>
                                    <li>Estudiantes de Postgrado (Magíster o Doctorado): Carta de Desmedro Socioeconómico emitida por la institución (con firma, timbre o código de verificación).</li>
                                </ul>
                                <p>
                                    <strong>
                                        RECUERDA: Si es reposición presencial, el estudiante debe asistir para la foto, ya que no se usan fotos almacenadas.
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};