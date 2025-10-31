import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { blogValues } from '../constants';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <SEO
        title="Markyet Blog – Digital Marketing Insights & Strategies"
        description="Stay updated with the latest trends in SEO, social media, PPC, web design, and content marketing from Markyet experts."
        keywords="digital marketing, SEO, social media marketing, PPC, branding, web design, Google Ads, content marketing, marketing strategies"
        url="https://www.markyet.in/blog"
        image="https://www.markyet.in/logo.png"
      />

      <section
        id="blog"
        className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <p className={`font-semibold uppercase text-sm tracking-wide transition-colors duration-300 ${darkMode ? 'text-violet-400' : 'text-markyetcolor'}`}>
              Our Blog
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold mt-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Insights & <span className={`${darkMode ? 'text-violet-400' : 'text-markyetcolor'}`}>Strategies</span>
            </h2>
            <p className={`mt-4 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Stay updated with the latest trends in digital marketing, SEO, social media, 
              and growth strategies from our experts.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogValues.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100} // staggered animation
                className="transform transition duration-500 hover:scale-105"
              >
                <BlogCard
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  darkMode={darkMode} // Pass dark mode to the card
                />
              </div>
            ))}
          </div>
        </div>

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Markyet Blog",
            "url": "https://www.markyet.in/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Markyet",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.markyet.in/logo.png"
              }
            },
            "blogPost": blogValues.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "image": post.img,
              "description": post.description,
              "url": `https://www.markyet.in/blog#${post.title.replace(/\s+/g,'-')}`
            }))
          })}
        </script>
      </section>
    </>
  );
};

export default Blogs;
