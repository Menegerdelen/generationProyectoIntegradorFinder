
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { Conexion } from '../interface/Conexion';
import { getEnv, getEnvInt } from './validacionEnv';

dotenv.config();

// Validar que las variables necesarias esten presentes
const validarEntorno = () => {
    const claves = [ 'DB_USER', 'DB_HOST', 'DB_NAME', 'DB_PASS', 'DB_PORT' ];

    claves.forEach((c) => {
        if( !process.env[c] ){
            throw new Error( `LA variable de entorno ${c} no esta definida.` )
        }
    })
}
validarEntorno();


// .env
const dbUser = getEnv( 'DB_USER' );
const dbHost = getEnv( 'DB_HOST' );
const dbName = getEnv( 'DB_NAME' );
const dbPass = getEnv( 'DB_PASS' );
const dbPort = getEnvInt( 'DB_PORT' );


// Conexion y exportacion de la base de datos
export const dbConfig: Conexion = {
    user: dbUser,
    host: dbHost,
    database: dbName,
    password: dbPass,
    port: dbPort,

    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
}

export const pool = new Pool( dbConfig );
