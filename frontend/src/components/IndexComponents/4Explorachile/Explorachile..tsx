
function Explorachile() {
    return (
        <section className="seccion-tres  colorPrimario py-5">
    {" "}
    {/*section es para hacer cajita*/}
    <div className="contenido container">
        <h3 className="fw-bold display-5">
        <span style={{ color: "#fcfcfc" }}> Explora el</span>
        <span style={{ color: "#FFD700" }}> Chile Universitario</span>
        </h3>
        <p className="mt-3 fs-5" style={{ color: "#fcfcfc" }}>
        Revisa el listado de Universidades e Institutos con nuestro mapa
        interactivo 🚀
        </p>
    </div>
    <div className="container">
        <div className="row">
        <div className="col text-start">
            <ul className="text-white" style={{}}>
            <li>Mapa interactivo por Región.</li>
            <li>Clasifica según IES estatales o privadas.</li>
            <li>
                Descubre toda la oferta de IES en todo Chile actualizado año 2025.
            </li>
            </ul>
        </div>
        <div className="col">
            <div className="card-footer bg-transparent border-0 text-center">
            <a
                href="/mapa"
                className="btn text-white fw-semibold rounded-3 px-4 py-2"
                style={{ background: "linear-gradient(90deg, #6a0dad, #8a2be2)" }}
            >
                <i className="bi bi-play-fill me-2" />
                📍 Explora aquí con nuestro mapa interactivo
            </a>
            </div>
        </div>
        </div>
    </div>
    </section>

        )
    }

export default Explorachile