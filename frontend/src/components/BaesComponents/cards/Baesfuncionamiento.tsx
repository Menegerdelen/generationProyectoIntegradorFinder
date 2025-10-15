// src/components/BAESFuncionamiento.jsx

import Card from "./Card";

const BAESFuncionamiento = () => {
  return (
 <div className="row mt-5">
      <div className="col-sm-6 mb-3">
        <Card title="¿Cómo funciona la BAES?">
          <h2 id="baes-monto">$45.000</h2>
          <h4>Monto mensual aproximado</h4>
          <p>(entregado en cuotas de $1.500 diarios hábiles)</p>
          <h5>Se deposita en una tarjeta electrónica <br /> (Sodexo o Edenred)</h5>
          <h4>Usos permitidos</h4>
          <div className="text-center mt-3">
            <button className="baes-btn">Supermercados</button>
            <button className="baes-btn">Minimarkets</button>
            <br />
            <button className="baes-btn">Casinos locales de comida autorizada</button>
          </div>
        </Card>
      </div>

      <div className="col-sm-6">
        <Card title="¿Qué beneficios adicionales ofrece?">
          <div className="col">
            <Card text="Hábitos de vida saludable" className="baes-custom-card" />
          </div>
          <div className="col">
            <Card text="Apoyo integral a estudiantes vulnerables" className="baes-custom-card" />
          </div>
          <div className="col">
            <Card text="Programas de promociones especiales para beneficiarios" className="baes-custom-card" />
          </div>
          <div className="col">
            <Card text="Material educativo sobre nutrición" className="baes-custom-card" />
          </div>
          <div className="col">
            <Card text="Revisión en línea de asignación de beneficios estudiantiles (enero y marzo)" className="baes-custom-card" />
          </div>
          <a href="#" className="baes-btn mt-3">Consulta tus resultados aquí</a>
        </Card>
      </div>
    </div>
  );
};

export default BAESFuncionamiento;

