import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';

const Contact = () => {
    const location = useLocation()
    const returnF = () => {
        window.history.back()
    }

    return (
        <div className='mt-5'>
            {location.pathname === '/contact' &&
                < h4 onClick={returnF} className='text-lg hidden lg:pl-10 md:pl-8 text-black float-left mb-3 lg:flex items-center'>Back <AiOutlineRollback className='pl-2 text-2xl' /></h4>}

            <div className='mx-auto my-16 flex flex-col flex-wrap items-center'>
                {location.pathname !== '/contact' && <h4 className='text-lg text-black mb-3'>Contact</h4>}
                <h1 className='lg:text-4xl text-2xl my-16  text-black'>Let us handle <br /> your projects, professionally</h1>
                <div className='lg:w-5/12 w-full md:w-10/12  px-3  mx-auto'>
                    <div className='flex flex-wrap gap-4 mb-6 justify-between'>
                        <input type="text" placeholder="Type here" className="input w-full bg-slate-100 max-w-xs" />
                        <input type="text" placeholder="Type here" className="input w-full bg-slate-100 max-w-xs" />
                    </div>
                    <div className='flex mb-6 flex-wrap gap-4 justify-between'>
                        <input type="text" placeholder="Type here" className="input w-full bg-slate-100 max-w-xs" />
                        <input type="text" placeholder="Type here" className="input w-full bg-slate-100 max-w-xs" />
                    </div>
                    <textarea className="textarea textarea-bordered h-40  bg-slate-100 w-full" placeholder="Bio"></textarea>
                </div>
            </div >
        </div>
    );
};

export default Contact;