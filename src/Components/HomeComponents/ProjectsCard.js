import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';


const ProjectsCard = ({ img, title }) => {
    console.log(img)
    return (
        <div className="card mb-10 max-h-96 max-w-96 lg:max-w-md card-compact px-5 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-medium">{title}</h2>
                <p className='flex item-center justify-center'> <span className='pr-3'><HiLocationMarker /></span> Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default ProjectsCard;