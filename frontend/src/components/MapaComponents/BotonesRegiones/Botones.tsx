import { useNavigate } from "react-router-dom"
import type { Regiones } from "../data/regiones.data"



interface SectionBtn{
    regiones: Regiones[]
}

export const Botones = ( { regiones }: SectionBtn ) => {

    const navigate = useNavigate()
    return (
        <>
        <div id="regiones" className="row my-5 d-flex justify-content-center">
            { regiones.map( region=> (
                <div id={ `region-${region.id}` } className="col-sm-12 col-md-6 col-lg-12 my-3">
                    <button type="button" className="btn btn-light w-100 fw-bold fs-6 textPrimario"
                    onClick={() => navigate( `/universidades/region/${region.id_region}` )}
                    >{ `${region.id_region} ${region.name}` }</button>
                </div>
            )) }
        </div>
        </>
        
    )
}
