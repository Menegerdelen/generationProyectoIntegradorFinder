import { Tarjetas } from "./Tarjetas"
import type { Equipo } from "./types/Equipo"


interface SectionProps {
    members: Equipo[]
}

export const SectionCard = ( { members }: SectionProps ) => {
    return (
        <div className="row g-4 text-center justify-content-center">
            { members.map( member => (
                <div key={ member.id } className="col-12 col-md-6 col-lg-6 col-xl-3">
                    <Tarjetas member={ member }/>
                </div>
            )) }
        </div>
    )
}
