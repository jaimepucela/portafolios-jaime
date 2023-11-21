
import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Portafolio } from "./portafolios/portafolio"
import { Contador } from "./contador/Contador"
import { Buscadorusuarios } from "./usuarios/Buscadorusuarios"
import { Tiempo } from "./clima/Tiempo"
import { Peliculas } from "./peliculas/Peliculas"
import { Proyectoscss } from "./proyectos css/Proyectoscss"
import { Buscadorimagenes } from "./buscador de imagenes/Buscadorimagenes"

export const App = () => {
 

 
 
 
    return (
    <div>
        <Navbar></Navbar>
        <Routes>
            <Route>
                <Route path="/" element={<Portafolio></Portafolio>}></Route>
                <Route path="/proyectoscss" element={<Proyectoscss></Proyectoscss>}></Route>
                <Route path="/contador" element={<Contador></Contador>}></Route>
                <Route path="/usuarios" element={<Buscadorusuarios></Buscadorusuarios>}></Route>
                <Route path="/tiempo" element={<Tiempo></Tiempo>}></Route>
                <Route path="/peliculas" element={<Peliculas></Peliculas>}></Route>
                <Route path="/buscadorimagenes" element={<Buscadorimagenes></Buscadorimagenes>}></Route>
                <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
            </Route>
        </Routes>
    </div>
  )
}
