/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext,  useState } from "react";


export const AuthContext = createContext();

export function useToken(){
  return (
    useContext(AuthContext)
  )
}

export default function AuthProvider( {children} ) {
  const localUser = JSON.parse(localStorage.getItem("token"))
  const [user, setUser] = useState(localUser)


  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}