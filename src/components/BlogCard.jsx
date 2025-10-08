import React from 'react'

const BlogCard = ({img,title,description}) => {
  return (
    <div className='bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden'>
        <img src={img} alt="Blog Post" className='w-full h-48 object-cover'></img>
        <div class="p-6">
            <h3 className='font-semibold text-lg text-gray-900'>
                {title}
            </h3>
            <p className='text-gray-600 text-sm mt-3'>{description}</p>
            <a href="#" className='mt-4 inline-block text-markyetcolor font-semibold'>Read More</a>

        </div>
    </div>
  )
}

export default BlogCard