import React from 'react'
import BlogCard from '../components/BlogCard'
import { blogValues } from '../constants'

const Blogs = () => {
  return (
    <section id="blog" className='bg-white py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-12'>
          <p className='text-markyetcolor font-semibold uppercase text-sm tracking-wide'>
              Our Blog
          </p>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>
            Insights & <span className='text-markyetcolor'>Strategeies</span>
          </h2>
          <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
            Stay updated with the latest trends in digital marketing, SEO, social media, 
            and growth strategies from our experts.
          </p>

        </div>
        {/*Bolg Cards*/}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {blogValues.map((items)=>(
            <BlogCard
              img={items.img}
              title={items.title}
              description={items.description}            
            />
          ))}
          

        </div>

      </div>


    </section>
  )
}

export default Blogs