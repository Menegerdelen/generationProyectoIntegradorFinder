
import { Request, Response } from "express"
import { loginAdminService } from "../services/admin.service";


export const loginAdminController = async (req: Request, res: Response) => {
    try {
        const { user_admin, pass_admin } = req.body;

        // Validacion de campos obligatorios
        if (!user_admin || !pass_admin) {
            return res.status(400).json({
                msg: 'Faltan credenciales: usuario y pass son obligatorios.',
                datos: null
            })
        }

        // Se llama al servicio login
        const respuesta = await loginAdminService(user_admin, pass_admin);
        return res.status(respuesta.status).json(respuesta)
    } catch (error: any) {
        console.error("Error en el 'loginAdminController' al procesar el login.", error)
        return res.status(500).json({
            msg: 'Error interno en el servidor al procesar el login.',
            status: 500,
            datos: null
        })
    }
}