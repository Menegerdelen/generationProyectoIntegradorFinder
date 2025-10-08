import { useState } from "react"
import type { Equipo } from "./types/Equipo"



interface TarjetaProps {
    member: Equipo
}

export const Tarjetas = ( { member }: TarjetaProps ) => {

    const [expandir, setExpandir] = useState( false )
    const accionExpandir = () => setExpandir( !expandir )

    return (
        <div className="card colorPrimario " >
            <img src={ member.image } className="p-4 img-fluid rounded-circle" alt={ member.name } />
            <div className="card-body  text-light">
                <h3 className="nombre fw-bold">{ member.name }</h3>
                <h4 className="cargo">{ member.position }</h4>

                <button className="btn btn-outline-light mt-3" onClick={accionExpandir}>
                    { expandir ? 'Mostrar menos' : 'Ver más info'}
                </button>

                { expandir && (
                    <div className="my-3">
                        <a href={ `mailto:${ member.email }` }>
                            <img src="https://img.shields.io/badge/📧_Envíame_un_Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="" />
                        </a>

                        <div className="my-3">
                            <a href={ member.linkedin } target="_blank">
                                <img src="https://img.shields.io/badge/🤝_Conecta_en_LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" />
                            </a>
                        </div>

                        <div className="mb-3">
                            <a href={ member.portafolio } target="_blank">
                            <img src="https://img.shields.io/badge/Mira_mi_Portafolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white&labelColor=FF5722" alt="" /></a>
                        </div>
                        <a href="https://web.whatsapp.com/" target="_blank">
                            <img src="https://img.shields.io/badge/💬_Chat_en_WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
