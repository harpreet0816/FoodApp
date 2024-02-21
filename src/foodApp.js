import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";
import Body  from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
import UserContextInfo from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
//lazy loading or on demand loading , Load only when we request to load.
const Grocery = lazy(() => import("./components/Grocery.js"));


const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(()=>{
    //make an api call and get username data etc
    const data = {
      name: "Harpreet"
    }
    setUserName(data.name)
  },[])
  return (
    <Provider store={appStore} >
    <UserContextInfo.Provider value={{loggInUser: userName, setUserName}}>
    <div className="app">
    {/*<UserContextInfo.Provider value={{loggInUser: userName}}>*/}
      <Header />
    {/*</UserContextInfo.Provider>*/}
    {/*<UserContextInfo.Provider value={{loggInUser: "PREET"}}> */}
      <Outlet />
    {/*</UserContextInfo.Provider> */}
    </div>
    </UserContextInfo.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...😒</h1>}><Grocery /></Suspense> 
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
 
])
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);