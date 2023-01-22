import React from 'react';

const TestimonialsCard = () => {
    return (
        <div className="card hover:drop-shadow-2xl p-6 text-left cursor-pointer mb-5  w-96 bg-base-100 shadow-xl">
            <div className="card-body items-left  text-center">
                <div className='flex flex-start items-center '>
                    <figure className="avatar">
                        <div className="w-16 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </figure>
                    <div className='ml-6'>
                        <h5>Nash Patrik</h5>
                        <p>CEO,Mandal</p>
                    </div>
                </div>
                <p className='text-sm text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolliquaprehenderit in voluptate velit esse cillum dolore</p>
                <div className="rating w-20">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;