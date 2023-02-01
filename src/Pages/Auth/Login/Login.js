import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../../Icon/Group 573.png'
import logo from '../../../images/navbarLogo.png'
import { AiOutlineRollback } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux"
import { googleLoginUser } from '../../../features/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch()
    const { user, isLoading } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const returnF = () => {
        window.history.back()
    }

    const handleSignIn = async () => {
        await dispatch(googleLoginUser())
        await console.log(user.email)

    }

    return (
        <div className=''>
            < h4 onClick={returnF} className='text-lg hover:text-primary cursor-pointer px-3 flex items-center ml-10 text-left mt-10'>Back <AiOutlineRollback className='pl-2 text-2xl font-bold' /></h4>

            {/* -- Middle Box-- */}
            <figure className='flex flex-wrap my-10 justify-center'>
                <Link to='/'><img className='w-48' src={logo} alt="" /></Link>
            </figure>

            <div className='flex flex-col justify-center items-center h-[50vh]'>
                <h2 className='text-center text-xl text-black tracking-wide font-semibold'><Link className='underline text-blue-700' to='/loginBox'>Login</Link> With</h2>
                <div onClick={handleSignIn} className='flex p-2 mt-6 hover:bg-base-200 cursor-pointer hover:text-black transition-all duration-150 rounded-[30px] text-center items-center border border-slate-400 md:w-96 sm:w-96 w-88 lg:w-96 lg:w-[30rem]'>
                    <img className='w-10 z-50' src={googleLogo} alt="" />
                    <p className='text-center mx-auto md:text-xl text-lg px-3 lg:text-xl'>Continue With Google</p>
                </div>
                <p className='mt-3 '>Don't have an account? <Link className='text-blue-900 hover:underline' to='/signup'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;