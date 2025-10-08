
import { pool } from "../config/dbConfig";
import { Admin } from "../interface/modelsBBDD";
import { Respuestas } from "../interface/respuestas";


// Omit: toma el tipo Admin, pero quita la propiedad pass_admin
export const loginAdminService = async (user_admin: string, pass_admin: string): Promise<Respuestas<Omit<Admin, 'pass_admin'> | null>> => {
    const query = `
        SELECT * FROM admins WHERE user_admin = $1;
    `

    try {
        const result = await pool.query(query, [user_admin]);
        if (result.rows.length === 0) {
            return {
                msg: 'Usuario no encontrado.',
                status: 404,
                datos: null
            }
        }
        const admin = result.rows[0] as Admin;
        // Se valida si la contraseña coincide
        if (admin.pass_admin !== pass_admin) {
            return {
                msg: 'Contraseña incorrecta.',
                status: 401,
                datos: null
            }
        }

        // Validar el role_admin si es == true
        if (!admin.role_admin) {
            return {
                msg: 'Acceso denegado: el usuario no tiene el rol de administrador.',
                status: 403,
                datos: null
            }
        }

        // Se destructura el objeto para no retornar la contraseña, `pass_admin: _` significa "extrae pass_admin pero no lo uses"
        const { pass_admin: _, ... adminSinPassword } = admin
        // Se retorna el admin sin la contraseña, para mayor seguridad
        return {
            msg: 'Inicio de sesion exitoso.',
            status: 200,
            datos: adminSinPassword
        }

    } catch (error: any) {
        console.error(`Error en el servicio 'loginAdminService' al intentar iniciar sesion el usuario; '${user_admin}'.`, error)
        return {
            msg: 'Error en el servidor al iniciar sesion.',
            status: 500,
            datos: null
        }
    }
}