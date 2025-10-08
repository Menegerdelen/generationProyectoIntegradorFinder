
import { Request, Response } from "express"
import { NuevaRegion } from "../interface/modelsBBDD"
import { actualizarRegionService, crearRegionService, eliminarRegionService, obtenerTodasRegionesService } from "../services/region.service";


export const crearRegionController = async( req: Request, res: Response ): Promise<void> => {

    const nuevaRegionData: NuevaRegion = req.body;

    if ( !nuevaRegionData.id_region || !nuevaRegionData.nombre ) {
        res.status( 400 ).json({ msg: 'Faltan campos obligatorios: id_region, name' });
        return;
    }

    try {
        const crearRegion = await crearRegionService( nuevaRegionData );
        res.status( 201 ).json( crearRegion );
    } catch (error: any) {
        console.error( "Error en 'crearRegionController' al crear la nueva region.", error )
        res.status( 500 ).json({ msg: 'Error interno al crear la region.', datos: null })
    }
}

export const obtenerTodasRegionesController = async ( req: Request, res: Response ) => {
    try {
        const respuesta = await obtenerTodasRegionesService();
        
        return res.status(respuesta.status).json(respuesta);
    } catch (error: any) {
        console.error("Error inesperado en 'obtenerTodasRegionesController' al obtener todas las regiones.", error);
        return res.status(500).json({
            msg: 'Error en el servidor al obtener las regiones',
            datos: null
        })
    }

}   

export const actualizarRegionController = async ( req: Request, res: Response ) => {
    const id  = parseInt(req.params.id);
    const { id_region, nombre } = req.body;

    if (!id || !id_region || !nombre) {
        return res.status(400).json({
            msg: "Faltan parametros requeridos: 'id', 'id_region' y/o 'nombre'.",
            datos: null
        })   
    }

    try {
        const respuesta = await actualizarRegionService( id, id_region, nombre );
        return res.status(respuesta.status).json({
            msg: respuesta.msg, datos: respuesta.datos
        })
    } catch (error: any) {
        console.error("Error en 'actualizarRegionController'.", error)
        return res.status(500).json({
            msg: 'Error en el servidior al procesar la actualizacion de la region.',
            datos: null
        })
    }
}

export const eliminarRegionController = async ( req: Request, res: Response ) => {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
        return res.status(400).json({
            msg: "El parámetro 'id' no es válido..",
            datos: null
        })
    }

    try {
        const respuesta = await eliminarRegionService( id);
        return res.status(respuesta.status).json({
            msg: respuesta.msg, datos: respuesta.datos
        })
    } catch (error: any) {
        console.error("Error inesperado en 'eliminarRegionController'.", error)
        return res.status(500).json({
            msg: 'Error en el servidor al procesar eliminar region.',
            datos: null
        })
    }
}

