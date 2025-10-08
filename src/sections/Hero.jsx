import React from 'react'
import { HeroImage } from '../assets/images'
import { AnotherHeroImage } from '../assets/images'
const Hero = () => {
  return (
    <section id="/" className='bg-gray-100'>
        <div className='max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/*Start of the Left Content */}
            <div>
                <p className='text-markyetcolor font-semibold uppercase tracking-wide text-sm'>Welcome to Markyet</p>
                <h1 className='mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight'>
                    We Help Brands<br/> <span className='text-markyetcolor'>Win the Digital Market</span>
                </h1>
                <p className='mt-6 text-lg text-gray-600 max-w-lg'>
                     At Markyet, we combine data, creativity, and strategy to drive measurable growth. From SEO to paid campaigns, we make your brand stand out and scale faster.
                </p>
                <div className="mt-8 flex gap-4">
                    <a href="#contact" className="px-6 py-3 rounded-full bg-markyetcolor hover:bg-markyetcolor text-white font-medium">Get Started</a>
                    <a href="#services" className="px-6 py-3 rounded-full border border-markyetcolor text-markyetcolor font-medium hover:bg-violet-50">Our Services</a>
                </div>                
            </div>
            {/*End of Left Section*/}
            {/*Right Side Image*/}
            <div className='relative'>
                 <img src={AnotherHeroImage} alt="Marketing dashboard" class="rounded-2xl shadow-lg"></img>
                 {/*Floating Stat Cards-1*/}
                 <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-2xl p-2 w-28">
                    <p className="text-gray-500 text-sm">Campaign ROI</p>
                    <p className="text-2xl font-bold text-markyetcolor">+327%</p>           
                </div>
                <div className="absolute top-2 right-2 bg-white rounded-xl shadow-2xl p-2 w-30">
                    <p className="text-gray-500 text-sm">Leads Generated</p>
                    <p className="text-2xl font-bold text-markyetcolor">+1,200</p>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Hero