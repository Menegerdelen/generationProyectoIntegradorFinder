
import { NSCCards } from "./NSCCards"



    function Nosabescomenzar(){
        return(
    <section className="seccion-dos">
    <div className="contenido container py-5">
        <h1 className="text-center mb-4">¿No sabes por dónde comenzar?</h1>
        <p className="text-center mb-5">
        ¡Empieza aquí! Todo resumido y en un solo lugar.
        </p>
        {/*Tarjetas*/}
        
        <NSCCards/>

    </div>
    </section>

        )
    }

    export default Nosabescomenzar