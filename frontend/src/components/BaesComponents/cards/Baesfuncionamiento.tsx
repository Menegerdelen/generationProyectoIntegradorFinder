// src/components/BAESFuncionamiento.jsx

import Card from "./Card";

const BAESFuncionamiento = () => {
  return (
    <div className="row mt-5">
      {/* Columna izquierda: Cómo funciona la BAES */}
      <div className="col-sm-6 mb-3">
        <Card title="¿Cómo funciona la BAES?">
          <h2 id="cuarentacinco">$45.000</h2>
          <h4>Monto mensual aproximado</h4>
          <p>(entregado en cuotas de $1.500 diarios hábiles)</p>
          <h5>Se deposita en una tarjeta electrónica <br /> (Sodexo o Edenred)</h5>
          <h4>Usos permitidos</h4>
          <div className="text-center mt-3">
            <button className="custom-btn custom-btnBaes">Supermercados</button>
            <button className="custom-btn custom-btnBaes">Minimarkets</button>
            <br />
            <button className="custom-btn custom-btnBaes">Casinos locales de comida autorizada</button>
          </div>
        </Card>
      </div>

      {/* Columna derecha: Beneficios adicionales */}
      <div className="col-sm-6">
        <Card title="¿Qué beneficios adicionales ofrece?">
          <div className="col">
            <Card
              text="Hábitos de vida saludable"
              className="custom-card custom-cardBaes"
            />
          </div>
          <div className="col">
            <Card
              text="Apoyo integral a estudiantes vulnerables"
              className="custom-card custom-cardBaes"
            />
          </div>
          <div className="col">
            <Card
              text="Programas de promociones especiales para beneficiarios"
              className="custom-card custom-cardBaes"
            />
          </div>
          <div className="col">
            <Card
              text="Material educativo sobre nutrición"
              className="custom-card custom-cardBaes"
            />
          </div>
          <div className="col">
            <Card
              text="Revisión en línea de asignación de beneficios estudiantiles (enero y marzo)"
              className="custom-card custom-cardBaes"
            />
          </div>

          <a href="#" className="btn custom-btn custom-btnBaes mt-3">
            Consulta tus resultados aquí
          </a>
        </Card>
      </div>
    </div>
  );
};

export default BAESFuncionamiento;

