
import accesIMG from '../../../../src/assets/img/indexImg/Enlacesexternos/Acceso educación superior.png'
import demreIMG from "../../../../src/assets/img/indexImg/Enlacesexternos/DEMRE.png"
import eduTecIMG from "../../../../src/assets/img/indexImg/Enlacesexternos/Educación técnico profesional.png"
import mifuturoIMG from "../../../../src/assets/img/indexImg/Enlacesexternos/Mi futuro.png"
import superIntIMG from "../../../../src/assets/img/indexImg/Enlacesexternos/Superintendencia.png"


    function Enlacesexternos() {
        return (
            <section className="seccion-cuatro my-5">
    <div className="contenido container">
        <h5>Enlaces externos</h5>
        <p>
        Encuentra todos los sitios de interés para que puedas orientarte en tu
        futuro.
        </p>
        <div className="d-flex gap-3 overflow-auto pb-3">
        <div className="card cardIndex flex-shrink-0" style={{ width: "18rem" }}>
            <img
            src={demreIMG}
            className="card-img-top card-img-topIndex"
            alt="..."
            />
            <div className="card-body card-bodyIndex text-center">
            <p className="card-text card-textIndex">DEMRE</p>
            <a
                href="https://demre.cl"
                target="_blank"
                className="btn btn-primary btn-sm"
            >
                Visitar sitio
            </a>
            </div>
        </div>
        <div className="card cardIndex flex-shrink-0" style={{ width: "18rem" }}>
            <img
            src={accesIMG}
            className="card-img-top card-img-topIndex"
            alt="..."
            />
            <div className="card-body card-bodyIndex text-center">
            <p className="card-text card-textIndex">Acceso Educación Superior</p>
            <a
                href="https://acceso.mineduc.cl"
                target="_blank"
                className="btn btn-primary btn-sm"
            >
                Visitar sitio
            </a>
            </div>
        </div>
        <div className="card cardIndex flex-shrink-0" style={{ width: "18rem" }}>
            <img
            src={superIntIMG}
            className="card-img-top card-img-topIndex"
            alt="..."
            />
            <div className="card-body card-bodyIndex text-center">
            <p className="card-text card-textIndex">Superintendencia de la Educación Superior</p>
            <a
                href="https://www.sesuperior.cl/es_cl/"
                target="_blank"
                className="btn btn-primary btn-sm"
            >
                Visitar sitio
            </a>
            </div>
        </div>
        <div className="card cardIndex flex-shrink-0" style={{ width: "18rem" }}>
            <img
            src={eduTecIMG}
            className="card-img-top card-img-topIndex"
            alt="..."
            />
            <div className="card-body card-bodyIndex text-center">
            <p className="card-textIndex">Educación técnico profesional</p>
            <a
                href="https://educaciontecnica.cl/"
                target="_blank"
                className="btn btn-primary btn-sm"
            >
                Visitar sitio
            </a>
            </div>
        </div>
        <div className="card cardIndex flex-shrink-0" style={{ width: "18rem" }}>
            <img
            src={mifuturoIMG}
            className="card-img-top card-img-topIndex"
            alt="..."
            />
            <div className="card-body card-bodyIndex text-center">
            <p className="card-text card-textIndex">Mi futuro</p>
            <a
                href="https://www.mifuturo.cl/"
                target="_blank"
                className="btn btn-primary btn-sm"
            >
                Visitar sitio
            </a>
            </div>
        </div>
        </div>
    </div>
    </section>

        )
    }

    export default Enlacesexternos