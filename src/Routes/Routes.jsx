import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import MyProfile from "../pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/services",
                element: <Services></Services>
            },
            {
                path:"/my-profile",
                element: <MyProfile></MyProfile>
            }
        ]
    }
])