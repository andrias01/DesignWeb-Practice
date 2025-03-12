import { useState } from "react";
//import ChildProps from "./ChildProps"
import ChildChild from "./ChildChild";
import Menu from "./Menu"
import BrotherProps from "./BrotherProps";
function FatherProps() {
    // const text = "Texto desde father";
    // const person = {
    //     sex: "hombre",
    //     age: 30
    // }
    const [displayName, setDisplayName] = useState("");
    const login = (name) => {
        setDisplayName(name);
    }
  return (
    <div>
        <h1>Props | Esto esta en el padre</h1>
        <h2>Hola dato de hijo = {displayName}</h2>
        <BrotherProps userName={displayName}></BrotherProps>
        <ChildChild handleLogin={login}></ChildChild>
                
      {/* <ChildProps msg={text} person={person}></ChildProps> */}
    </div>
    
  )
}

export default FatherProps
