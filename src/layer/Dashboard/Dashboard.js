import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import navLogo from '../../images/navbarLogo.png'

const Dashboard = () => {
    const location = useLocation()
    return (
        <div>
            <div className='flex  justify-between  px-10 items-center h-18 mt-4'>
                <figure className='w-28 '>
                    <img className='' src={navLogo} alt="" />
                </figure>
                <h4 className='capitalize text-2xl lg:ml-40'>{location.pathname.split('/')[1]}</h4>
                <h4 className='float-right'>Name</h4>
            </div>
            <div className='lg:grid md:grid lg:grid-cols-12 md:grid-cols-12  p-3 gap-3 '>
                <Sidebar />
                <div className='lg:col-span-10 md:col-span-10 w-full bg-slate-100 '>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;