import React from 'react';
import { Link } from 'react-router-dom';
import AuthBox from '../../../Components/SharedComponents/AuthBox';
import googleLogo from '../../../Icon/Group 573.png'


const SignUp = () => {

    const inputStyle = "outline-0 font-thin mb-8 transition-all duration-300 placeholder-neutral active:border-b-3 focus:border-black border-b-2 border-slate-300 text-xl p-2 w-full"
    const commonStyle = "lg:w-5/12 mx-auto mt-6 md:w-7/12 w-full"
    return (
        <div className='px-4'>
            <form className='border border-slate-400  lg:w-5/12 md:w-7/12 w-full  mx-auto py-10 px-16 mt-10'>
                <h3 className='text-left text-2xl font-semibold text-black my-6'>Create an account</h3>
                <div>
                    <input placeholder='First name' className={inputStyle} />
                    <input placeholder='Last Name' className={inputStyle} />
                    <input placeholder='User Name or Email' className={inputStyle} />
                    <input placeholder='Password' className={inputStyle} />
                    <input placeholder='Confirm Password' className={inputStyle} />
                    <button type="submit" className='btn mb-4 w-full btn-primary'>Create an account</button>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </form>
            <div className={`divider ${commonStyle} `}>OR</div>
            <div className={`flex flex-col items-center justify-center`}>
                <AuthBox img={googleLogo} />
                <AuthBox img={"https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"} />
            </div>
        </div>
    );
};

export default SignUp;