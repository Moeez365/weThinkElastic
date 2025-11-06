import React, { Children } from "react";
import NavBar from "./components/navBar/NavBar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Expertise from "./pages/expertise/expertise";
import Projects from "./pages/projects/projects";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <>
              <Home />
              <Footer />
            </>
          ),
        },
        {
          path: "/expertise",
          element: (
            <>
              <Expertise />
              <Footer />
            </>
          ),
        },
        {
          path: "/projects",
          element: (
            <>
              <Projects />
              <Footer />
            </>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
