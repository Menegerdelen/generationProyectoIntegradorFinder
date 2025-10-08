
import { pool } from '../config/dbConfig';
import * as fs from 'fs';
import path from "path";


// Leer archivo sql 
const SQLPATH = path.join(__dirname, 'data.sql')



export const createDataBase = async(): Promise<void> => {
    try {
        if ( !fs.existsSync( SQLPATH ) ) {
            console.log(`ERROR: Archivo SQL no encontrado en la ruta: ${ SQLPATH }.`)
            return;
        }

        const sql = fs.readFileSync( SQLPATH, 'utf-8' )

        //Ejecutar la sentencia SQL CREATE TABLE
        const ejecutar = await pool.query( sql )
        console.log( 'Tablas creadas con exito en la Base de Datos.' )

    } catch (error) {
        console.error( 'ERROR no se han podido crear las tablas solicitadas.', error )
        throw error;
    }
}
