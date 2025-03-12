import { useState } from 'react'
import './Menu.css'
function VariarEnInputText() {
    const[myText, setMyText] = useState("Mi nombre");
    const[myValue, setMyValue] = useState("Valor");

    const handleInput = (e) => {
      console.log(e.target.value);
      setMyValue(e.target.value);
    }
  return (
    <div id='menu'>
      <h1>Practica con INPUT</h1>
      <h3>{myValue}</h3>
      <h4>{setMyText("NombreSetiado")}</h4>
      <input 
        type="text" 
        placeholder={myText}
        value={myValue}
        onChange={handleInput}
        />
    </div>
  )
}

export default VariarEnInputText
