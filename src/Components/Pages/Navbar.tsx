import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../AuthContext/useAuth";




export default function Navbar() {

    const {isAuthenticated,setIsAuthenticated}  = useAuth()
    const navigate = useNavigate()

    function handleLogout(){
        setIsAuthenticated(false)
        navigate('/login')
    }

  return (
    <div style={{display :' flex' , flexWrap : 'wrap' , flexDirection : 'row' , gap : '20px'}}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        {
            isAuthenticated && <div>
                <NavLink to='/dashboard'>Dashboard</NavLink><span>     </span>
                <button onClick={handleLogout}>Logout</button>
            </div> 
        }

    </div>
  )
}
