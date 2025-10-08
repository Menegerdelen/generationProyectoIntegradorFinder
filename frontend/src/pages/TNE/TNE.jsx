
import { Hero } from '../../components/TNE/Hero/Hero';
import { Card } from '../../components/TNE/Card/Card';
import { Enlaces } from '../../components/TNE/Enlaces/Enlaces';
import { Frecuentes } from '../../components/TNE/Frecuentes/Frecuentes';
import { Informacion} from '../../components/TNE/Informacion/Informacion';

import './tne.css'

export const TNE = () => {
    return (
        <>
            <Hero/>
            <Card />
            <Enlaces />
            <Frecuentes />
            <Informacion />
        </>
    )
}