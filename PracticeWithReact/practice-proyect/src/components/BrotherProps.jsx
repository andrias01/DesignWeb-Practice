import Menu from "./Menu"
function BrotherProps(props) {
  return (
    <div id="menu">
      <h3>Componente Hermano con dato : {props.userName}</h3>
    </div>
  )
}

export default BrotherProps
