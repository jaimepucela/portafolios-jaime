import { useState } from "react"
import "./pelicula.css"

export const Peliculas = () => {

    const [peliculas, setpeliculas] = useState([])
    const [buscar, setbuscar] = useState(``)
    
    const lista = async() =>{
        const datos = await fetch(`https://api.themoviedb.org/3/search/movie?query=${buscar}&api_key=6e418de3e5eed21f8391d1eb116392ed`)
        const data = await datos.json()
        setpeliculas(data.results)
    }
    const target = (e)=>{
        setbuscar(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault()
        lista()
    }



  return (
    <div>
        <div className="container">
        <h1>Buscador de películas es igual que la del tiempo pero con una api de buscar películas</h1>
        <img src="../public/img/cine.jpg" className="cine-imagen" />
        <form onSubmit={submit} className="formulario cine-formulario">
  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" value={buscar} onChange={target} /> 
  </div>
  <button type="submit" className="btn btn-primary boton-buscar">Buscar</button>
</form>
<div className="contenedor-cartas">
{peliculas.map(peli=>
    <div className="cartas">
         <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}  />
        <h1>{peli.title}</h1>
        <h1>Popularidad : <span className="popularidad">{parseInt(peli.vote_average)}</span></h1>
    </div>)}
</div>
    </div>
  </div>
  )
}
