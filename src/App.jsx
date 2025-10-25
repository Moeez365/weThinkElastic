import React, { Children } from "react";
import NavBar from "./components/navBar/NavBar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";

const Layout = () =>{
    return(
      <>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </>
    )
  }


const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {index:true, element:<Home />}
      ]
      
    }
  ])
  return <RouterProvider router={router} />
  ;
};

export default App;
