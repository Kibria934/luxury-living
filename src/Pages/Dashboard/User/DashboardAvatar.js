import React from 'react';
import { useSelector } from 'react-redux';

const DashboardAvatar = () => {
    const { name, email, imgUrl } = useSelector(state => state.auth.user)
    const firstChar = name?.split(" ")[0]?.slice(0, 1)
    const lastChar = name?.split(" ")[1]?.slice(0, 1)
    console.log(imgUrl)

    return (
        <div className='flex my-4 justify-start text-left gap-3 border-b-2 pb-5 border-primary'>
            {imgUrl ? <label tabIndex={0} className="avatar ">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                    <img src={`${imgUrl}`} alt="logo" />
                </div>
            </label>
                : <label tabIndex={0} className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content  rounded-full mr-3 md:w-12 w-10 lg:w-12">
                        <span className="text-lg text-white">{lastChar != undefined ? firstChar + lastChar : firstChar}</span>
                    </div>
                </label>}
            <div className='overflow-hidden scroll-x-2'>
                
                <p>{name}</p>
                <p className='overflow-x-auto'>{email}</p>
            </div>
        </div>
    );
};

export default DashboardAvatar;