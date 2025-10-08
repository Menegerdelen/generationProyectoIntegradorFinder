

import { useEffect, useState } from "react";
import axios from "axios";
import { FormNuevoDetalle } from "../../components/DetForm/NuevoDetalle";


interface Detalle {
    id_detalle: number;
    web: string | null;
    email: string | null;
    telefono: string | null;
    direccion: string | null;
    comuna: string | null;
    id_universidad: number;
}

const detURL = "http://localhost:3000/api/detalles-universidades";

export const DetAdmin = () => {
    const [detalles, setDetalles] = useState<Detalle[]>([]);
    const [error, setError] = useState("");
    const [detalleEditando, setDetalleEditando] = useState<Detalle | null>(null);

    const [editWeb, setEditWeb] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editTelefono, setEditTelefono] = useState("");
    const [editDireccion, setEditDireccion] = useState("");
    const [editComuna, setEditComuna] = useState("");
    const [editUniversidad, setEditUniversidad] = useState<number>(0);

    const obtenerDetalles = async () => {
        try {
        const { data } = await axios.get(detURL);
        if (data.status === 200 && data.datos) {
            setDetalles(data.datos);
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al obtener detalles.");
        } else {
            setError("Error inesperado.");
        }
        }
    };

    useEffect(() => {
        obtenerDetalles();
    }, []);

    const handleEditar = (det: Detalle) => {
        setDetalleEditando(det);
        setEditWeb(det.web || "");
        setEditEmail(det.email || "");
        setEditTelefono(det.telefono || "");
        setEditDireccion(det.direccion || "");
        setEditComuna(det.comuna || "");
        setEditUniversidad(det.id_universidad);
    };

    const cancelarEdicion = () => {
        setDetalleEditando(null);
        setEditWeb("");
        setEditEmail("");
        setEditTelefono("");
        setEditDireccion("");
        setEditComuna("");
        setEditUniversidad(0);
    };

    const guardarCambios = async () => {
        if (!detalleEditando) return;

        try {
        const { data } = await axios.put(`${detURL}/${detalleEditando.id_detalle}`, {
            web: editWeb,
            email: editEmail,
            telefono: editTelefono,
            direccion: editDireccion,
            comuna: editComuna,
            id_universidad: editUniversidad
        });

        if (data.status === 200) {
            setDetalles((prev) =>
            prev.map((d) =>
                d.id_detalle === detalleEditando.id_detalle
                ? {
                    ...d,
                    web: editWeb,
                    email: editEmail,
                    telefono: editTelefono,
                    direccion: editDireccion,
                    comuna: editComuna,
                    id_universidad: editUniversidad
                    }
                : d
            )
            );
            cancelarEdicion();
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al actualizar detalle.");
        } else {
            setError("Error inesperado.");
        }
        }
    };

    const handleEliminar = async (id: number) => {
        const confirmar = window.confirm("¿Seguro que deseas eliminar este detalle?");
        if (!confirmar) return;

        try {
        const { data } = await axios.delete(`${detURL}/${id}`);
        if (data.status === 200) {
            setDetalles((prev) => prev.filter((d) => d.id_detalle !== id));
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al eliminar detalle.");
        } else {
            setError("Error inesperado.");
        }
        }
    };

    return (
        <div className="container my-5">
        <div className="text-center my-3">
            <h2>Listado de Detalles de Universidades</h2>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>

        <FormNuevoDetalle onDetalleCreado={obtenerDetalles} />

        {detalleEditando && (
            <div className="card mt-4">
                <div className="card-body">
                    <h5>Editar detalle ID: {detalleEditando.id_detalle}</h5>
                    <div className="mb-3">
                    <label className="form-label">Web:</label>
                    <input type="text" className="form-control" value={editWeb} onChange={(e) => setEditWeb(e.target.value)} />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" value={editTelefono} onChange={(e) => setEditTelefono(e.target.value)} />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Dirección:</label>
                    <input type="text" className="form-control" value={editDireccion} onChange={(e) => setEditDireccion(e.target.value)} />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Comuna:</label>
                    <input type="text" className="form-control" value={editComuna} onChange={(e) => setEditComuna(e.target.value)} />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">ID Universidad:</label>
                    <input type="number" className="form-control" value={editUniversidad} onChange={(e) => setEditUniversidad(parseInt(e.target.value))} />
                    </div>
                    <button className="btn btn-primary me-2" onClick={guardarCambios}>Guardar cambios</button>
                    <button className="btn btn-secondary" onClick={cancelarEdicion}>Cancelar</button>
                </div>
            </div>
        )}

        <table className="table table-bordered table-hover mt-4">
            <thead className="table-dark">
            <tr>
                <th>ID</th>
                <th>Web</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Comuna</th>
                <th>ID Universidad</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
            </tr>
            </thead>
            <tbody>
            {detalles.map((det) => (
                <tr key={det.id_detalle}>
                <td>{det.id_detalle}</td>
                <td>{det.web || "—"}</td>
                <td>{det.email || "—"}</td>
                <td>{det.telefono || "—"}</td>
                <td>{det.direccion || "—"}</td>
                <td>{det.comuna || "—"}</td>
                <td>{det.id_universidad}</td>
                <td>
                    <button className="btn btn-success btn-sm" onClick={() => handleEditar(det)}>Editar</button>
                </td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(det.id_detalle)}>Eliminar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};
