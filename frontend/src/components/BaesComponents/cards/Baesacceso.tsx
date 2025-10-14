// src/components/BAESAcceso.jsx

import Card from "./Card";

const BAESAcceso = () => {
  return (
    <section id="">
      <Card
        title="¿Quiénes pueden acceder a la BAES?"
        text="Pueden acceder los estudiantes de educación superior que cumplan con ciertos requisitos establecidos por Junaeb."
      >
        <div className="row mt-3">
          <div className="col-sm-6 mb-3">
            <Card
              title="Estudiantes"
              text="Deben pertenecer a una institución acreditada y estar matriculados en jornada regular."
              className="custom-card custom-cardBaes"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <Card
              title="Ingresos"
              text="Pertenecer a los primeros cinco deciles de ingresos según Registro Social de Hogares."
              className="custom-card custom-cardBaes"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <Card
              title="Postulación"
              text="Se realiza automáticamente al postular a beneficios estudiantiles de Junaeb."
              className="custom-card custom-cardBaes"
            />
          </div>

          <div className="col-sm-6 mb-3">
            <Card
              title="Mantenimiento"
              text="Se debe mantener la condición socioeconómica y rendimiento académico requerido."
              className="custom-card custom-cardBaes"
            />
          </div>
        </div>

        <Card
          title="Ejemplo"
          text="Un estudiante beneficiario recibe $45.000 mensuales, los cuales puede usar en locales asociados a Sodexo o Edenred para comprar alimentos."
          className="mt-4 custom-card custom-cardBaes"
        />
      </Card>
    </section>
  );
};

export default BAESAcceso;

