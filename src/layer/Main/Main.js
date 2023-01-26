import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/SharedComponents/Navbar';

const Main = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;