import React from 'react';
import { Link } from 'react-router-dom';

const RegisterBox = ({ children, img, type }) => {
    console.log(img)
    return (
        <Link to={`${type}`}> <div className="card hover:drop-shadow-2xl card-compact flex-shrink-0 lg:w-[600px] my-6 w-96 md:w-88 mx-4 bg-base-100">
            <figure><img src={img} className="h-96" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-xl font-bold">{children}</h2>
            </div>
        </div></Link>
    );
};

export default RegisterBox;