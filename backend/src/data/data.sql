

CREATE TABLE IF NOT EXISTS regiones(
    id SERIAL PRIMARY KEY,
    id_region VARCHAR(4) UNIQUE,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS financiacion(
    id_financiacion SERIAL PRIMARY KEY,
    tipo VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS universidades(
    id_universidad SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_financiacion INT NOT NULL REFERENCES financiacion(id_financiacion),
    id_region VARCHAR(4) NOT NULL REFERENCES regiones(id_region)
);

CREATE TABLE IF NOT EXISTS detalles(
    id_detalle SERIAL PRIMARY KEY,
    web VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(20),
    direccion VARCHAR(255),
    comuna VARCHAR(100),
    id_universidad INT NOT NULL REFERENCES universidades(id_universidad)
);


CREATE TABLE IF NOT EXISTS admins(
    id_admin SERIAL PRIMARY KEY,
    user_admin VARCHAR(50) NOT NULL UNIQUE,
    pass_admin VARCHAR(50) NOT NULL,
    role_admin BOOLEAN NOT NULL
)