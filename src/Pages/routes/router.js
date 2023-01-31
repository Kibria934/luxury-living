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
import Dashboard from "../../Components/DahboardComponents/UserComponents/Dashboard";
import Review from "../Dashboard/User/Review";
import BookList from "../Dashboard/User/BookList";
import Order from "../Dashboard/User/Order";
import Payment from "../Payment/Payment";
import Success from "../Payment/Success";
import Failed from "../Payment/Failed";
import Register from "../Auth/register/Register";
import PrivateRoute from "../Auth/PrivateRoute/PrivateRoute";
import AccountCreator from "../Auth/AccountCreator/AccountCreator";



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
      {
        path: '/register',
        element:
          <PrivateRoute>
            <Register />
          </PrivateRoute>
      },
      {
        path: '/register/:type',
        element:
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
      },



    ]
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Order />
      },
      {
        path: "booklist",
        element: <BookList />
      },
      {
        path: "review",
        element: <Review />
      },


    ]
  },
  {
    path: "/payment",
    element: <Payment />,
    children: [
      {
        path: "success",
        element: <Success />
      },


    ]
  },
  {
    path: '*',
    element: <ErrorElement />
  }

]);

export default router;