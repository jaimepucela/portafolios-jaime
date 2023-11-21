import { Mickey } from "./mickey/mickey"
import "./proyectos.css"
import { Wazosky } from "./wazosky/wazosky"


export const Proyectoscss = () => {
 
 
 
    return (
    <div>
        <h1 className="container">Proyectos hechos con puro css</h1>
        <div className="contenedor-proyectos">
            <div className="carta">
            <Mickey></Mickey>
            </div>
            <div className="carta">
            <Wazosky></Wazosky>
            </div>
        </div>
    </div>
  )
}
