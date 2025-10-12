

import { datosTarjetas, type Datos } from './dataCards'



export const NSCCards = () => {
    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {datosTarjetas.map((cards: Datos) => (
                <div className="col" key={cards.id}>
                    <a href={cards.link} className="card-link">
                    <div className="card h-100">
                        <img
                        src={cards.imagenSrc}
                        className="card-img-top"
                        alt={cards.imagenAlt}
                        />
                        <div className="card-body text-center">
                        <h5 className="card-title">{cards.titulo}</h5>
                        <p className="card-text">
                            {cards.descripcion}
                        </p>
                        </div>
                    </div>
                    </a>
                </div>
            ))}

        </div>
        </>
    )
    }
