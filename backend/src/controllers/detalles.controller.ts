
import { Request, Response } from "express"
import { NuevoDetalle } from "../interface/modelsBBDD"
import { actualizarDetalleServices, crearDetalleServices, eliminarDetalleServices, obtenerTodosDetallesServices } from "../services/detalles.service";

export const crearDetallleController =  async( req: Request, res: Response ) => {
    const nuevoDetalleData: NuevoDetalle = req.body;

    if ( !nuevoDetalleData.id_universidad ) {
        res.status( 400 ).json({ msg: 'Faltan campos obligatorios: ID Universidad.' })
        return;
    }

    try {
        const crearDetalle = await crearDetalleServices( nuevoDetalleData );
        res.status( 201 ).json( crearDetalle)
    } catch (error) {
        console.error( 'Error al crear detalles de universidad.', error )
        res.status( 500 ).json({ msg: 'Error interno al crear detalles de universidad.' })
    }
}

export const obtenerTodosDetallesController = async (req: Request, res: Response) => {
    try {
        const resultado = await obtenerTodosDetallesServices();
        return res.status(resultado.status).json(resultado);
    } catch (error: any) {
        console.error("Error en controlador 'obtenerTodosDetallesController':", error);
        return res.status(500).json({
        msg: "Error inesperado en el servidor al obtener detalles.",
        status: 500,
        datos: null
        });
    }
};

export const actualizarDetalleController = async (req: Request, res: Response) => {
    try {
        const id_detalle = parseInt(req.params.id_detalle);
        if (isNaN(id_detalle)) {
        return res.status(400).json({
            msg: "ID de detalle inválido.",
            status: 400,
            datos: null
        });
        }

        const resultado = await actualizarDetalleServices(id_detalle, req.body);
        return res.status(resultado.status).json(resultado);
    } catch (error: any) {
        console.error(`Error en controlador 'actualizarDetalleController' para id '${req.params.id_detalle}':`, error);
        return res.status(500).json({
        msg: "Error inesperado en el servidor al actualizar detalle.",
        status: 500,
        datos: null
        });
    }
};

export const eliminarDetalleController = async (req: Request, res: Response) => {
    try {
        const id_detalle = parseInt(req.params.id_detalle);
        if (isNaN(id_detalle)) {
        return res.status(400).json({
            msg: "ID de detalle inválido.",
            status: 400,
            datos: null
        });
        }

        const resultado = await eliminarDetalleServices(id_detalle);
        return res.status(resultado.status).json(resultado);
    } catch (error: any) {
        console.error(`Error en controlador 'eliminarDetalleController' para id '${req.params.id_detalle}':`, error);
        return res.status(500).json({
        msg: "Error inesperado en el servidor al eliminar detalle.",
        status: 500,
        datos: null
        });
    }
};