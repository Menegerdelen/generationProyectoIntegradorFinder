

export interface Conexion {
    user: string,
    host: string,
    database: string,
    password: string,
    port: number

    max?: number, // máximo de conexiones en el pool
    idleTimeoutMillis?: number, // timeout para conexiones inactivas
    connectionTimeoutMillis?: number // timeout para establecer conexión
}

