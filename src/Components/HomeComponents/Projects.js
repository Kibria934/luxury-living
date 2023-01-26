import React from 'react';
import ProjectsCard from './ProjectsCard';
import firstImage from '.././../images/bernard-hermant-6ftZuO_-b64-unsplash 1.png'
import secondImage from '.././../images/Mask Group.png'
import thirdImage from '.././../images/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'
import { useLocation } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';

const Projects = () => {
    const location = useLocation()
    const returnF = () => {
        window.history.back()
    }
    return (
        <div className='mt-5'>
            {location.pathname === '/projects' &&
                < h4 onClick={returnF} className='text-lg hidden lg:pl-10 md:pl-8 text-black float-left mb-3 lg:flex items-center'>Back <AiOutlineRollback className='pl-2 text-2xl' /></h4>}

            <div className='mx-auto mt-5 flex flex-col flex-wrap items-center'>
                <h4 className='text-lg text-black mb-3'>Projects</h4>
                <h1 className='lg:text-4xl text-2xl mb-5  text-navi'>Discover the latest interior design <br /> available today</h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6'>
                    <ProjectsCard img={firstImage} title={"luxury villa in Ragu park"} />
                    <ProjectsCard img={secondImage} title={"Villa in Gorgieous house"} />
                    <ProjectsCard img={thirdImage} title={"Villa in Washingto Aveneou"} />
                </div>
            </div >
        </div>
    );
};

export default Projects;