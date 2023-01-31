import React from 'react'
import rightSideImage from '../../images/Mask Group-1.png'

export default function HeroSection() {
  return (
    <div className="hero -z-50 mb-20 lg:h-[98vh] h-screen bg-base-200">
      <div className="hero-content lg:w-[90vw] md:w-[8ovw] justify-between gap-10  flex-col lg:flex-row">
        <img src={rightSideImage} className="flex-1 -z-10 w-8/12 lg:max-w-lg rounded-lg shadow-2xl" alt="Home image" />
        <div className='flex-1 px-5 md:justify-center text-left'>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn  btn-primary">Get Started</button>
        </div>
      </div>
    </div>

  )
}
