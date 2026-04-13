import { useState, type ReactNode } from "react"
import { AuthContext } from "./Authcontext"


type Child = {
    children : ReactNode
}

export default function Auth( {children} : Child) {

    const [isAuthenticated,setIsAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}

