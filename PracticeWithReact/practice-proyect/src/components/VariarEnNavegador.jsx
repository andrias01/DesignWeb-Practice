import { useState } from "react";

function VariarEnNavegador() {
    let num = 0
    let listaPrueba = ["Andres","Julian","Carlos"]
    // let variablePrueba = "Andres";
    //Variable reactiva
    const [name,setName] = useState("Andres");
    //saySomething dice something en consola
    const saySomething = () => {
        console.log("something");
    }
    const changeName = () => {
        if (num!=listaPrueba.length) {
        console.log(listaPrueba[num])
        setName(listaPrueba[num])
        num++;
        }else{
        console.log("Ya no hay mas nombres en la lista")
        }
    }
    return (
        <div>
            <h4 onClick={changeName}>Este es mi nombre: {name}</h4>
            <h1 onClick={saySomething}>Hola mi practica con react</h1>
            <h2 onClick={() => 
            console.log("OtraFormaDe crear eventos")
            }>Esta es Componente Raiz</h2>
        </div>
    )
}

export default VariarEnNavegador
