import React, { Children } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLoginUser } from '../../features/auth/authSlice';

const AuthBox = ({ img,title }) => {
    const dispatch = useDispatch()
    const{user}= useSelector(state=> state.auth)
    const navigate = useNavigate()


    const handleSignIn = () => {
        dispatch(googleLoginUser())
        if (user) {
            navigate("/")
        }
    }
    return (
        <div onClick={handleSignIn} className='flex cursor-pointer hover:bg-base-200 transition-all duration-150 hover:text-black p-2 mt-6 rounded-[30px] text-center items-center border border-slate-400 md:w-96 sm:w-96 w-88 lg:w-96 lg:w-[30rem]'>
            <img className='w-10' src={img} alt="" />
            <p className='text-center mx-auto md:text-xl text-lg px-3 lg:text-xl'>{title}</p>
        </div>
    );
};

export default AuthBox;