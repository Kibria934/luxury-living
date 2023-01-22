import React from 'react';
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
    return (
        <div className='mx-auto my-10 flex flex-col flex-wrap items-center'>
            <h4 className='text-lg text-black mb-3'>Testimonials</h4>

            <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-24'>
                <TestimonialsCard />
                <TestimonialsCard />
                <TestimonialsCard />
            </div>
        </div>

    );
};

export default Testimonials;