# 🎓 Proyecto Integrador Generation — *Finder*

Plataforma web enfocada en estudiantes chilenos, que permite explorar universidades por región, visualizar detalles institucionales y acceder a información sobre beneficios como BAES y TNE. El objetivo es centralizar y simplificar el acceso a datos relevantes para la comunidad estudiantil.

---

## 🚀 Tecnologías utilizadas

![React](https://img.shields.io/badge/React-v19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.3.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-v7.1.9-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node](https://img.shields.io/badge/Nodejs-v22.18.0-646CFF?style=for-the-badge&logo=nodejs&logoColor=white)
![Express](https://img.shields.io/badge/Expressjs-v4.18.2-646CFF?style=for-the-badge&logo=express&logoColor=white)

- **React + Vite + TypeScript**: SPA con rutas dinámicas y componentes reutilizables.
- **Node.js + Express**: Backend RESTful que gestiona universidades, detalles y regiones.
- **PostgreSQL**: Base de datos relacional para entidades y relaciones.
- **Axios**: Comunicación entre frontend y backend.
- **Bootstrap**: Estilos rápidos y responsivos.

---

## 🗂️ Estructura del proyecto
- /frontend     → Aplicación React con vistas públicas y admin
- /backend      → API REST con controladores, servicios y conexión a PostgreSQL

## 🧩 Funcionalidades principales

- 🗺️ Mapa interactivo para explorar universidades por región
- 🏫 Panel admin para gestionar universidades y sus detalles
- 📋 Formularios para crear, editar y eliminar registros
- 🔗 Navegación clara con Navbar y Footer persistentes
- 🧱 Layout modular para vistas admin con rutas anidadas

---

## 🧪 Cómo correr el proyecto

### Backend
```bash
cd backend
npm install
# Configura tu archivo .env con credenciales de PostgreSQL
npm run dev
```

### Backend
```bash
cd frontend
npm install
npm run dev
```
---

## 📚 Créditos y agradecimientos
Este proyecto fue desarrollado como parte del programa Generation Chile.










