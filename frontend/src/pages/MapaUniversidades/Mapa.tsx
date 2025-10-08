import { Botones } from "../../components/MapaComponents/BotonesRegiones/Botones"
import { MapaChile } from '../../components/MapaComponents/MapaChile/MapaChile'
import { regionesData } from '../../components/MapaComponents/data/regiones.data'




export const Mapa = () => {
    return (
        <>
        <section className="container my-5">
            <div className="text-center my-5">
                <h1 className="fw-bold">Lista de universidades</h1>
            </div>

            <div className="row d-flex justify-content-center">

                <div className="col-lg-4 d-none d-lg-block mx-auto">
                    <div id="mapaChile" className="mx-auto my-3">
                        <MapaChile/>
                    </div>
                </div>
                
                <div className="col-md-12 col-lg-4 ">
                    {/* <div id="regiones" className="row my-5 d-flex justify-content-center">
                    
                    </div> */}

                    <Botones  regiones={ regionesData }/>
                </div>
                
            </div>
        </section>

        </>
    )
}
