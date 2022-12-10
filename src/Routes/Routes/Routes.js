import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import ErrorPage from "../../Pages/ErrorPage/ErrorPage"
import Home from "../../Pages/Home/Home/Home"

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            }  ,
            {
                path:'/home',
                element: <Home></Home>,
            }  ,
          
        
        
       
       
           
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])