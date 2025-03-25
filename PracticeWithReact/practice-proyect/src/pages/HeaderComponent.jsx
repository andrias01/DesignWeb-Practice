import { Link } from "react-router-dom"
import Menu from "../components/Menu"
import { useContext } from "react"
import { UserContext } from "../contexts/user.context";

function HeaderComponent() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <header className="header">
        <h1 className="title">Welcome! {user && <span>{user.name}</span>}</h1>
        <nav>
          <ul className="link-list">
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/showIfTrue">CompTrueFalse</Link>
            </li>
            <li>
              <Link className="link" to="/form">Formulario</Link>
            </li>
            <li>
              <Link className="link" to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
