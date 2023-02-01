import React, { useEffect } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BiError } from 'react-icons/bi';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../features/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../../../firebase_init';

const LoginBox = () => {
    const { handleSubmit, register, control, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()


    const from = location?.state?.from?.pathname || "/"

    const { isLoading, isError, error, user } = useSelector(state => state.auth)

    useEffect(() => {

        onAuthStateChanged(auth, user => {
            if (user.email != "") {
                navigate(from, { replace: true })
            } else {
                console.log("first")
            }

        })
    }, [auth])

    const onSubmit = async ({ email, password }) => {
        await dispatch(loginUser({ email, password }))

    };


    const errorMessage = (error?.split('/')[1]?.split(')')[0])
    const inputStyle = "outline-0 font-bold font-thin mb-3 transition-all duration-300 placeholder-neutral active:border-b-3 focus:border-black border-b-2 border-slate-300 text-xl p-2 w-full"
    return (
        <div id='main' className='border border-slate-400  lg:w-5/12 md:w-7/12 w-full  mx-auto py-10 px-16 mt-10'>
            <h3 className='text-left text-2xl font-semibold text-black my-6'>Create an account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                {errorMessage && <div className='border-2 flex items-center text-red-800 uppercase justify-center border-red-700 py-3 my-4 bg-red-100'>
                    <p className='text-2xl mr-2'> <BiError /></p> <h3 className=''> {errorMessage}</h3>
                </div>}
                <input id='email' type={'text'} name='' {...register("email", { required: true })} placeholder='User Name or Email' className={inputStyle} />
                {errors.email?.type === 'required' && <p className='text-left px-2 items-center flex  mb-7 text-red-700' role="alert"> <span><BiError /></span> Email is required!</p>}

                <input id='password' type={'password'} name='' {...register("password", { required: true })} placeholder='Password' className={inputStyle} />
                {errors.password?.type === 'required' && <p className='text-left px-2 items-center flex  mb-7 text-red-700' role="alert"><span><BiError /></span> Please input password!</p>}


                <button type="submit" className='btn mb-4 w-full btn-primary'>Login</button>
                <p>Don't have an account? <Link className='hover:underline' to='/signup'>Create an account</Link></p>
            </form>
        </div>
    );
};

export default LoginBox;