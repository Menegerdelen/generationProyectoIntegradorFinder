

    export const Card = () => {
    return (
    <section id="sec-info1" className="mt-5">
        <div className="container">
        <div className="row g-4">
            {/* Tarjeta izquierda */}
            <div className="col-lg-6">
            <div className="card h-100">
                <div className="card-body">
                <h5 className="card-title">¿Quiénes pueden solicitar la TNE?</h5>
                <br />
                <ul>
                    <li>
                    Estudiantes de 5° básico a 4° medio en colegios municipales o
                    subvencionados.
                    </li>
                    <li>
                    Estudiantes de pregrado en universidades o institutos
                    reconocidos por el Mineduc.
                    </li>
                    <li>
                    Estudiantes de 5° básico a 4° medio en colegios particulares
                    pagados necesitan una carta que demuestre que su familia tiene
                    un ingreso bajo (menos de $352.743 por persona).
                    </li>
                    <li>
                    Estudiantes de Magíster o Doctorado con situación
                    socioeconómica según lo que diga su institución.
                    </li>
                </ul>
                </div>
            </div>
            </div>
            {/* Tarjeta derecha */}
            <div className="col-lg-6">
            <div className="card h-100">
                <div className="card-body">
                <h5 className="card-title">¿Cuándo debes sacar una nueva TNE?</h5>
                <p className="card-text">
                    Cada vez que un estudiante pasa a 5º básico, 1º medio o entra a
                    la educación superior, tiene que sacarse una nueva foto para la
                    TNE, que usará hasta que cambie de ciclo y tenga que renovarla.
                </p>
                <h5 className="card-title">
                    ¿Cuándo debes revalidar tu actual tarjeta?
                </h5>
                <p className="card-text">
                    Si ya tienes tu TNE antes del 31 de mayo, debes revalidarla para
                    seguir con la tarifa rebajada.
                </p>
                <h5 className="card-title">¿Cuándo debes sacar una nueva TNE?</h5>
                <p className="card-text">
                    La reposición se hace si la TNE está muy dañada, se pierde, se
                    roba, o si el estudiante volvió a estudiar y tenía una tarjeta
                    anterior a 2015. Se reimprime la nueva y se elimina la anterior.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>  )
    }
