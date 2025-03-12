import { useEffect, useState } from "react"
import Menu from "./Menu"
function ChildChild(props) {
  const [userName,setUserName] = useState("Andres Velez");
  const handleClickMenu = ()=>{
    props.handleLogin(userName);
  };
  const handleChangeInput = (e)=>{
    setUserName(e.target.value)
  };
  const [counter,setCounter] = useState(0);

  useEffect(()=>{
    console.log("Este componente se renderizo = hijoHijo")
  })
  return (
    <div id="menu">
      <p>
        <h1>Este es el componente hijo</h1>
        <h2>Nombre de usuario es: {userName}</h2>
        <center>
          <input type="text" onChange={handleChangeInput}/>
          <button onClick={handleClickMenu}>LOGIN</button>
          
        </center>
        <h3>{counter}</h3>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
      </p>
      
    </div>
  )
}

export default ChildChild
