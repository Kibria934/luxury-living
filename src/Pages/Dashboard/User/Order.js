import React from 'react';
import paypal from "../../../Icon/paypal.png"
import creditCard from "../../../Icon/credit-card 1.png"
import { useForm } from 'react-hook-form';

const Order = () => {
    const { register,reset, handleSubmit } = useForm();


    const onSubmit = data => {console.log(data);reset()};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-6/12 mx-auto  mt-16'>
                <div className='flex flex-col my-4 gap-3'>
                    <input {...register("customer-name",{required:true})} type="text" placeholder="Your Name" className="input text-xl w-full py-3 " />
                    <input {...register("customer-email")} type="text" placeholder="Email Account" className="input text-xl w-full py-3 " />
                    <input {...register("ordered-product")} type="text" placeholder="Product Name" className="input text-xl w-full py-3 " />
                </div>
                <label className='text-2xl'>Pay With</label>
                <div className='my-4 flex flex-wrap justify-around'>
                    <div>
                        <input {...register("creditCard")} type="radio" name="radio-2" className="radio radio-primary" checked /> <span className='flex items-center gap-2'> <img className='w-6' src={creditCard} alt="" />Creadit Card</span>
                    </div>
                   <div>
                        <input {...register("paypal")} type="radio" name="radio-2" className="radio radio-primary" /> <span className='flex items-center gap-2'><img className='w-6' src={paypal} alt="" /> Paypal</span>
                   </div>
                </div>
                <div className='my-4'>
                    <input {...register("cardNumber")}  type="text" placeholder="Product Name" className="input text-xl w-full py-3 " />
                    <div className='flex gap-4 my-4'>
                        <input  {...register("month")} type="text" placeholder="Product Name" className="input text-xl w-full py-3 " />
                        <input  {...register("cvc")} type="text" placeholder="Product Name" className="input text-xl w-full py-3 " />
                    </div>
                </div>
                <div className='flex gap-3 flex-wrap justify-between mt-10'>
                    <p >Your Charge will be $100</p>
                    <button type="submit" className='btn btn-primary md:w-96 w-full lg:w-96'>Pay</button>
                </div>
            </div>
        </form>
    );
};

export default Order;