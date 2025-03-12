//import './TrueFalse.css';
import { useState } from 'react';
import imagenes from './imagenes';
function ShowIfTrue() {
    const [myBoolean, setMyBoolean] = useState("true");
    const handleChance = (e) =>{
        console.log(e.target.id)
        setMyBoolean(e.target.id)
    }
  return (
    <div>
        <h1>Valor del Radio = {myBoolean}</h1>
        <input type="radio" id="true" name="slides" onChange={handleChance}/>
        <input type="radio" id="false" name="slides" onChange={handleChance}/>
        {myBoolean=="true" && <img src={imagenes.img1True} alt="" />}
        {myBoolean=="false" && <img src={imagenes.img2False} alt="" />}
        {/* {myBoolean ? (
            <img src={imagenes.img1True} alt="" />
            ):(
            <img src={imagenes.img2False} alt="" />
            )
        } */}
        
    </div>
    // <div id='trueFalse'>
    //     <div className="container">
    //         <input type="radio" id="true" name="slides" />
    //         <input type="radio" id="false" name="slides" />
    //         <div className="slides">
    //             <div className="slide" id="contenido1">
    //                 <img src="" alt="" />
    //                 <p>Estas en True</p>
    //                 <label htmlFor="false">FALSE</label>
    //                 <label htmlFor="true">TRUE</label>
    //             </div>
    //             <div className="slide" id="contenido2">
    //                 <img src="" alt="" />
    //                 <p>Estas en FALSE</p>
    //                 <label htmlFor="false">FALSE</label>
    //                 <label htmlFor="true">TRUE</label>
    //             </div>
    //         </div>
    //     </div>
    //     <div>
    //         { <img src={imagenes.img1True} alt="" />}
    //     </div>
    // </div>
  )
}

export default ShowIfTrue
