import { useEffect, useState } from "react"


export const Buscadorusuarios = () => {
 
  const [usuarios, setusuarios] = useState([])
  
  
 const lista = async() => {
    const datos = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await datos.json()
    setusuarios(data)
 }

 useEffect(()=>{
    lista()
 },[])

 
    return (
    <div>
      <div className="container">
        <h3>Este es mi segundo ejercicio que hice y otro que recomiendo mucho se trata de llamar a una api sencilla y que se llame ella sola con el se aprende a usar fetch() en una constante asíncrona y luego hay que pasarlo a json para que se pueda leer , luego mediante useEffect() crea la llamada</h3>
      </div>
     
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre de usuario</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {usuarios.map(usuario=>
        
    <tr key={usuario.id}>
      <th scope="row">{usuario.username}</th>
      <td>{usuario.name}</td>
      <td>{usuario.email}</td>
    </tr>
        )}
  </tbody>
</table>
    </div>
  )
}
