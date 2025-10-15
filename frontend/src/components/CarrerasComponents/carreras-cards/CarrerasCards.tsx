import React from 'react';
import './cards.css';
export default function CarrerasCards() {
  return (
    <section id="carreras-sec-info1" className="container my-5"> 
      {/* Card 1 */}
      <div className="card carreras-card mb-4">
        <div className="carreras-card-header text-center">
          <h5 className="carreras-card-title">Puntajes mínimos para cada carrera</h5>
        </div>
        <div className="carreras-card-body text-center">
          <p className="carreras-card-text">
            El puntaje mínimo para postular a una carrera universitaria es de 458 puntos
            (prueba de competencia lectora y matemática 1) de la PAES.
            <br />
            En el siguiente enlace puedes buscar tu carrera universitaria y saber detalles
            sobre puntaje y otros requisitos:
          </p>
           {/* Link en nueva pestaña */}
          <a
            href="https://acceso-sup.mineduc.cl/acceso-buscador/buscador-cu"
            className="carreras-btn mt-3 d-inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Vamos!
          </a>

          <p className="carreras-card-text mt-3">
            Y aquí puedes buscar carreras técnico profesionales:
          </p>
           <a
            href="https://acceso-sup.mineduc.cl/acceso-buscador/buscador-ctp
"
            className="carreras-btn mt-3 d-inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Vamos!
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card carreras-card">
        <div className="carreras-card-header text-center">
          <h5 className="carreras-card-title">
            ¿Dónde puedo encontrar toda la info oficial y actualizada sobre las universidades
            y el proceso de postulación?
          </h5>
        </div>
        <div className="carreras-card-body text-center">
          <p className="carreras-card-text">
            En Chile hay muchísimas opciones para estudiar, pero para no perderte,
            te dejamos el portal de postulación centralizada: ahí tienes toda la info
            y los enlaces top sobre el proceso de admisión a la educación superior.
          </p>
           <a
            href="https://acceso.mineduc.cl/postulacioncentralizada/
"
            className="carreras-btn mt-3 d-inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Vamos!
          </a>
        </div>
      </div>
    </section>
  );
}
