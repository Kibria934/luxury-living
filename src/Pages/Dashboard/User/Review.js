import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Review = () => {
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        
        reset()
    }

    return (
        <div className='w-6/12 mx-auto mt-16'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("customer-name")} type="text" placeholder="Your Name" className="input w-full  my-2 py-3 h-16 text-xl" />

                <input {...register("designation")} type="text" placeholder="Company's name, Designation" className="input w-full  my-2 py-3 h-16 text-xl" />

                <textarea {...register("message")} className="textarea w-full my-2 py-2 text-xl h-64" placeholder="Message"></textarea>

                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default Review;