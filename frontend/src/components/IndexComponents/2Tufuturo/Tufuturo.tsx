
import testVocacion from '../../../../src/assets/img/indexImg/Tufuturo/Test vocacional.png'


function Tufuturo() {
        return (
            <section
    className="seccion-uno py-5"
    style={{
        background: "linear-gradient(135deg, #8d40c4, #aa5dda)",
        color: "white"
    }}
    >
    <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 mb-4">
            <h1 className="fw-bold display-5">
            Tu Futuro
            <br />
            <span style={{ color: "#FFD700" }}>Comienza Aquí</span>
            </h1>
            <p className="mt-3 fs-5">
            Descubre tu vocación y toma la decisión más importante de tu vida con
            confianza. ¡Tu carrera ideal te está esperando! 🚀
            </p>
        </div>
        {/* Card a la derecha */}
        <div className="col-lg-6">
            <div
            className="card mx-auto shadow-lg border-0 rounded-4"
            style={{ maxWidth: 400 }}
            >

            {/* Título y subtítulo */}
            <div className="card-body text-center">
                <h4 className="fw-bold text-dark">Test Vocacional</h4>
                <p className="text-muted mb-4">Descubre tu carrera ideal</p>
            </div>
            {/* Imagen */}
            <img
                src={ testVocacion }
                className="card-img-top"
                alt="Test vocacional"
            />
            {/* Botón */}
            <div className="card-footer bg-transparent border-0 text-center">
                <a
                href="#"
                className="btn text-white fw-semibold rounded-3 px-4 py-2"
                style={{ background: "linear-gradient(90deg, #6a0dad, #8a2be2)" }}
                >
                <i className="bi bi-play-fill me-2" /> Iniciar Test Vocacional
                Gratis
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

        )
    }

    export default Tufuturo