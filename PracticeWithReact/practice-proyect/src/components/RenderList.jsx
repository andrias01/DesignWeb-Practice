import { useEffect, useState } from "react"
import lists from "./lists"
import Menu from "./Menu"
const movies = ["The george","the friends","Otra peli mas"]
function RenderList() {
  //cuando ponemos en el segundo argumento index es realmente el indes de la lista
    const HTMLmovies =movies.map((movie,index) => {
        return <p key={movie}>{index} - {movie}</p>
      })
    const HTMLanimals = lists.map(animal => {
      return (
        <div key={animal.id}>
          <p>{animal.name}</p>
          <img src={animal.img} alt="" />
        </div>
      )
    })
    const [admins,setAdmins] = useState([]);

    const getAdmins = async () => {
      const response = await fetch("https://api.restful-api.dev/objects")
      const data = await response.json();
      setAdmins(data);
    }

    useEffect(()=>{
      getAdmins();
    },[])

    const HTMLadmins = admins.map((admins)=>{
      return (
        <div key={admins.id}>
          <h3>{admins.name}</h3>
          {admins.data && <p>Color: {admins.data.color}</p>}
        </div>
      )
    })
  return (
    <div id="menu">
      <h1>Renderizado de Listas | Fetch</h1>
      {HTMLadmins}
      {/* <h2>{HTMLmovies}</h2>
      <h2>{HTMLanimals}</h2> */}
    </div>
    
    
  )
}

export default RenderList
