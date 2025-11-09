import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import AvailableFoods from '../Pages/AvailableFoods';
import Loading from '../Component/Loading';
import Error from '../Component/Error';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: ([
            {
                path: '/',
                Component: Home,
                loader: ()=>fetch('http://localhost:3000/featured-foods'),
                HydrateFallback: Loading,
                errorElement:<Error></Error>
            },
            {
                path:'/available-foods',
                Component: AvailableFoods,
                loader: ()=> fetch('http://localhost:3000/available-foods'),
                HydrateFallback: Loading,
                errorElement: <Error></Error>
            }
        ])
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: ([
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/signup',
                Component: SignUp
            }
        ])
    }
])
