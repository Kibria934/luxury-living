import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "../../layer/Main/Main";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import ErrorElement from '../../Components/SharedComponents/Error'
import Projects from "../../Components/HomeComponents/Projects";
import Login from "../Auth/Login/Login";
import LoginBox from "../Auth/Login/LoginBox";
import SignUp from "../Auth/SignUp/SignUp";
import Booked from "../Dashboard/User/Booked";
import Dashboard from "../../layer/Dashboard/Dashboard";
import Review from "../Dashboard/User/Review";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/loginBox',
        element: <LoginBox />
      },
      {
        path: '/signup',
        element: <SignUp />
      },


    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Booked />
      },
      {
        path: "review",
        element: <Review />
      },


    ]
  },
  {
    path: '*',
    element: <ErrorElement />
  }

]);

export default router;