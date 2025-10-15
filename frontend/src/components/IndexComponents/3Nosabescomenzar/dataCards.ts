
import paesIMG from "../../../assets/img/indexImg/Nosabescomenzar/PAES.png"
import baesIMG from "../../../assets/img/indexImg/Nosabescomenzar/BAES.png"
import tneIMG from "../../../assets/img/indexImg/Nosabescomenzar/TNE.png"
import admsIMG from "../../../assets/img/indexImg/Nosabescomenzar/Test vocacional.png"
import becasIMG from "../../../assets/img/indexImg/Nosabescomenzar/Becas y creditos.png"
import sicoIMG from "../../../assets/img/indexImg/Nosabescomenzar/Psicologica.png"
import preuIMG from "../../../assets/img/indexImg/Nosabescomenzar/preuniversitario.png"
import carreraIMG from "../../../assets/img/indexImg/Nosabescomenzar/CARRERAS.png"
import orientIMG from "../../../assets/img/indexImg/Nosabescomenzar/Vocación.png"

export interface Datos{
    id: number,
    titulo: string,
    descripcion: string,
    imagenSrc: string,
    imagenAlt: string,
    link: string
}

export const datosTarjetas: Datos[] = [
    {
        id: 1,
        titulo: "PAES",
        descripcion: "Prueba de Acceso a la Educación Superior.",
        imagenSrc: paesIMG,
        imagenAlt: "PAES",
        link: "/paes"
    },
    {
        id: 2,
        titulo: "BAES",
        descripcion: "Beca de alimentación para la Educación Superior.",
        imagenSrc: baesIMG,
        imagenAlt: "BAES",
        link: "/baes"
    },
    {
        id: 3,
        titulo: "TNE",
        descripcion: "Tarjeta Nacional Estudiantil.",
        imagenSrc: tneIMG,
        imagenAlt: "TNE",
        link: "/tne"
    },
    {
        id: 4,
        titulo: "Admisión",
        descripcion: "Descubre todos los detalles acerca del ingreso a IES.",
        imagenSrc: admsIMG,
        imagenAlt: "Admisión",
        link: "/admision"
    },
    {
        id: 5,
        titulo: "Becas y créditos",
        descripcion: "Descubre todo acerca de financiamiento para Educación superior.",
        imagenSrc: becasIMG,
        imagenAlt: "Becas",
        link: "/becas-y-creditos"
    },
    {
        id: 6,
        titulo: "Apoyo psicológico",
        descripcion: "Encuentra ayuda psicológica gratuita y a bajo costo.",
        imagenSrc: sicoIMG,
        imagenAlt: "Apoyo",
        link: "/apoyo-sicologico"
    },
    {
        id: 7,
        titulo: "Preuniversitarios",
        descripcion: "Descubre su utilidad y el listado.",
        imagenSrc: preuIMG,
        imagenAlt: "Preuniversitarios",
        link: "/preuniversitarios"
    },
    {
        id: 8,
        titulo: "Carreras",
        descripcion: "Infórmate acerca de los tipos de carreras que hay.",
        imagenSrc: carreraIMG,
        imagenAlt: "Carreras",
        link: "/carreras"
    },
    {
        id: 9,
        titulo: "Orientación estudiantil",
        descripcion: "¿Vas en 1° o 4° medio y no sabes qué hacer? Aquí te orientamos.",
        imagenSrc: orientIMG,
        imagenAlt: "Orientación",
        link: "/orientacion-estudiantil"
    }
];
