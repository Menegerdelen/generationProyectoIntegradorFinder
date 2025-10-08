import { pool } from "../config/dbConfig";
import { Detalles, NuevoDetalle } from "../interface/modelsBBDD";
import { Respuestas } from "../interface/respuestas";



export const crearDetalleServices = async( data: NuevoDetalle ): Promise<Respuestas<Detalles | null>> => {
    const { web, email, telefono, direccion, comuna, id_universidad } = data;

    const query = `
        INSERT INTO detalles( web, email, telefono, direccion, comuna, id_universidad )
        VALUES( $1, $2, $3, $4, $5, $6 )
        RETURNING *;
    `
    try {
        const result = await pool.query( query, [ web, email, telefono, direccion, comuna, id_universidad ] );
        return {
            msg: 'Detalle de universidad creado con exito.',
            status: 201,
            datos: result.rows[0] as Detalles
        }
    } catch (error: any) {
        console.error(`Error en servicio 'crearDetalleServices' al crear detalle de universidad con id '${id_universidad}'.`, error)
        return {
            msg: 'Error en eel servidor al crear detalle.',
            status: 500,
            datos: null
        }
    }
}

export const obtenerTodosDetallesServices = async (): Promise<Respuestas<Detalles[] | null>> => {
    const query = `SELECT * FROM detalles;`;

    try {
        const result = await pool.query(query);

        if (result.rows.length === 0) {
        return {
            msg: "No se encontraron detalles registrados.",
            status: 404,
            datos: null
        };
        }

        return {
        msg: "Detalles obtenidos con éxito.",
        status: 200,
        datos: result.rows as Detalles[]
        };
    } catch (error: any) {
        console.error("Error en servicio 'obtenerTodosDetallesServices'.", error);
        return {
        msg: "Error en el servidor al obtener detalles.",
        status: 500,
        datos: null
        };
    }
};

export const actualizarDetalleServices = async (id_detalle: number, data: NuevoDetalle): Promise<Respuestas<Detalles | null>> => {
    const { web, email, telefono, direccion, comuna, id_universidad } = data;

    const query = `
        UPDATE detalles
        SET web = $2, email = $3, telefono = $4, direccion = $5, comuna = $6, id_universidad = $7
        WHERE id_detalle = $1
        RETURNING *;
    `;

    try {
        const result = await pool.query(query, [
        id_detalle,
        web,
        email,
        telefono,
        direccion,
        comuna,
        id_universidad
        ]);

        if (result.rows.length === 0) {
        return {
            msg: `No se encontró detalle con id '${id_detalle}'.`,
            status: 404,
            datos: null
        };
        }

        return {
        msg: "Detalle actualizado con éxito.",
        status: 200,
        datos: result.rows[0] as Detalles
        };
    } catch (error: any) {
        console.error(`Error en servicio 'actualizarDetalleServices' al actualizar detalle con id '${id_detalle}'.`, error);
        return {
        msg: "Error en el servidor al actualizar detalle.",
        status: 500,
        datos: null
        };
    }
};

export const eliminarDetalleServices = async (id_detalle: number): Promise<Respuestas<Detalles | null>> => {
    const query = `
        DELETE FROM detalles
        WHERE id_detalle = $1
        RETURNING *;
    `;

    try {
        const result = await pool.query(query, [id_detalle]);

        if (result.rows.length === 0) {
        return {
            msg: `No se encontró detalle con id '${id_detalle}'.`,
            status: 404,
            datos: null
        };
        }

        return {
        msg: "Detalle eliminado correctamente.",
        status: 200,
        datos: result.rows[0] as Detalles
        };
    } catch (error: any) {
        console.error(`Error en servicio 'eliminarDetalleServices' al eliminar detalle con id '${id_detalle}'.`, error);
        return {
        msg: "Error en el servidor al eliminar detalle.",
        status: 500,
        datos: null
        };
    }
};
