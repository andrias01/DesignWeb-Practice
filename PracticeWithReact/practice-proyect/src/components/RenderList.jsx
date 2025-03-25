import { useEffect, useState } from "react"
import lists from "./lists"
import Menu from "./Menu"
const movies = ["The george", "the friends", "Otra peli mas"]
function RenderList() {
  //cuando ponemos en el segundo argumento index es realmente el indes de la lista
  const HTMLmovies = movies.map((movie, index) => {
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
  //const [admins, setAdmins] = useState([]);
  const [admins, setAdmins] = useState({ data: [] });
  // const getAdmins = async () => {
  //   //const response = await fetch("https://api.restful-api.dev/objects")
  //   //const response = await fetch("http://localhost:8080/victusresidencias/api/v1/administrator/all")
  //   const response = await axios.get("https://api.restful-api.dev/objects")
  //   //const data = await response.json();
  //   //setAdmins(data);
  //   //setAdmins(response);
  //   console.log(response)
  //   setAdmins(response.data)
  // }

  // useEffect(() => {
  //   getAdmins();
  // }, [])

  useEffect(() => {
    fetch("http://localhost:8080/victusresidencias/api/v1/administrator/all")
      .then((res) => res.json())
      .then((data) => setAdmins(data))
      .catch((error) => console.error("Error fetching admins:", error));
    console.log(admins.data)
  }, [])

  const HTMLadmins = admins.data.map((admin) => {
    return (
      //este div para mostrar segun el backend datos de un objeto complejo
      <div key={admin.id}>
        <h3>Nombre: {admin.name} - {admin.lastName}</h3>
        <h4>{admin.contactNumber}</h4>
        <h5>{admin.email}</h5>
      </div>
      //De aqui para abajo para mostar la api publica sencilla con data
      // <div key={admins.id}>
      //   <h3>{admins.name}</h3>
      //   {admins.data && <p>Color: {admins.data.color}</p>}
      // </div>
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
