import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";


const router=createBrowserRouter([
    {
        
        path:'/',
        element: <Layout />,
        children: [
      { 
        index: true, 
        element: <Home /> 
      },
    
    ]
        },

])

export default router