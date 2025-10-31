import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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

      <section
        id="contact"
        className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Info Section */}
          <div data-aos="fade-right">
            <p className={`font-semibold uppercase text-sm tracking-wide transition-colors duration-300 ${darkMode ? 'text-violet-400' : 'text-markyetcolor'}`}>
              Get in Touch
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Talk About <span className={`${darkMode ? 'text-violet-400' : 'text-markyetcolor'}`}>Your Project</span>
            </h2>
            <p className={`mt-4 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Have an idea or need help with your digital marketing? 
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className={`mt-8 space-y-4 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>📍 Guntur, Andhra Pradesh, India</p>
              <p>📞 +91 7995673300</p>
              <p>✉️ teammarkyet@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`shadow-lg rounded-2xl p-8 transition-colors duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-left">
            <form className="space-y-6">
              {[
                { label: 'Name', type: 'text', id: 'name', placeholder: 'Your Name' },
                { label: 'Email', type: 'email', id: 'email', placeholder: 'Your Email' },
              ].map((field) => (
                <div key={field.id}>
                  <label className={`block text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor={field.id}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    className={`mt-1 w-full border rounded-lg px-4 py-2 transition-colors duration-300
                      ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 focus:ring-2 focus:ring-violet-400 focus:border-violet-400' 
                                 : 'bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-markyetcolor focus:border-markyetcolor'}`}
                  />
                </div>
              ))}

              <div>
                <label className={`block text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  className={`mt-1 w-full border rounded-lg px-4 py-2 transition-colors duration-300
                    ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 focus:ring-2 focus:ring-violet-400 focus:border-violet-400'
                               : 'bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-markyetcolor focus:border-markyetcolor'}`}
                />
              </div>

              <button
                type="submit"
                className={`w-full font-medium px-6 py-3 rounded-lg transition-colors duration-300
                  ${darkMode ? 'bg-violet-400 hover:bg-violet-300 text-gray-900' : 'bg-markyetcolor hover:bg-markyetcolor-dark text-white'}`}
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
