import React from 'react';
import googleLogo from '../../Icon/Group 573.png'

const AuthBox = ({ img }) => {
    return (
        <div className='flex p-2 mt-6 rounded-[30px] text-center items-center border border-black-2 md:w-96 sm:w-96 w-88 lg:w-96 lg:w-[30rem]'>
            <img className='w-10' src={img} alt="" />
            <p className='text-center mx-auto md:text-xl text-lg px-3 lg:text-xl'>Continue With Google</p>
        </div>
    );
};

export default AuthBox;