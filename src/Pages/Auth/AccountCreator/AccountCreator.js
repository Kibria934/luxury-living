import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../../features/auth/authApi';

const AccountCreator = () => {
    const { handleSubmit, register, control, formState: { errors } } = useForm();
    const term = useWatch({ control, name: "term" });
    const password = useWatch({ control, name: "password" });
    const confirmPassword = useWatch({ control, name: "confirmPassword" });
    const navigate = useNavigate()
    const { user, isError, isLoading } = useSelector(state => state.auth)
    const location = useLocation().pathname.split("/")
    const pathname = location[location.length - 1].toLocaleLowerCase()
    const [passError, setPassError] = useState(null)
    const [postUser, { isLoading: postLoad, isError: postError }] = useRegisterMutation()

    const dispatch = useDispatch()

    const handlePass = () => {
        if (password === confirmPassword) {
            setPassError(false)
        } else {
            setPassError(true)
        }
    }

    const onSubmit = data => {
        if (data.password === data.confirmPassword && user.email) {
            const { firstName, lastName, password, phone, role, imgUrl, term } = data
            const userData = { firstName, lastName, email: user.email, password, phone, role, imgUrl: imgUrl[0]?.name, term }
            postUser(userData)
            navigate("/")
        }
    };

    return (
        <div className='pt-14'>
            <div
                onClick={() => navigate("/register")}
                className='cursor-pointer w-fit mt-5 flex items-center'
            >
                <FaChevronLeft />
                <p>back</p>
            </div>
            <div className='flex justify-center  items-center overflow-auto p-10'>
                <form
                    className='bg-wheat text-left p-10 shadow-2xl  rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className='w-full text-2xl text-primary text-center uppercase mb-5'>{pathname}</h1>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='firstName'>
                            First Name
                        </label>
                        <input type='text' className='input-box' id='firstName' {...register("firstName", { required: true })} />
                        {errors.firstName?.type === "required" && <p className='text-red-600 py-2' role="alert">First Name is required!</p>}
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='lastName'>
                            Last Name
                        </label>
                        <input type='text' className='input-box' id='lastName' {...register("lastName")} />
                        {errors.lastName?.type === "required" && <p className='text-red-600 py-2' role="alert">last Name is required!</p>}
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-3' for='phone'>
                            Contact Number
                        </label>
                        <input
                            type='number'
                            className='input-box'
                            {...register("phone")}
                            id='phone'
                        />
                        {errors.phone?.type === "required" && <p className='text-red-600 py-2' >Phone number is required</p>}
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='password'>
                            Password
                        </label>
                        <input onKeyUp={handlePass} type='password' className='input-box' {...register("password", { required: true, min: 6, maxLength: 32 })} id='password' />
                        {errors.password?.type === "required" && <p className='text-red-600 py-2' >Password is required!</p>}
                        {errors.password?.type === "min" && <p className='text-red-600 py-2' >At least 6 digit should enter!</p>}

                        {passError && <p className='text-red-600 py-2' role="alert">Password did not matched!</p>}
                    </div>
                    <hr className='w-full mt-2 bg-black' />
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-3' for='confirmPassword'>
                            Confirm Password
                        </label>
                        <input onKeyUp={handlePass} type='password' className='input-box' {...register("confirmPassword", { required: true, min: 6, maxLength: 32 })} id='confirmPassword' />

                        {errors.confirmPassword?.type === "required" && <p className='text-red-600 py-2' role="alert">Confirm password is required</p>}
                        {errors.confirmPassword?.type === "min" && <p className='text-red-600 py-2' role="alert">at least 6 digit should enter</p>}
                    </div>


                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='role'>
                            Your role in company
                        </label>
                        <input
                            type='text'
                            value={pathname}
                            className='input-box '
                            {...register("role")}
                            id='role'
                        />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='role'>
                            Photo
                        </label>
                        <input
                            type='file'
                            className='file-input file-input-bordered file-input-primary w-full max-w-xs'
                            {...register("imgUrl")}
                            id='imgUrl'
                        />
                    </div>

                    <div className='flex justify-between items-center w-full mt-3'>
                        <div className='flex  w-full max-w-xs'>
                            <input
                                className='mr-3 checkbox'
                                type='checkbox'
                                {...register("term", { required: true })}
                                id='terms'
                            />
                            <label for='terms'>I agree to terms and conditions</label>
                        </div>
                        <button className='btn' disabled={!term} type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AccountCreator;