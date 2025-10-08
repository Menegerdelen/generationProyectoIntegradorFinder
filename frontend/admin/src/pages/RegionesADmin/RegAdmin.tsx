
import { useEffect, useState } from "react"

import axios from "axios"

interface Region {
    id: number
    id_region: string,
    nombre: string
}

const regURL = 'http://localhost:3000/api/regiones'


export const RegAdmin = () => {
    const [regiones, setRegiones] = useState<Region[]>([])
    const [error, setError] = useState('')
    const [regionEditando, setRegionEditando] = useState<Region | null>(null);
    const [editIdRegion, setEditIdRegion] = useState('');
    const [editNombre, setEditNombre] = useState('');

    const obtenerRegiones = async () => {
        try {
            const { data } = await axios.get(regURL);
            if (data.status === 200 && data.datos) {
                setRegiones(data.datos);
            } else {
                setError(data.msg)
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.msg || "Error al obtener regiones.");
            } else {
                setError("Error inesperado.");
            }

        }
    }

    useEffect(() => {
        obtenerRegiones()
    }, [])
    

    const handleEditar = (region: Region) => {
        setRegionEditando(region);
        setEditIdRegion(region.id_region);
        setEditNombre(region.nombre);
    };

    const cancelarEdicion = () => {
        setRegionEditando(null);
        setEditIdRegion('');
        setEditNombre('');
    };

    const guardarCambios = async () => {
        if (!regionEditando) return;

        try {
        const { data } = await axios.put(`${regURL}/${regionEditando.id}`, {
            id_region: editIdRegion,
            nombre: editNombre
        });

        if (data.status === 200) {
            setRegiones((prev) =>
            prev.map((r) =>
                r.id === regionEditando.id
                ? { ...r, id_region: editIdRegion, nombre: editNombre }
                : r
            )
            );
            cancelarEdicion();
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al actualizar región.");
        } else {
            setError("Error inesperado.");
        }
        }
    };

    const handleEliminar = async (id: number) => {
        const confirmar = window.confirm("¿Seguro que deseas eliminar esta región?");
        if (!confirmar) return;

        try {
        const { data } = await axios.delete(`${regURL}/${id}`);
        if (data.status === 200) {
            setRegiones((prev) => prev.filter((r) => r.id !== id));
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al eliminar región.");
        } else {
            setError("Error inesperado.");
        }
        }
    };


    return (
        <div className="container my-5">
            <div className="text-center my-3">
                <h2 className="">Listado de Regiones</h2>
                { error && <div className="alert alert-danger">{error}</div> }
            </div>
            <div className="my-5">

                {regionEditando && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5>Editar región ID: {regionEditando.id}</h5>
                            <div className="mb-3">
                            <label htmlFor="editIdRegion" className="form-label">Nuevo código (id_region):</label>
                            <input
                                type="text"
                                id="editIdRegion"
                                className="form-control"
                                value={editIdRegion}
                                onChange={(e) => setEditIdRegion(e.target.value)}
                            />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="editNombre" className="form-label">Nuevo nombre:</label>
                            <input
                                type="text"
                                id="editNombre"
                                className="form-control"
                                value={editNombre}
                                onChange={(e) => setEditNombre(e.target.value)}
                            />
                            </div>
                            <button className="btn btn-primary me-2" onClick={guardarCambios}>
                            Guardar cambios
                            </button>
                            <button className="btn btn-secondary" onClick={cancelarEdicion}>
                            Cancelar
                            </button>
                        </div>
                    </div>
                )}

                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Id Region</th>
                            <th>Nombre</th>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        { regiones.map((reg) => (
                            <tr key={reg.id}>
                                <td>{reg.id}</td>
                                <td>{reg.id_region}</td>
                                <td>{reg.nombre}</td>
                                <td>
                                <button className="btn btn-success btn-sm" onClick={() => handleEditar(reg)}>
                                    Editar
                                </button>
                                </td>
                                <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(reg.id)}>
                                    Eliminar
                                </button>
                                </td>
                            </tr>
                        )) }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
