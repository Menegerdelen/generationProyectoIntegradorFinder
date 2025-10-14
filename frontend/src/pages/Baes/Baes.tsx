import BAESAcceso from "../../components/BaesComponents/cards/Baesacceso"
import BAESFuncionamiento from "../../components/BaesComponents/cards/Baesfuncionamiento"
import BAESInfo from "../../components/BaesComponents/cards/Baesinfo"
import Header from "../../components/BaesComponents/hero/HeroBaes"

import './baes.css'

export const BAES = () => {
    return (
        <>
        <Header />
        <div className="container my-5">
            <BAESInfo />
            <BAESAcceso />
            <BAESFuncionamiento/>
        </div>
        </>
    )
}