import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Products from './components/Products';
import Services from './components/Services';
import Orders from './components/Orders';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
