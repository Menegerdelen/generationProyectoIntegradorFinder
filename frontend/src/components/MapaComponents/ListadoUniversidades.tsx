

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


interface Universidad {
    id_universidad: number,
    nombre_universidad: string,
    tipo_financiacion: string,
    id_region: string;

    web?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    comuna?: string;

}



export const ListadoUniversidadesPorRegion = () => {
    const { id_region } = useParams();
    
    const [universidades, setUniversidades] = useState<Universidad[]>([])
    const [loading, setLoading] = useState( true )
    
    
    
    
    useEffect(() => {
        // const url = `http://localhost:3000/api/universidades/region/${id_region}`;
        const fetchUniversidades = async() => {
            try {
                const response = await axios.get( `http://localhost:3000/api/universidades/region/${id_region}` );
                setUniversidades( response.data.datos )
            } catch (error) {
                console.error('Error al acceder a base de datos solicitada.', error )
            }finally {
                setLoading( false )
            }
        }
        fetchUniversidades();
    }, [ id_region ])

    if( loading ) return <p>Cargando universidades de la { id_region }... </p>

    return (
        <div className="my-5">
            <div className="text-center"> 
                <h1 className="fw-bold">Universidades de la region { id_region }</h1>
            </div>
            <div className="row justify-content-center my-5">
                {universidades.map((uni) => (
                    <div className="col-8 col-md-8 col-lg-8 col-xl-3 m-3" key={uni.id_universidad}>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title cardTitleTne">{uni.nombre_universidad}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Financiación: {uni.tipo_financiacion}
                        </h6>
                        <p className="card-text">
                            <strong>Web:</strong> <a href={uni.web} target="_blank" rel="noopener noreferrer">{uni.web || "No disponible"}</a><br />
                            <strong>Email:</strong> {uni.email || "No disponible"}<br />
                            <strong>Teléfono:</strong> {uni.telefono || "No disponible"}<br />
                            <strong>Dirección:</strong> {uni.direccion || "No disponible"}<br />
                            <strong>Comuna:</strong> {uni.comuna || "No disponible"}
                        </p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
