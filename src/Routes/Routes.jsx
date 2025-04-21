import React, { Children, Component } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Blogs from '../pages/Blogs/Blogs';
  

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,

      children:[
        {  
            index: true,
            path:'/',
            Component:Home,
            hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>,
            loader: () =>fetch('../data.json')
        },
        {
            path:'/about',
            Component: About
        },
        {
          path:'/blogs',
          Component:Blogs,
          hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>,
            loader: () =>fetch('../qsnAns.json')
        }
    ]
    },
    
  ]);