import React from 'react';
import ServiceCard from './ServiceCard';
import image1 from '../../Icon/affordable 1.png'
import image2 from '../../Icon/apartment 1.png'
import image3 from '../../Icon/lessee 1.png'

const Services = () => {
    return (
        <div className='mx-auto my-10 flex flex-col flex-wrap items-center'>
            <h4 className='text-lg text-black mb-3'>Service</h4>
            <h1 className='lg:text-4xl text-2xl mb-16 text-navi'>We are an agency tailored to all <br /> client's needs thats always delivers</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-24'>
                <ServiceCard price={"299"} title={'Office interior design'} img={image1} />
                <ServiceCard price={"399"} title={'Showroom design'} img={image2} />
                <ServiceCard price={"499"} title={'Residential/Home'} img={image3} />
            </div>
            <div className="card-actions mt-16">
                <button className='btn btn-primary rounded-none' type="">Explore more</button>
            </div>
        </div>
    );
};

export default Services;