
import express, { Application } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { getEnvInt } from "../config/validacionEnv";
import { pool } from "../config/dbConfig";
import { createDataBase } from "../data/createTables";

import financiacionRoute from '../routes/financiacion.route'
import regionesRoute from '../routes/region.route'
import universidadRoute from '../routes/universidad.route'
import detalleRoute from '../routes/detalle.route'
import loginAdminRoute from '../routes/admin.route'

dotenv.config();

const dbPort = getEnvInt('PORT')

export class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express()
        this.port = dbPort;

        this.middlewares();
        this.routes();
    }

    private middlewares(): void{
        this.app.use( express.json() )
        this.app.use( cors() )
    }

    private routes(): void{
        this.app.use( '/api/financiacion', financiacionRoute )
        this.app.use( '/api/regiones', regionesRoute )
        this.app.use( '/api/universidades', universidadRoute )
        this.app.use( '/api/detalles-universidades', detalleRoute )
        this.app.use( '/admin', loginAdminRoute )
    }

    // Realiza conexion a la BBDD
    private async dbConnection(): Promise<void>{
        try {
            // Solicitamos una conexión del pool
            const cliente = await pool.connect();
            // Si tiene éxito, liberamos la conexión inmediatamente.
            cliente.release()
            console.log('Conexion a Base de Datos establecida con exito')
        } catch (error) {
            console.log('Error al conectar a la base de datos', error)
            // Si la conexion a la bbdd falla, detener la ejecucion
            process.exit(1);
        }
    }

    // Metodo para crear las tablas e iniciar conexion
    public async iniciarDDBB(): Promise<void>{
        try {
            await this.dbConnection();

            await createDataBase();

        } catch (error) {
            console.error('ERROR duranto la inicializacion de la Base de Datos', error)
            process.exit(1)
        }
    }

    public listen(): void {
        this.app.listen( this.port, () => console.log( `Servidor corriendo en puerto ${this.port}` ) )
    }
}