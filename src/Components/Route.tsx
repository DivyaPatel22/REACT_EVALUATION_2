import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";




export const route = createBrowserRouter([
    {
        path :'/',
        element : <Layout />,
        children : [
            {index : true , element : <Home/>},
            {path : 'login',element : <Login />},
            {
                element :  <ProtectedRoute />,
                children : [
                    {path : 'dashboard',element : <Dashboard />},
                    {path : 'dashboard/:id'}
                ]
            }
        ]
    }
])