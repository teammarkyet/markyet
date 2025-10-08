import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='bg-gray-50 py-20'>
        <div className='max-w-7xl mx-auto px-6 grid grid-col-1 md:grid-cols-2 gap-12 items-center'>
            <div>
                <p className='text-markyetcolor font-semibold uppercase text-sm tracking-wide'>Get Touch</p>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>
                    Let's Talk About <span className='text-markyetcolor'>Your Project</span>
                </h2>
                <p className='text-gray-600 mt-4 leading-relaxed'>
                    Have an idea or need help with your digital marketing? 
                    Fill out the form and our team will get back to you within 24 hours.  
                </p>
                <div className='mt-8 space-y-4'>
                    <p class="text-gray-700">📍 Guntur, Andhra Pradesh, India</p>
                    <p class="text-gray-700">📞 +91 7995673300</p>
                    <p class="text-gray-700">✉️ teammarkyet@gmail.com</p>   
                </div>
            </div> 
        <div className='bg-white shadow-lg rounded-2xl p-8'>
        <form className='space-y-6'>
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name"
                   class="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-markyetcolor focus:border-markyetcolor"/>
           </div>

            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email"
                   class="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-markyetcolor focus:border-markyetcolor"/>
            </div>

            <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Write your message..."
                      class="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-markyetcolor focus:border-markyetcolor"></textarea>
            </div>

            <button type="submit" 
                  class="w-full bg-markyetcolor hover:bg-markyetcolor text-white font-medium px-6 py-3 rounded-lg">
            Send Message
           </button>

        </form>

            </div>
        </div>
    </section>
  )
}

export default Contact