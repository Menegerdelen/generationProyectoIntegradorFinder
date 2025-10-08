
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
    onDetalleCreado: () => void;
}

interface Universidad {
    id_universidad: number;
    nombre: string;
}


export const FormNuevoDetalle = ({ onDetalleCreado }: Props) => {
    const [web, setWeb] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [comuna, setComuna] = useState("");
    const [idUniversidad, setIdUniversidad] = useState<number>(0);

    const [universidades, setUniversidades] = useState<Universidad[]>([]);

    const [error, setError] = useState("");
    const [exito, setExito] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setExito("");

        try {
        const { data } = await axios.post("http://localhost:3000/api/detalles", {
            web: web || null,
            email: email || null,
            telefono: telefono || null,
            direccion: direccion || null,
            comuna: comuna || null,
            id_universidad: idUniversidad
        });

        if (data.status === 201) {
            setExito("Detalle creado con éxito.");
            setWeb("");
            setEmail("");
            setTelefono("");
            setDireccion("");
            setComuna("");
            setIdUniversidad(0);
            onDetalleCreado();
        } else {
            setError(data.msg);
        }
        } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(error.response?.data?.msg || "Error al crear detalle.");
        } else {
            setError("Error inesperado.");
        }
        }
    };

    useEffect(() => {
        const fetchUniversidades = async () => {
            try {
            const { data } = await axios.get("http://localhost:3000/api/universidades");
            if (data.status === 200 && data.datos) {
                setUniversidades(data.datos);
            }
            } catch (error) {
            console.error("Error al cargar universidades", error);
            }
        };

        fetchUniversidades();
    }, []);


    return (
        <div className="card mb-4">
        <div className="card-body">
            <h5>Crear nuevo detalle</h5>
            {error && <div className="alert alert-danger">{error}</div>}
            {exito && <div className="alert alert-success">{exito}</div>}

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Web:</label>
                <input type="text" className="form-control" value={web} onChange={(e) => setWeb(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Teléfono:</label>
                <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Dirección:</label>
                <input type="text" className="form-control" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Comuna:</label>
                <input type="text" className="form-control" value={comuna} onChange={(e) => setComuna(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">ID Universidad:</label>
                <select
                    className="form-select"
                    value={idUniversidad}
                    onChange={(e) => setIdUniversidad(parseInt(e.target.value))}
                    required
                >
                    <option disabled>Selecciona una universidad</option>
                    {universidades.map((uni) => (
                    <option key={uni.id_universidad} value={uni.id_universidad}>
                        {uni.id_universidad}: {uni.nombre}
                    </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Crear detalle</button>
            </form>
        </div>
        </div>
    );
};