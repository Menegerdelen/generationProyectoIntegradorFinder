

    export const Enlaces = () => {
    return (
    <section id="sec-enlaces" className="mt-5">
        <div className="container">
        <h4
            className="text-center mb-4"
            style={{ color: "#000000", fontSize: "2rem" }}
        >
            Enlaces Externos
        </h4>
        <div className="row">
            {/* Enlace 1 */}
            <div className="col-md-4">
            <div className="card text-center">
                <div className="card-body">
                <img
                    src="https://sube.ucsc.cl/wp-content/uploads/sites/46/2021/11/MINEDUC.png"
                    width={300}
                    alt=""
                />
                <a
                    href="https://educacionsuperior.mineduc.cl/"
                    className="btn btn-outline-light"
                    target="_blank"
                    style={{ color: "#000000" }}
                >
                    Ir al sitio
                </a>
                </div>
            </div>
            </div>
            {/* Enlace 2 */}
            <div className="col-md-4">
            <div className="card text-center">
                <div className="card-body">
                <img
                    src="https://demre.cl/img/logo-demre-2018-00.png"
                    width={300}
                    alt=""
                />
                <a
                    href="https://www.demre.cl"
                    className="btn btn-outline-light"
                    target="_blank"
                    style={{ color: "#000000" }}
                >
                    Ir al sitio
                </a>
                </div>
            </div>
            </div>
            {/* Enlace 3 */}
            <div className="col-md-4">
            <div className="card text-center">
                <div className="card-body">
                <img
                    src="https://czabogados.cl/wp-content/uploads/2021/04/descarga.png"
                    width={300}
                    alt=""
                />
                <a
                    href="https://www.sistemadeadmisionescolar.cl/"
                    className="btn btn-outline-light"
                    target="_blank "
                    style={{ color: "#000000" }}
                >
                    Ir al sitio
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>  )
    }
