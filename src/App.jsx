import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import SubCategory from './Pages/SubCategory';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ShowAllProducts from './Pages/ShowAllProducts';
import DetailPages from './Pages/DetailPages';
import Biling from './Pages/Biling';
import CheckOut from './Pages/CheckOut';
import ContactUS from './Pages/ContactUS';
import SingleDetailPage from './Pages/SingleDetailPage';
import Faqs from './Pages/Faqs';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    }
    ,
    {
      path:"/signup",
      element:<Signup/>
    }
    ,

    {
      path:"/checkout",
      element:<CheckOut/>
    }
    ,
    {
      path:"/dp/:id",
      element:<DetailPages/>
    }
    ,
    {
      path:"/billing",
      element:<Biling/>
    }
    ,
    {
      path:"/contactus",
      element:<ContactUS/>
    }
    ,
    {
      path:"/detailpage/:name",
      element:<SingleDetailPage/>
    }
    ,
    {
      path:"/login",
      element:<Login/>
    }
    ,
    {
      path:"/faqs",
      element:<Faqs/>
    }
    ,
    {
      path:"/show/:name",
      element:<ShowAllProducts/>
    }
    ,
    {
      path:"/subcategory/:name",
      element:<SubCategory/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App