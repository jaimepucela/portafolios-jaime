import { useState } from "react"
import "./contador.css"
export const Contador = () => {
 
 const [valor, setvalor] = useState(0)
 
 const subir = () => {
        setvalor(valor + 1)
 }
 const bajar = () =>{
    if(valor >= 1 ){
        setvalor(valor - 1)
    }
   
 }
 
    return (
    <div >
      <div className="container">
        <h3>Este contador esta creado a mis principios de la programación cuando no sabia muy bien programar y es el ejercicio que aconsejo hacer de primeras . Con este ejercicio aprendes el uso del useState que es uno de los mas importantes para cambiar cosas en el DOM</h3>
      </div>
      <div className="contenedor-contador">
        <h1 className="contador">Contador</h1>
        <p className="parrafo-contador">{valor}</p>
        <button onClick={bajar} className="boton1" id="botones-contador">-</button>
        <button onClick={subir}  className="boton2" id="botones-contador">+</button>
    </div>
    </div>
  )
}
