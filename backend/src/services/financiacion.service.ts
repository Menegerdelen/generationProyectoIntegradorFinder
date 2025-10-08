

import { Financiacion, NuevaFinanciacion } from '../interface/modelsBBDD'
import { pool } from '../config/dbConfig';

export const crearFinanciacionService = async( data: NuevaFinanciacion ): Promise<Financiacion> => {
    const { tipo } = data;

    const query = `
        INSERT INTO financiacion( tipo )
        VALUES( $1 )
        RETURNING *;
    `

    const result = await pool.query( query, [tipo] )

    return result.rows[0]
}
