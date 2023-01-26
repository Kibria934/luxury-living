import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-span-2  hidden md:block lg:block   bg-base-100 h-[calc(100vh-70px)] lg:p-5 p-3 rounded-lg'>
            <ul className='flex gap-3 flex-wrap flex-col h-full'>
                <li>
                    <Link to='/dashboard'>Booked-List</Link>
                </li>
                <li>
                    <Link to='review'> Review </Link>
                </li>
                <li className='mt-auto'>
                    <Link to='/'> Back to Home </Link>
                </li>
            </ul></div>
    );
};

export default Sidebar;