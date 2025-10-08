import { Server } from "./server/Server";


const main = async() => {
    const server = new Server();

    // Ejecutar la inicialización completa: verifica conexión y crea tablas
    await server.iniciarDDBB()

    server.listen();
}

main();