import React from 'react';
import { Link } from 'react-router-dom';
import { BiError } from 'react-icons/bi';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../features/auth/authSlice';

const LoginBox = () => {
    const { handleSubmit, register, control, formState: { errors } } = useForm()
    const firstName = useWatch({ control, name: 'firstName' })
    const lastName = useWatch({ control, name: 'lastName' })
    const email = useWatch({ control, name: 'email' })
    const password = useWatch({ control, name: 'password' })
    const dispatch = useDispatch()

    const onSubmit = ({ email, password }) => {

        dispatch(loginUser({ email, password }))
    };



    const inputStyle = "outline-0 font-bold font-thin mb-3 transition-all duration-300 placeholder-neutral active:border-b-3 focus:border-black border-b-2 border-slate-300 text-xl p-2 w-full"
    const commonStyle = "lg:w-5/12 mx-auto mt-6 md:w-7/12 w-full"
    return (
        <div className='border border-slate-400  lg:w-5/12 md:w-7/12 w-full  mx-auto py-10 px-16 mt-10'>
            <h3 className='text-left text-2xl font-semibold text-black my-6'>Create an account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>


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