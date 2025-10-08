
import dotenv from 'dotenv';
dotenv.config();

/*
 * Obtiene una variable de entorno como string.
 * Lanza error si no está definida.
 */
export const getEnv = ( key: string ): string => {
    const valor = process.env[key];
    if( !valor ) throw new Error( `La variable ${key}, no esta definida.` )
    return valor
}

/*
 * Obtiene una variable de entorno como número entero.
 * Lanza error si no está definida o no es un número válido.
 */
export const getEnvInt = ( key: string ): number => {
    const valor = process.env[key]
    if( !valor ) throw new Error( `La variable ${key}, no esta definida.` )
    
    const numero = parseInt( valor, 10 )

    if( isNaN( numero ) ) throw new Error( `La variable ${key}, no es numero valido.` )

    return numero
}