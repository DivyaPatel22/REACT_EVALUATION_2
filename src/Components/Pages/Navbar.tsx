import { NavLink } from "react-router-dom";
import useAuth from "../../AuthContext/useAuth";




export default function Navbar() {

    const {isAuthenticated}  = useAuth()

  return (
    <div style={{display :' flex' , flexWrap : 'wrap' , flexDirection : 'row' , gap : '20px'}}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        {
            isAuthenticated && <NavLink to='/dashboard'>Dashboard</NavLink>
        }
    </div>
  )
}
