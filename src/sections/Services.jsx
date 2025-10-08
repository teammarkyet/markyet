import React from 'react';
import SEO from '../components/SEO';
import { serviceLinks } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <>
      <SEO
        title="Digital Marketing Services – Markyet"
        description="Explore our marketing services including SEO, Google Ads, social media marketing, and brand strategy tailored to your business."
        keywords="digital marketing, SEO, social media marketing, PPC, branding, web design, Google Ads, content marketing"
        url="https://www.markyet.in/services"
        image="https://www.markyet.in/logo.png"
      />
      <section id="services" className='bg-white py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Section Heading */}
          <div className='text-center mb-12'>
            <p className='text-markyetcolor font-semibold uppercase text-sm tracking-wide'>
              Our Services
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
              What We Offer
            </h2>
            <p className='text-gray-500 mt-3 max-w-2xl mx-auto'>
              From strategy to execution, Markyet delivers end-to-end digital
              marketing solutions designed to help your brand scale and succeed.
            </p>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {serviceLinks.map((service) => (
              <ServiceCard
                key={service.name}
                title={service.name}
                description={service.value}
                image={service.img}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services;
