import { createContext, useState } from "react";

const UserContext = createContext();

function UserProviderWrapper(props) {
    const [user,setUser] = useState(null);

    const userData = {
        name: "Andres",
        email: "andresjobpkk@gmail.com",
        isAdmin: true
    }

    const login = () => {
        setUser(userData);
    }
    
    const logOut = () => {
        setUser(null);
    }
    return (
        <UserContext.Provider value={{user,setUser,login,logOut}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProviderWrapper};