import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { removeUser } from '../../features/auth/authSlice';
import navLogo from '../../images/navbarLogo.png'
import { MdOutlineLogout } from "react-icons/md"

const Navbar = () => {
    const { pathname } = useLocation()
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(removeUser())
    }


    const firstChar = user?.name?.split(" ")[0]?.slice(0, 1)
    const lastChar = user?.name?.split(" ")[1]?.slice(0, 1)



    const navCommonStyle = 'hover:bg-base-200  active:bg-primary px-4 py-2 rounded-md cursor-pointer transition-all duration-300'
    return (
        pathname !== '/login' && <div className="navbar lg:w-[98vw] lg:mx-auto lg:rounded-lg lg:mt-2 drop-shadow-lg bg-base-100">
            <div className="navbar-start">
                <div className='ml-5 px-4 hidden lg:block md:block'>
                    <Link to="/"><img className='w-28' src={navLogo} alt="" /></Link>
                </div>
                {/* ----------- Hamburger --------- */}
                <div className="dropdown lg:hidden md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu z-50 menu-compact dropdown-content  mt-3 px-2 my-4 shadow bg-base-100 rounded-box w-[95vw] ">
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
                {/* --user image on avatar-- */}

                {
                    user.email && <div className='dropdown relative'>
                        {user.imgUrl ? <label tabIndex={0} className="avatar online ">
                            <div className="md:w-12 w-10 lg:w-12 mr-3 rounded-full">
                                <img src={user.imgUrl} />
                            </div>
                        </label>
                            : <label tabIndex={0} className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content  rounded-full mr-3 md:w-12 w-10 lg:w-12">
                                    <span className="text-lg text-white">{lastChar != undefined ? firstChar + lastChar : firstChar}</span>
                                </div>
                            </label>
                        }
                        <ul tabIndex={0} className="menu z-50 mr-64 menu-compact py-3 dropdown-content  px-2 my-4 shadow bg-base-100 rounded-box w-52 lg:absolute hidden lg:block  left-[-110px]">
                            <li className=' flex justify-center items-center rounded-full'>{user.imgUrl ? <img className='w-20' src={user.imgUrl} alt="" /> : <div className="bg-neutral-focus text-neutral-content  rounded-full mr-3 md:w-12 w-10 lg:w-12">
                                <span className="text-lg text-white">{lastChar != undefined ? firstChar + lastChar : firstChar}</span>
                            </div>}</li>
                            <li className='hover-bordered'><a>{user.name}</a></li>
                            {user.email && !user.role && < li className="hover-bordered"><Link to="/register">Get started</Link></li>}
                            {user.email && user.role && < li className="hover-bordered"><Link to="/dashboard">Dashboard</Link></li>}
                            <li className="hover-bordered">
                                <button onClick={handleSignOut} >
                                    Sign out  <MdOutlineLogout />
                                </button>
                            </li>
                        </ul>
                    </div>
                }


                {
                    !user.email ? <Link to={"/login"} className="btn btn-primary">
                        login
                    </Link> : <button className='lg:hidden ms-2 p-2' onClick={handleSignOut} >
                        <MdOutlineLogout />
                    </button>
                }

            </div>
        </div >

    );
}

export default Navbar;