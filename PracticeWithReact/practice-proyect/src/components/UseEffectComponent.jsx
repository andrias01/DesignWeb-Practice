import { useState } from "react"
import Menu from "./Menu";
import ChildChild from "./ChildChild";
function UseEffectComponent() {
    const [showChild,setShowChild] = useState(true);
  return (
    <div id="menu">
        <h3>UseEffect ciclo de vida Componentes</h3>
        <center>
            <button onClick={() =>setShowChild(!showChild)}>Toggle Child</button>
        </center>
        {showChild && <ChildChild></ChildChild>}
        
    </div>
  )
}

export default UseEffectComponent
