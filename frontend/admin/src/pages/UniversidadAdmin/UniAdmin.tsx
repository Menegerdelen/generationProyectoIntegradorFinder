

import { useEffect, useState } from "react";
import axios from "axios";
import { FormNuevaUniversidad } from "../../components/Universidad/NuevaUni";

interface Universidad {
    id_universidad: number;
    nombre: string;
    id_financiacion: number;
    id_region: string;
}

const uniURL = "http://localhost:3000/api/universidades";

export const UniAdmin = () => {
    const [universidades, setUniversidades] = useState<Universidad[]>([]);
    const [error, setError] = useState("");
    const [uniEditando, setUniEditando] = useState<Universidad | null>(null);
    const [editNombre, setEditNombre] = useState("");
    const [editFinanciacion, setEditFinanciacion] = useState<number>(0);
    const [editRegion, setEditRegion] = useState("");

    const obtenerUniversidades = async () => {
        try {
        const { data } = await axios.get(uniURL);
        if (data.status === 200 && data.datos) {
            setUniversidades(data.datos);
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al obtener universidades.");
        } else {
            setError("Error inesperado.");
        }
        }
    };

    useEffect(() => {
        obtenerUniversidades();
    }, []);

    const handleEditar = (uni: Universidad) => {
        setUniEditando(uni);
        setEditNombre(uni.nombre);
        setEditFinanciacion(uni.id_financiacion);
        setEditRegion(uni.id_region);
    };

    const cancelarEdicion = () => {
        setUniEditando(null);
        setEditNombre("");
        setEditFinanciacion(0);
        setEditRegion("");
    };

    const guardarCambios = async () => {
        if (!uniEditando) return;

        try {
        const { data } = await axios.put(`${uniURL}/${uniEditando.id_universidad}`, {
            nombre: editNombre,
            id_financiacion: editFinanciacion,
            id_region: editRegion
        });

        if (data.status === 200) {
            setUniversidades((prev) =>
            prev.map((u) =>
                u.id_universidad === uniEditando.id_universidad
                ? { ...u, nombre: editNombre, id_financiacion: editFinanciacion, id_region: editRegion }
                : u
            )
            );
            cancelarEdicion();
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al actualizar universidad.");
        } else {
            setError("Error inesperado.");
        }
        }
    };

    const handleEliminar = async (id: number) => {
        const confirmar = window.confirm("¿Seguro que deseas eliminar esta universidad?");
        if (!confirmar) return;

        try {
        const { data } = await axios.delete(`${uniURL}/${id}`);
        if (data.status === 200) {
            setUniversidades((prev) => prev.filter((u) => u.id_universidad !== id));
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al eliminar universidad.");
        } else {
            setError("Error inesperado.");
        }
        }
    };

    return (
        <div className="container my-5">
        <div className="text-center my-3">
            <h2>Listado de Universidades</h2>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>

        <FormNuevaUniversidad onUniversidadCreada={obtenerUniversidades} />


        {uniEditando && (
            <div className="card mt-4">
            <div className="card-body">
                <h5>Editar universidad ID: {uniEditando.id_universidad}</h5>
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
                <div className="mb-3">
                <label htmlFor="editFinanciacion" className="form-label">ID Financiación:</label>
                <input
                    type="number"
                    id="editFinanciacion"
                    className="form-control"
                    value={editFinanciacion}
                    onChange={(e) => setEditFinanciacion(parseInt(e.target.value))}
                />
                </div>
                <div className="mb-3">
                <label htmlFor="editRegion" className="form-label">ID Región:</label>
                <input
                    type="text"
                    id="editRegion"
                    className="form-control"
                    value={editRegion}
                    onChange={(e) => setEditRegion(e.target.value)}
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
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>ID Financiación</th>
                    <th>ID Región</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
            {universidades.map((uni) => (
                <tr key={uni.id_universidad}>
                    <td>{uni.id_universidad}</td>
                    <td>{uni.nombre}</td>
                    <td>{uni.id_financiacion}</td>
                    <td>{uni.id_region}</td>
                    <td>
                        <button className="btn btn-success btn-sm" onClick={() => handleEditar(uni)}>
                        Editar
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(uni.id_universidad)}>
                        Eliminar
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>


        </div>
    );
};
