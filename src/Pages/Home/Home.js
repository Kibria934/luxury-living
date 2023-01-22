import React from 'react'
import HeroSection from '../../Components/HomeComponents/HeroSection'
import Projects from '../../Components/HomeComponents/Projects'
import Services from '../../Components/HomeComponents/Services'
import Testimonials from '../../Components/HomeComponents/Testimonials'
import Footer from '../../Components/SharedComponents/Footer'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <div className=''>
      <HeroSection />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home