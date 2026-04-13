import { NavLink, Outlet } from "react-router-dom"
import useAuth from "../AuthContext/useAuth"



export default function ProtectedRoute() {

    const {isAuthenticated} = useAuth()

    if(!isAuthenticated){
        return <NavLink to='/login'></NavLink>
    }
    return (
        <>
        <Outlet />
        </>
    )
}
