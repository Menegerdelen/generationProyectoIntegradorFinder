
import { Request, Response } from 'express'
import { NuevaFinanciacion } from "../interface/modelsBBDD"
import { crearFinanciacionService } from '../services/financiacion.service';


export const crearFinanciacionController = async( req: Request, res: Response ): Promise<void> => {
    // Tipar y exytaer los datos de la entrada
    const nuevaFinanciacionData: NuevaFinanciacion = req.body;

    // Validacion basica
    if ( !nuevaFinanciacionData.tipo ) {
        res.status( 400 ).json({ msg: 'Faltan campos obligatorios: tipo.' });
        return;
    }

    try {
        // Llamar al servicio para insertar en la DB
        const crearFinanciacion = await crearFinanciacionService( nuevaFinanciacionData );
        // Respuesta HTTP
        res.status( 201 ).json( crearFinanciacion )
    } catch (error) {
        // Manejo de errores de la DB
        console.error( 'Error al crear tipo de financiacion.', error )
        res.status( 500 ).json({ msg: 'Error interno al crear el tipo de financiacion.' })
    }
}