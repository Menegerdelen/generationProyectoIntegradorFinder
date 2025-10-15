import React from "react";

export default function OrientaTestCard() {
  return (
    <div className="card orienta-card text-center mb-4">
      {/* Header a ancho completo */}
      <div className="card-header orienta-card-header">Test Vocacional</div>

      <div className="card-body">
        <p className="card-text">
          ¿Sabías que existen los test vocacionales? Son cuestionarios que te ayudan a
          descubrir qué carreras van más con tus intereses, habilidades y lo que te gusta.
          Si no tienes claro qué estudiar o en qué trabajar, pueden darte pistas útiles
          para elegir mejor tu camino. <br /> Te dejamos uno a continuación:
        </p>
       <a
            href="https://testvocacional.udla.cl/
"
            className="orienta-btn mt-3 d-inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Vamos!
          </a>
      </div>
    </div>
  );
}
