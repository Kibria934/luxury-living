import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import navLogo from '../../images/navbarLogo.png'

const Navbar = () => {
    const { pathname } = useLocation()

    const navCommonStyle = 'hover:bg-base-200  active:bg-primary px-4 py-2 rounded-md cursor-pointer transition-all duration-300'
    return (
        pathname !== '/login' && <div className="navbar lg:w-[98vw] lg:mx-auto lg:rounded-lg lg:mt-2 drop-shadow-lg bg-base-100">
            <div className="navbar-start">
                <div className='ml-5 px-4 hidden lg:block md:block'>
                    <img className='w-28' src={navLogo} alt="" />
                </div>
                <div className="dropdown lg:hidden md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 px-2 my-4 shadow bg-base-100 rounded-box w-[95vw] ">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/projects'}>Projects</Link>
                        <Link to={'/about'}>about</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </ul>
                </div>
            </div>
            <div className='navbar-center'>
                <div className='ml-5 px-4  lg:hidden md:hidden'>
                    <img className='w-20' src={navLogo} alt="" />
                </div>
            </div>
            <div className="navbar-end mr-5 ">
                <ul className=" hidden lg:flex md:flex mx-5 gap-10">
                    <Link className={navCommonStyle} to={'/'}>Home</Link>
                    <Link className={navCommonStyle} to={'/projects'}>Projects</Link>
                    <Link className={navCommonStyle} to={'/about'}>about</Link>
                    <Link className={navCommonStyle} to={'/contact'}>Contact</Link>
                </ul>
                <Link to={"/login"} className="btn btn-primary">
                    login
                </Link>
            </div>
        </div>

    );
}

export default Navbar;