import { pool } from "../config/dbConfig";
import { NuevaRegion, Region } from "../interface/modelsBBDD";
import { Respuestas } from "../interface/respuestas";


export const crearRegionService = async( data: NuevaRegion ): Promise<Respuestas<Region | null>> => {
    const { id_region, nombre } = data;

    const query = `
        INSERT INTO regiones( id_region, nombre )
        VALUES ( $1, $2)
        RETURNING *;
    `
    try {
        const result = await pool.query( query, [ id_region, nombre ] );

        return {
            msg: "Region creada exitosamente",
            status: 201,
            datos: result.rows[0]
        }
    } catch (error: any) {
        console.error(`Error en el servicio 'crearRegionService' al crear región '${nombre}':`, error);

        return {
            msg: 'Error en el servidor al crear region', status: 500, datos: null
        }

    }
    
}

export const obtenerTodasRegionesService = async (): Promise<Respuestas<Region[] | null>> => {
    const query = `
        SELECT * FROM regiones;
    `

    try {
        const result = await pool.query(query);

        if (result.rows.length === 0) {
            return {
                msg: 'No se encontraron regiones.',
                status: 404,
                datos: null
            }
        }
        return {
            msg: 'Regiones obtenidas con exito.',
            status: 200,
            datos: result.rows as Region[]
        }
    } catch (error: any) {
        console.error("Error en el servicio 'obtenerTodasRegionesService'.", error)
        return {
            msg: 'Error en el servidor al obtener regiones',
            status: 500,
            datos: null
        }
    }
}

export const actualizarRegionService = async (id: number, id_region: string, nombre: string): Promise<Respuestas<Region | null>> => {
    const query = `
        UPDATE regiones SET id_region = $2, nombre = $3 WHERE id = $1
        RETURNING *;
    `
    try {
        const result = await pool.query(query, [ id, id_region, nombre ])
        if (result.rows.length === 0) {
            return {
                msg: `No se encontro ninguna region con id: ${id}`,
                status: 404,
                datos: null
            }
        }
        return {
            msg: 'Region actualizada con exito',
            status: 200,
            datos: result.rows[0]
        }

    } catch (error: any) {
        console.error(`Error en el servicio 'actualizarRegionService' al actualizar región ID '${id_region}':`, error);
        
        // Manejo especifico de errores de Postgresql
        if (error.code === '23505') { // Violación de constraint UNIQUE
            return{
                msg: `El nombre '${nombre}' ya existe en otra region.`,
                status: 409,
                datos: null
            }
        }

        return {
            msg: 'Error en el servidor al actualizar region.', status: 500, datos: null
        }
    }
}


export const eliminarRegionService = async (id: number): Promise<Respuestas<Region | null>> => {
    const query = `
        DELETE FROM regiones WHERE id = $1
        RETURNING *;
    `

    try {
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return {
                msg: `No se encontro ninguna region con id '${id}'`,
                status: 404,
                datos: null
            }
        }
        return {
            msg: 'Region eliminada con exito.',
            status: 200,
            datos: result.rows[0]
        }
    } catch (error: any) {
        console.error(`Error en el servicio 'eliminarRegionService' al eliminar region con id '${id}'`, error);

        if (error.code === '23503') { // Violación de foreign key constraint
            return {
                msg: `No se puede eliminar la region con id '${id}', porque tiene registros relacionados.`,
                status: 409,
                datos: null
            }
        }
        return {
            msg: 'Error en el servidor al borrar region.',
            status: 500,
            datos: null
        }
    }
}