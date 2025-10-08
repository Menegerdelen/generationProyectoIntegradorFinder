
// Region
export interface Region {
    id: number
    id_region: string,
    nombre: string
}

export interface NuevaRegion{
    id_region: string,
    nombre: string
}

// Financiadion
export interface Financiacion {
    id_financiacion: number,
    tipo: string
}

export interface NuevaFinanciacion {
    tipo: string
}

// Universidad 
export interface Universidad {
    id_universidad: number,
    nombre: string,
    id_financiacion: number,
    id_region: string
}

export interface NuevaUniversidad {
    nombre: string,
    id_financiacion: number,
    id_region: string
}

//Detalles universidades
export interface Detalles {
    id_detalle: number,
    web: string | null;
    email: string | null,
    telefono: string | null,
    direccion: string | null,
    comuna: string | null,
    id_universidad: number
}

export interface NuevoDetalle{
    web: string | null;
    email: string | null,
    telefono: string | null,
    direccion: string | null,
    comuna: string | null,
    id_universidad: number
}

export interface UniversidadCompleta {
    id_region: string;
    id_universidad: number;
    tipo_financiacion: string; 
    nombre_universidad: string; 
    
    web: string | null;
    email: string | null,
    telefono: string | null,
    direccion: string | null,
    comuna: string | null,
    nombre_region: string
}

//Admin
export interface Admin {
    id_admin: number,
    user_admin: string,
    pass_admin: string,
    role_admin: boolean
}

export interface NuevoAdmin {
    user_admin: string,
    pass_admin: string,
    role_admin: boolean
}