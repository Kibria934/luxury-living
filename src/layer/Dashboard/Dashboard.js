import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import navLogo from '../../images/navbarLogo.png'
import { useSelector } from 'react-redux';
import { TbGridDots } from "react-icons/tb"
import { CiShoppingCart } from "react-icons/ci"
import { RiMessage2Line } from "react-icons/ri"
import { HiOutlineListBullet } from "react-icons/hi2"

const Dashboard = () => {
    const location = useLocation()
    const { user } = useSelector(state => state.auth)

    return (
        <div>
            <div className='flex  justify-between text-md lg:text-lg md:text-lg xs:text-sm px-10 items-center h-18 mt-4'>
                <figure className='w-28 '>
                    <img className='' src={navLogo} alt="" />
                </figure>
                <h4 className='capitalize text-2xl lg:block md:block hidden lg:ml-40'>{location.pathname.split('/')[1]}</h4>
                <h4 className='float-right lg:text-lg md:text-lg '>{user.name}</h4>
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
                    <ul className="menu pl-12 px-2 py-4 w-80 text-center my-4 bg-base-100 ">
                        {/* <!-- Sidebar content here --> */}
                        <Link className="text-lg py-2   px-2 hover:bg-base-200 active:bg-primary active:text-white rounded-lg transition-all flex justify-start items-center gap-2  duration-150" to="/dashboard" ><CiShoppingCart /> Order </Link>
                        <Link className="text-lg py-2   px-2 hover:bg-base-200 active:bg-primary active:text-white rounded-lg transition-all flex justify-start items-center gap-2  duration-150" to="booklist" ><HiOutlineListBullet /> Book List </Link>
                        <Link className="text-lg py-2   px-2 hover:bg-base-200 active:bg-primary active:text-white rounded-lg transition-all  flex justify-start  items-center gap-2 duration-150" to="review" > <RiMessage2Line />Review</Link>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;