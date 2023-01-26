import React from 'react';

const AuthBox = ({ img }) => {
    return (
        <div className='flex hover:bg-base-200 transition-all duration-150 hover:text-black p-2 mt-6 rounded-[30px] text-center items-center border border-slate-400 md:w-96 sm:w-96 w-88 lg:w-96 lg:w-[30rem]'>
            <img className='w-10' src={img} alt="" />
            <p className='text-center mx-auto md:text-xl text-lg px-3 lg:text-xl'>Continue With Google</p>
        </div>
    );
};

export default AuthBox;