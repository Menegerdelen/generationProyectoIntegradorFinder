
import { pool } from "../config/dbConfig";
import { NuevaUniversidad, Universidad } from "../interface/modelsBBDD";
import { Respuestas } from "../interface/respuestas";



export const crearUniversidadService = async(data: NuevaUniversidad): Promise<Respuestas<Universidad | null>> => {
    const { nombre, id_financiacion, id_region } = data;

    const query = `
        INSERT INTO universidades( nombre, id_financiacion, id_region )
        VALUES( $1, $2, $3 )
        RETURNING *;
    `
    
    try {
        const result = await pool.query( query, [ nombre, id_financiacion, id_region ] );

        return{
            msg: 'Universidad creada exitosamente',
            status: 201,
            datos: result.rows[0]
        }
    } catch (error: any) {
        console.error(`Error en el servicio 'crearUniversidadService' al crear universidad con nombre '${data.nombre}'`, error)
        return {
            msg: 'Error en el servidor al crear universidad', status: 500, datos: null
        }
    }

}

export const obtenerTodasUniversidadesService = async (): Promise<Respuestas<Universidad[] | null>> => {
    const query = `
        SELECT * FROM universidades;
    `

    try {
        const result = await pool.query(query);

        if (result.rows.length === 0) {
            return {
                msg: "No se encontraron universidades.",
                status: 404,
                datos: null
            }
        }

        return {
            msg: 'Universidades obtenidas con exito.',
            status: 200,
            datos: result.rows as Universidad[]
        }
    } catch (error: any) {
        console.error("Error en el servicio 'obtenerTodasUniversidadesService' al obtener universidades.", error)
        return {
            msg: 'Error en elr servidor al obtener universidades.',
            status: 500,
            datos: null
        }
    }
}


export const buscarUniversidadesPorRegionService = async( id_region: string ): Promise<Respuestas<Universidad[]>> => {
    const query = `
        SELECT 
            u.id_universidad,
            u.nombre AS nombre_universidad,
            f.tipo AS tipo_financiacion,
            d.web,
            d.email,
            d.telefono,
            d.direccion,
            d.comuna
        FROM universidades u
        JOIN financiacion f ON u.id_financiacion = f.id_financiacion
        LEFT JOIN detalles d ON u.id_universidad = d.id_universidad
        WHERE u.id_region = $1;
    `

    try {
        const result = await pool.query( query, [id_region ] );
        return {
            msg: 'Universidades encontradas', 
            status: 200,
            datos:  result.rows
        }
    } catch (error: any) {
        console.error("Error en el servicio 'buscarUniversidadesPorRegionService', al buscar universidades por region.", error)
        return{
            msg: 'Error en el servidor al realizar la busqueda', status: 500, datos: []
        }
    }
}


export const actualizarUniversidadService = async (id_universidad: number, data: NuevaUniversidad): Promise<Respuestas<Universidad | null>> => {
    const { nombre, id_financiacion, id_region } = data;

    const query = `
        UPDATE universidades SET nombre = $2, id_financiacion = $3, id_region = $4 WHERE id_universidad = $1
        RETURNING *;
    `

    try {
        const result = await pool.query(query, [id_universidad, nombre, id_financiacion, id_region]);

        if(result.rows.length === 0) {
            return {
                msg: `No se encontro universidad con id '${id_universidad}'`,
                status: 404,
                datos: null
            }
        }
        return {
            msg: 'Universidadactualizada con exito.',
            status: 200, 
            datos: result.rows[0]
        }
    } catch (error: any) {
        console.error(`Error en el servicio 'actualizarUniversidadService' al actualizar universidad con id '${id_universidad}'`, error)

        return {
            msg: 'Error en el servidor al actualizar universidad',
            status: 500,
            datos: null
        }
    }
}

export const eliminarUniversidadService = async (id_universidad: number): Promise<Respuestas<Universidad | null>> => {
    const query = `
        DELETE FROM universidades WHERE id_universidad = $1
        RETURNING *;
    `

    try {
        const result = await pool.query(query, [id_universidad]);

        if (result.rows.length === 0) {
            return {
                msg: `No se encontro universidad con id '${id_universidad}'`,
                status: 404,
                datos: null
            }
        }
        return {
            msg: 'Universidad eliminada correctamente.',
            status: 200,
            datos: result.rows[0]
        }
    } catch (error: any) {
        console.error(`Error en el servicio 'eliminarUniversidadService' al eliminar universidad con id '${id_universidad}'`, error);

        if (error.code === '23503') { // Violación de foreign key constraint
            return {
                msg: `No se puede eliminar la universidad con id '${id_universidad}', porque tiene registros relacionados.`,
                status: 409,
                datos: null
            }
        }

        return {
            msg: 'Error en el servidor al borrar universidad',
            status: 500,
            datos: null
        }
    }
}