// src/components/BAESInfo.jsx

import Card from "./Card";

const BAESInfo = () => {
  return (
    <section className="sectionBaes">
      <Card
        title="¿Qué es la BAES?"
        text="La BAES es un beneficio entregado por la Junaeb que apoya a estudiantes de educación superior con un aporte económico mensual destinado exclusivamente a alimentación."
      >
        <div className="row mt-3">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <Card
              title="Apoyo alimentario"
              text="Destinado exclusivamente a alimentación"
              className="custom-card custom-cardBaes"
            />
          </div>

          <div className="col-sm-6">
            <Card
              title="Mensual"
              text="Apoyo económico entregado cada mes."
              className="custom-card custom-cardBaes"
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default BAESInfo;

