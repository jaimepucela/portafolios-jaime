import { useState } from "react"
import "./tiempo.css"



export const Tiempo = () => {
 
const llave= "fe245caba07de72cedfbc616bcf666fc"
const diferencia = 273.15

const [buscar, setbuscar] = useState(null) 
const [ciudad, setciudad] = useState("")


const lista = async() =>{
    const datos = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp,es&appid=${llave}`)
    const data = await datos.json()
    setbuscar(data)
}

const target = (e) =>{
    setciudad(e.target.value)
}
const submit = (e) =>{
    e.preventDefault()
    lista()
}


return (
    <div className="container">
        <h1>Aplicación del tiempo creada por un formulario que hace de buscador para buscar la ciudad mediante un useState </h1>
<img src="../public/img/cielo.jpg" className="imagen-clima" />
        <form onSubmit={submit} className="formulario formulario-clima">
  <div className="mb-3 ">
    <input type="text" className="form-control" id="exampleInputEmail1" value={ciudad} onChange={target}/> 
  </div>
  <button type="submit" className="btn btn-primary boton-buscar">Buscar</button>
</form>
    
            <div className="conjunto">
    {
    buscar && (
        <div className="contenedor-tiempo">
        <h1 className="nombre-ciudad">{buscar.name}</h1>
        <hr />
        <h1 className="grados">{parseInt( buscar.main.temp - `${diferencia}`)}ºC</h1>
        <img src={`https://openweathermap.org/img/wn/${buscar.weather[0].icon}@2x.png`} className="icono-tiempo" />
        </div>
    )
    }
    </div> 
    </div>
  
  )
}
