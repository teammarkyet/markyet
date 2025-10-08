import React from 'react'
import { keyValues } from '../constants'
import KeyValuesCard from '../components/KeyValuesCard'
import { Clients } from '../assets/images'
const About_us = () => {
  return (
    <section id="about" className='bg-gray-50 py-20'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div>
          <p className='text-markyetcolor font-semibold uppercase text-sm tracking-wide'>About Us</p>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'> Driving Growth Through <span class="text-markyetcolor">Data & Creativity</span></h2>
          <p className='text-gray-600 mt-6 leading-relaxe'>At <span className='font-semibold'>Markyet</span> we believe digital marketing is more than just ads — 
        it’s about creating meaningful connections that fuel measurable growth.  
        Our team blends strategy, creativity, and analytics to craft campaigns that not only engage, 
        but also deliver results.</p>
        <p className='text-gray-600 mt-4 leading-relaxed'>
          From startups to enterprises, we partner with brands to unlock new opportunities, 
        scale faster, and stay ahead in an ever-evolving market.
        </p>
        {/*Key Values*/}
        <div className='mt-8 grid grid-cols-2 gap-6'>
          {keyValues.map((items)=>(
            <KeyValuesCard
              title={items.title}
              description={items.description}
            />
          ))}

        </div>
        
        </div>
        {/*Image Section*/}
        <div className='relative'>
          <img src={Clients}
           alt="About Markyet Team" 
           className="rounded-2xl shadow-lg"></img>
           <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl px-6 py-4">
              <p className="text-sm text-gray-500">Clients Served</p>
              <p className="text-2xl font-bold text-markyetcolor">150+</p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About_us