

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const loginURL = 'http://localhost:3000/admin/login'

export const FormLogin = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    // Se maneja el evento sumbit del form
    const handleSumbit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!user || !pass) {
            setError("Por favor ingrese un usuario y contraseña.")
            return;
        }

        try {
            const { data } = await axios.post(loginURL, {
                user_admin: user, pass_admin: pass
            })

            if (data.status !== 200) {
                setError(data.msg);
                return;
            }

            navigate('/admin/panel')
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.msg || "Error al conectar con el servidor.");
            } else {
                setError("Error inesperado.");
            }

        }
    }

    return (
        <form onSubmit={handleSumbit}>
            <div className="mb-3">
                <label htmlFor="userAdmin" className="form-label">Ingrese su usuario:</label>
                <input type="text" className="form-control" id="userAdmin"
                value={user} onChange={(e) => setUser(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="passAdmin" className="form-label">Ingrese su contraseña:</label>
                <input type="password" className="form-control" id="passAdmin"
                value={pass} onChange={(e) => setPass(e.target.value)}/>
            </div>

        { error && <div className="alert alert-danger">{error}</div> }

            <button type="submit" id="btnIniciarSesion" className="btn colorPrimario "
            data-bs-theme="dark" >Iniciar sesión...</button>
        </form>
    )
}
