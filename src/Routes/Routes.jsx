import React, { Children, Component } from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Blogs from '../pages/Blogs/Blogs';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';
import Bookings from '../pages/Bookings/Bookings';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
        loader: () => fetch('../data.json')
      },
      {
        path: '/doctor-details/:id',
        Component: DoctorDetails,
        hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
        loader: () => fetch('../data.json')
      },
      {
        path: '/blogs',
        Component: Blogs,
        hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,
        loader: () => fetch('../qsnAns.json')
      },
      {
        path: '/bookings',
        Component: Bookings,
        
      }
    ]
  },

]);