import React from 'react';

const ServiceCard = ({ img, title, price, description }) => {
    return (
        <div className="card hover:drop-shadow-2xl  cursor-pointer mb-5  w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-28" />
            </figure>
            <div className="card-body items-center  text-center">
                <h2 className="card-title">{title}</h2>
                <h3 className='text-navi text-xl font-semibold'>${price}</h3>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolliquaprehenderit in voluptate velit esse cillum dolore</p>

            </div>
        </div>
    );
};

export default ServiceCard;