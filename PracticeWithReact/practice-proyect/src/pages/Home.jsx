import { useContext } from "react"
import HeaderComponent from "./HeaderComponent"
import { UserContext } from "../contexts/user.context";

function Home() {
    const {user,login,logOut} = useContext(UserContext);

    
  return (
    <>
        <HeaderComponent></HeaderComponent>
        <h1>Hola {user && <span>{user.name}</span>}</h1>
        <h2>This is the HOME PAGE</h2>
        <button onClick={()=> login()}>Login</button>
        <button onClick={()=> logOut()}>LogOut</button>
    </>
  )
}

export default Home
