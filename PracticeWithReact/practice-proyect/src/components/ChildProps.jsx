import Menu from "./Menu"
function ChildProps(props) {
    //esta destructuracion se crear para ahorar el
    //tema de estar escribiendo en todo momento 
    //props.etc  solo con escribir la variable lo estamos llamando
    const {msg,person}=props;
  return (
    <div id="menu">
      <h1>Props | Este es un componente hijo</h1>
      <p>{msg}</p>
      <div>
        <h2>
            {person.sex} - {person.age}
        </h2>
      </div>
    </div>
  )
}

export default ChildProps
