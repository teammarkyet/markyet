import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animate once when in view
  }, []);

  return (
    <>
      <SEO
        title="Contact Markyet – Let's Grow Your Brand"
        description="Have a project or idea? Contact Markyet, your digital marketing partner for SEO, social media, PPC, branding, and web design."
        keywords="digital marketing, SEO, social media marketing, PPC, branding, web design, Google Ads, content marketing, contact"
        url="https://www.markyet.in/contact"
        image="https://www.markyet.in/logo.png"
      />

      <section id="contact" className='bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-500'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>

          {/* Info Section */}
          <div data-aos="fade-right">
            <p className='text-markyetcolor dark:text-violet-400 font-semibold uppercase text-sm tracking-wide'>Get in Touch</p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2'>
              Let's Talk About <span className='text-markyetcolor dark:text-violet-400'>Your Project</span>
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mt-4 leading-relaxed'>
              Have an idea or need help with your digital marketing? 
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className='mt-8 space-y-4 text-gray-700 dark:text-gray-300'>
              <p>📍 Guntur, Andhra Pradesh, India</p>
              <p>📞 +91 7995673300</p>
              <p>✉️ teammarkyet@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-colors duration-500' data-aos="fade-left">
            <form className='space-y-6'>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name"
                  className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-markyetcolor focus:border-markyetcolor transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email"
                  className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-markyetcolor focus:border-markyetcolor transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  placeholder="Write your message..."
                  className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-markyetcolor focus:border-markyetcolor transition"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-markyetcolor hover:bg-markyetcolor-dark text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* JSON-LD ContactPoint for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Markyet",
            "url": "https://www.markyet.in",
            "logo": "https://www.markyet.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 7995673300",
              "email": "teammarkyet@gmail.com",
              "contactType": "customer service",
              "areaServed": "IN"
            }
          })}
        </script>
      </section>
    </>
  );
};

export default Contact;
