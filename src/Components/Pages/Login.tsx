import { useState } from "react"
import useAuth from "../../AuthContext/useAuth"

const intialValue = {
    name : '',
    password : ''
}


export default function Login() {

    const [formData, setFormData] = useState(intialValue)
    const {setIsAuthenticated} = useAuth()

    const handleSubmit = ( e : React.SubmitEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log(formData)
        if(formData.name == "abc" && formData.password == '1234'){
             setIsAuthenticated(true)
        }

    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> ) => {

        const {name,value} = e.target
        setFormData(prev=>{
            return {
                ...prev,[name] : value
            }
        })
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Name : </label>
             <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/><br /><br />
             <label htmlFor="password">Password : </label>
             <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/><br /><br />
             <button>Submit</button>
        </form>
    </div>
  )
}
