import { useState } from "react";
import Menu from "./Menu"

function FormD() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const handleSubmit = (e) => {
        //hay que poner preventDefault para que no se recarge la pagina
        e.preventDefault();
        console.log(user)
        console.log("Formulario enviado")
    }

    const handleUserNameInput = (e) =>{
        setUser({...user,username: e.target.value})
    }
    const handleUserPasswordInput = (e) =>{
        setUser({...user,password: e.target.value})
    }
  return (
    
    <div id="menu">
      <h1>Formularios</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="username">Usuario</label>
            <input 
                type="text"
                id="username" 
                onChange={handleUserNameInput}
                value={user.username}
                />
        </fieldset>
        <fieldset>
            <label htmlFor="password">Contraseña</label>
            <input 
                type="password"
                id="password"
                onChange={handleUserPasswordInput} 
                value={user.password}
                />
        </fieldset>
        <button>Enviar</button>
      </form>
      <button onClick={()=>setUser({username:"",password:""})}>LogOut</button>
    </div>
  )
}

export default FormD
