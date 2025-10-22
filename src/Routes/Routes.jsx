import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import MyProfile from "../pages/MyProfile/MyProfile";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path:"/services",
                element: <Services></Services>,
                loader: () => fetch('/data.json')
            },
            {
                path:"/my-profile",
                element: <MyProfile></MyProfile>
            },
            {
                path:"/services/:serviceId",
                element:<ServiceDetails></ServiceDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])