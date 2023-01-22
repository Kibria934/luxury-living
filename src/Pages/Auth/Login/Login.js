import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import googleLogo from '../../../Icon/Group 573.png'
import logo from '../../../images/navbarLogo.png'

const Login = () => {


    return (
        <div className=''>
            <figure className='flex flex-wrap my-10 justify-center'>
                <Link to='/'><img className='w-48' src={logo} alt="" /></Link>
            </figure>
            <div className='flex flex-col justify-center items-center h-[50vh]'>
                <h2 className='text-center text-xl text-black tracking-wide font-semibold'>Login With</h2>
                <div className='flex p-2 mt-6 rounded-[30px] text-center items-center border border-black-2 md:w-96 sm:w-96 w-88 lg:w-96 lg:w-[30rem]'>
                    <img className='w-10' src={googleLogo} alt="" />
                    <p className='text-center mx-auto md:text-xl text-lg px-3 lg:text-xl'>Continue With Google</p>
                </div>
                <p className='mt-3 '>Don't have an account? <Link className='text-blue-900 hover:underline' to='/signup'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;