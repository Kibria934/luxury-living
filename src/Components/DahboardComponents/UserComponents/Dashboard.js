import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import navLogo from '../../../images/navbarLogo.png'
import { useSelector } from 'react-redux';
import { TbGridDots } from "react-icons/tb"
import { CiShoppingCart } from "react-icons/ci"
import { RiMessage2Line } from "react-icons/ri"
import { HiOutlineListBullet } from "react-icons/hi2"
import { AiOutlineHome } from "react-icons/ai"
import { VscProject } from "react-icons/vsc"
import DashboardAvatar from '../../../Pages/Dashboard/User/DashboardAvatar';

const Dashboard = () => {
    const location = useLocation()
    const { user } = useSelector(state => state.auth)

    return (
        <div>
            <div className='flex  justify-between text-md lg:text-lg md:text-lg xs:text-sm px-10 items-center h-18 mt-4'>
                <figure className='w-28 '>
                    <img className='' src={navLogo} alt="" />
                </figure>
                <h4 className='capitalize lg:text-2xl lg:block hidden lg:ml-40'>{location.pathname.split('/')[1]}</h4>
                <h4 className='float-right lg:text-md md:text-md hidden lg:block '>{user.name}</h4>
                <label htmlFor="sidebar" className=" drawer-button lg:hidden"><TbGridDots /></label>
            </div>

            {/*
             ================ Sidebar ============= 
             .....................................
            */}
            <div className="drawer drawer-mobile">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-200 text-left">
                    {/* ---------- Page content --------- */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="sidebar" className="drawer-overlay"></label>
                    <ul className="menu pl-5 px-3 py-4 w-80 text-center  flex justify-between items-baseline bg-base-100 ">
                       <div>
                       <DashboardAvatar/>
                            {/* <!-- Sidebar content here --> */}
                            <Link className="text-lg py-2   px-2 hover:bg-base-200 active:bg-primary active:text-white rounded-lg transition-all flex justify-start items-center gap-2  duration-150" to="/dashboard" ><CiShoppingCart /> Order </Link>
                            <Link className="text-lg py-2   px-2 hover:bg-base-200 active:bg-primary active:text-white rounded-lg transition-all flex justify-start items-center gap-2  duration-150" to="booklist" ><HiOutlineListBullet /> Book List </Link>
                            <Link className="text-lg py-2   px-2 hover:bg-base-200 active:bg-primary active:text-white rounded-lg transition-all  flex justify-start  items-center gap-2 duration-150" to="review" > <RiMessage2Line />Review</Link>
                       </div>
                    <div className=' mb-20  flex flex-col gap-4 w-full mx-auto'>
                            <Link className='text-left flex item-center gap-2 ' to={'/'}><span className='text-xl'><AiOutlineHome /> </span>Home</Link>
                            <Link className='text-left flex item-center gap-2' to={'/projects'}> <span className='text-xl'><VscProject /></span> Projects</Link>
                    </div>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;