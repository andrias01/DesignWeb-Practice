import { useContext} from "react"
import HeaderComponent from "../pages/HeaderComponent"
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
function Settings() {
  // se deja en true para que no muestre el mensaje de error
  //const [hasAccess,setAccess] = useState(true);
  const {user} = useContext(UserContext);
  //if (!hasAccess) return <Navigate to={"/error"} />
  if (!user?.isAdmin) return <Navigate to={"/error"} />

  return (
    <>
        <HeaderComponent></HeaderComponent>
        <h1>Esto es Settings</h1>
    </>
  )
}

export default Settings

