import { useState } from "react";
import axios from "axios";

import { regionesData } from '../../../../src/components/MapaComponents/data/regiones.data'

interface Props {
    onUniversidadCreada: () => void;
}

export const FormNuevaUniversidad = ({ onUniversidadCreada }: Props) => {
    const [nombre, setNombre] = useState("");
    const [idFinanciacion, setIdFinanciacion] = useState<number>(0);
    const [idRegion, setIdRegion] = useState("");
    const [error, setError] = useState("");
    const [exito, setExito] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setExito("");

        try {
        const { data } = await axios.post("http://localhost:3000/api/universidades", {
            nombre,
            id_financiacion: idFinanciacion,
            id_region: idRegion
        });

        if (data.status === 201) {
            setExito("Universidad creada con éxito.");
            setNombre("");
            setIdFinanciacion(0);
            setIdRegion("");
            onUniversidadCreada(); // Recargar lista
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al crear universidad.");
        } else {
            setError("Error inesperado.");
        }
        }
    };

    return (
        <div className="card mb-4">
        <div className="card-body">
            <h5>Crear nueva universidad</h5>
            {error && <div className="alert alert-danger">{error}</div>}
            {exito && <div className="alert alert-success">{exito}</div>}

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input
                type="text"
                id="nombre"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="financiacion" className="form-label">ID Financiación:</label>
                <select
                    id="financiacion"
                    className="form-select"
                    value={idFinanciacion}
                    onChange={(e) => setIdFinanciacion(parseInt(e.target.value))}
                    required
                >
                    <option disabled >Selecciona una opción</option>
                    <option value={1}>1: Estatal</option>
                    <option value={2}>2: Privada</option>
                    <option value={3}>3: Mixta</option>
                </select>

            </div>
            <div className="mb-3">
                <label htmlFor="region" className="form-label">ID Región:</label>
                <select
                    id="region"
                    className="form-select"
                    value={idRegion}
                    onChange={(e) => setIdRegion(e.target.value)}
                    required
                >
                    <option disabled>Selecciona una región</option>
                    {regionesData.map((reg) => (
                    <option key={reg.id} value={reg.id_region}>
                        {reg.id_region} {reg.name.trim()}
                    </option>
                    ))}
                </select>

            </div>
            <button type="submit" className="btn btn-primary">Crear universidad</button>
            </form>
        </div>
        </div>
    );
};
