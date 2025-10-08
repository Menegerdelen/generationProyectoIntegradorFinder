
import { Request, Response } from "express";
import { NuevaUniversidad } from "../interface/modelsBBDD";
import { actualizarUniversidadService, buscarUniversidadesPorRegionService, crearUniversidadService, eliminarUniversidadService, obtenerTodasUniversidadesService } from "../services/universidad.service";



export const crearUniversidadController = async( req: Request, res: Response ): Promise<void> => {
    const nuevaUniversidadData: NuevaUniversidad = req.body;

    if ( !nuevaUniversidadData.nombre || !nuevaUniversidadData.id_financiacion || !nuevaUniversidadData.id_region ) {
        res.status( 400 ).json({ msg: 'Faltan campos obligatorios: nombre, id_financiacion, id_region.' });
        return;
    }

    try {
        const crearUniversidad = await crearUniversidadService( nuevaUniversidadData );
        res.status( 201 ).json( crearUniversidad );
    } catch (error) {
        console.error( 'Error al crear la universidad.', error );
        res.status( 500 ).json({ msg: 'Error interno al crear la universidad.' });
    }

}

export const obtenerTodasUniversidadesController = async (_req: Request, res: Response) => {
    try {
        const respuesta = await obtenerTodasUniversidadesService();
        return res.status(respuesta.status).json(respuesta);
    } catch (error: any) {
        console.error("Error inesperado en 'obtenerTodasUniversidadesController'.", error);
        return res.status(500).json({
        msg: "Error en el servidor al obtener universidades.",
        datos: null
        });
    }
};


export const buscarUniversidadesPorRegionController = async ( req: Request, res: Response ): Promise<void> => {
    const { id_region } = req.params;

    if( !id_region ){
        res.status( 400 ).json( {msg: 'Falta el parametro: id_region'} );
        return;
    }

    try {
        const universidades = await buscarUniversidadesPorRegionService( id_region );
        res.status( 200 ).json( universidades )
    } catch (error) {
        console.error( 'Error al obtenmer universidades por region.' , error)
        res.status( 500 ).json({  msg: 'Error interno al obntener datos de universidades.' })
    }
}

export const actualizarUniversidadController = async ( req: Request, res: Response ) => {
    const id_universidad = parseInt(req.params.id_universidad);
    const data: NuevaUniversidad = req.body;

    if (isNaN(id_universidad) || !data.nombre || !data.id_financiacion || !data.id_region) {
        return res.status(400).json({
        msg: "Faltan parámetros requeridos: 'id_universidad', 'nombre', 'id_financiacion' y/o 'id_region'.",
        datos: null
        });
    }

    try {
        const respuesta = await actualizarUniversidadService(id_universidad, data);
        return res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
        });
    } catch (error: any) {
        console.error("Error en 'actualizarUniversidadController'.", error);
        return res.status(500).json({
        msg: "Error en el servidor al actualizar universidad.",
        datos: null
        });
    }

}

export const eliminarUniversidadController = async ( req: Request, res: Response ) => {
    const id_universidad = parseInt(req.params.id_universidad);

    if (isNaN(id_universidad)) {
        return res.status(400).json({
        msg: "El parámetro 'id_universidad' no es válido.",
        datos: null
        });
    }

    try {
        const respuesta = await eliminarUniversidadService(id_universidad);
        return res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
        });
    } catch (error: any) {
        console.error("Error en 'eliminarUniversidadController'.", error);
        return res.status(500).json({
        msg: "Error en el servidor al eliminar universidad.",
        datos: null
        });
    }

}