import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthBox from '../../../Components/SharedComponents/AuthBox';
import googleLogo from '../../../Icon/Group 573.png'
import { BiError } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../../features/auth/authSlice';


const SignUp = () => {

    const { handleSubmit, register, reset, formState: { errors }, control
    } = useForm();
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [passwordError, setPasswordError] = useState(false)

    const onSubmit = ({ email, password, firstName, lastName, confirmPassword }) => {
        if (password === confirmPassword && firstName && lastName) {
            setPasswordError(false)
            dispatch(createUser({ email, password, firstName, lastName }))
            navigate("/")
        } else {
            return setPasswordError(true)
        }
    };


    // -------- commonStyle----------
    const inputStyle = "outline-0 font-bold font-thin mb-2 transition-all duration-300 placeholder-neutral active:border-b-3 focus:border-black border-b-2 border-slate-300 text-xl p-2 w-full"
    const commonStyle = "lg:w-5/12 mx-auto mt-6 md:w-7/12 w-full"
    return (
        <div className='px-4 mb-6'>
            <div className='border border-slate-400  lg:w-5/12 md:w-7/12 w-full  mx-auto py-10 px-16 mt-10'>
                <h3 className='text-left text-2xl font-semibold text-black my-6'>Create an account</h3>

                {passwordError && <p className='text-left mb-7 items-center flex  text-red-700 px-2'>Password isn't matched!</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-3 flex-wrap lg:flex-nowrap'>
                        <input id='firstName' type={'text'} name='' {...register("firstName", { required: true })} placeholder='First Name' className={inputStyle} />
                        {errors.firstName?.type === 'required' && <p className='text-left mb-7   items-center flex  text-red-700 px-2' role="alert"> <span><BiError /></span> first Name is required!</p>}

                        <input id='lastName' type={'text'} name='' {...register("lastName", { required: true })} placeholder='Last Name' className={inputStyle} />
                        {errors.lastName?.type === 'required' && <p className='text-left mb-7   items-center flex  text-red-700 px-2' role="alert"> <span><BiError /></span> last Name is required!</p>}
                    </div>




                    <input id='email' type={'text'} name='' {...register("email", { required: true })} placeholder='User Email' className={inputStyle} />
                    {errors.email?.type === 'required' && <p className='text-left px-2 items-center flex  mb-7 text-red-700' role="alert"> <span><BiError /></span> Email is required!</p>}

                    <input id='password' type={'password'} name='' {...register("password", { required: true, minLength: 6 })} placeholder='Password' className={inputStyle} />
                    {errors.password?.type === 'required' && <p className='text-left px-2 items-center flex  mb-7 text-red-700' role="alert"><span><BiError /></span> Please input password!</p>}
                    {errors.password?.type === 'minLength' && <p className='text-left px-2 items-center flex  mb-7 text-red-700' role="alert"><span><BiError /></span> Password must be at least 6 character</p>}

                    <input id='confirmPassword' type={'password'} name='' {...register("confirmPassword", { required: true, minLength: 6 })} placeholder='Confirm Password' className={inputStyle} />
                    {errors.confirmPassword?.type === 'required' && <p className='text-left  items-center flex px-2 mb-7 text-red-700' role="alert"> <span><BiError /></span> Please input password!</p>}
                    {errors.confirmPassword?.type === 'minLength' && <p className='text-left px-2 items-center flex  mb-7 text-red-700' role="alert"><span><BiError /></span> Password must be at least 6 character</p>}


                    <button type="submit" className='btn mb-4 w-full btn-primary'>Create an account</button>
                    <p>Already have an account? <Link className='hover:underline' to='/login'>Login</Link></p>
                </form>
            </div>
            <div className={`divider ${commonStyle} `}>OR</div>
            <div className={`flex flex-col items-center justify-center`}>
                <AuthBox img={googleLogo} title={"Continue with Google"} ></AuthBox>
                <AuthBox img={"https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"} title="Continue with Facebook"></AuthBox>
            </div>
        </div>
    );
};

export default SignUp;