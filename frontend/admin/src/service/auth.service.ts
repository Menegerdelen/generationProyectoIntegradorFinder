

export interface LoginRespuesta {
    msg: string,
    status: number,
    datos: {
        id_admin: number,
        user_admin: string,
        role_admin: boolean
    } | null
}

export interface LoginAcceso {
    user_admin: string,
    pass_admin: string,
}