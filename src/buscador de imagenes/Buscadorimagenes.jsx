import "./buscadorimagenes.css"
import { useState } from "react"

export const Buscadorimagenes = () => {
 
  const laLLave = "PIHi1_KR8zNzEV1ZnQzR4dkvDpfhyjrT-S-o9iT7mq4"

  const [imagenes, setimagenes] = useState("")
  const [buscar, setbuscar] = useState([])
  const lista = async() =>{
    const datos = await fetch(`https://api.unsplash.com/search/photos/?client_id=${laLLave}&query=${imagenes}`)
    const data = await datos.json()
    setbuscar(data.results)
    console.log(data.results)
  }
  const target = (e) =>{
    setimagenes(e.target.value)
  }
const submit = (e)=>{
    e.preventDefault()
    lista()
}
    return (
    <div>
      <div className="container">
      <h1>Buscador de fotos , es una api de buscar fotos y si vas a la página puedes descargar la foto</h1>
      </div>
       <form  onSubmit={submit} className="formulario">
  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" value={imagenes} onChange={target}/> 
  </div>
  <button type="submit" className="btn btn-primary boton-buscar">Buscar</button>
</form>

<div className="contenedor-fotos">
  {buscar.map((element)=>(
   <div key={element.id}className="cart">
    <img src={element.urls.small} />
    <a href={element.links.html} target="_blank"><button>Ir a la página para descargar la foto</button></a>
   </div>
  ))}


</div>

    </div>
  )
}
