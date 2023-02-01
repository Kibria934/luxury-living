import React from 'react';
import paypal from "../../../Icon/paypal.png"
import creditCard from "../../../Icon/credit-card 1.png"
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Order = () => {
    const { register, reset, handleSubmit } = useForm();

    const { user } = useSelector(state => state.auth)
    const { email, firstName, lastName } = user
    let name = firstName + " " + lastName

    const onSubmit = (data) => {
        const newData = { ...data, customer: name ? name : user?.name }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        };
        fetch('http://localhost:5000/api/order', requestOptions)
            .then(response => response.json())
            .then(order => {
                window.location.replace(order.url)

            });

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-6/12 mx-auto  mt-16'>
                <div className='flex flex-col my-4 gap-3'>
                    <input {...register("customer", { required: true })} type="text" value={`${name}`} placeholder="Your Name" className="input text-xl w-full py-3 " />
                    <input {...register("email", { required: true })} type="text" value={`${email}`} placeholder="Email Account" className="input opacity-50 text-xl w-full py-3 " />
                    <input {...register("product", { required: true })} type="text" placeholder="Product Name" className="input text-xl w-full py-3 " />
                </div>
                <div className='flex gap-3 lg:flex-row flex-col'>
                    <select name="shippingMethod" {...register("shippingMethod", { required: true })} className="select w-full max-w-xs">
                        <option className='p-4' selected disabled value={"undefined"} >Select Shipping method</option>
                        <option className='p-4' value="Courier" >Courier</option>
                        <option className='p-4' value="USLocal shipping" >Local shipping</option>
                        <option className='p-4' value="Flexible delivery" >Flexible delivery</option>
                        <option className='p-4' value="Overnight delivery" >Overnight delivery</option>
                    </select>
                    <input {...register("postcode", { required: true })} type="number" placeholder="Post Code" className="input text-xl py-3 w-full" />
                </div>

                <div className='my-4'>
                    <div>
                        <input {...register("cardNumber", { required: true })} type="number" placeholder="Card Number" className="input text-xl w-full py-3 " />

                    </div>
                    <div className='flex gap-4 my-4'>
                        <input  {...register("phone", { required: true })} type="number" placeholder="Phone Number" className="input text-xl w-full py-3 " />
                        <select name="currency"  {...register("currency", { required: true })} className="select w-full max-w-xs">
                            <option className='text-xl ' selected disabled value={"undefined"}>Select a currency</option>
                            <option className='text-xl ' value="BDT">BD</option>
                            <option className='text-xl ' value="USD">USD</option>
                        </select>
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