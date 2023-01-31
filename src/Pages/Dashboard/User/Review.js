import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Review = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const btn = document.getElementById('submit-btn')
        toast.success('Thanks for your feedback')
        reset()
        btn.disabled = true
        // navigate('/')
        setTimeout(() => btn.disabled = false, 10000)

    }

    return (
        <div className='w-6/12 mx-auto xs:text-sm mt-16'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("customer-name")} type="text" placeholder="Your Name" className="input w-full  my-2 py-3 h-16 lg:text-xl md:text-xl drop-shadow-lg text-md " />

                <input {...register("designation")} type="text" placeholder="Company's name, Designation" className="input w-full  my-2 py-3 h-16 lg:text-xl md:text-xl drop-shadow-lg text-md " />

                <textarea {...register("message")} className="textarea w-full my-2 py-2 lg:text-xl md:text-xl drop-shadow-lg text-md  h-64" placeholder="Message"></textarea>

                <button type="submit" id='submit-btn' className='btn btn-primary'>Submit</button>
            </form>
            <Toaster />
        </div>
    );
};

export default Review;