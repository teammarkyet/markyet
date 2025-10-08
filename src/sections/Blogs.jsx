import React from 'react';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import { blogValues } from '../constants';

const Blogs = () => {
  return (
    <>
      <SEO
        title="Markyet Blog – Digital Marketing Insights & Strategies"
        description="Stay updated with the latest trends in SEO, social media, PPC, web design, and content marketing from Markyet experts."
        keywords="digital marketing, SEO, social media marketing, PPC, branding, web design, Google Ads, content marketing, marketing strategies"
        url="https://www.markyet.in/blog"
        image="https://www.markyet.in/logo.png"
      />

      <section id="blog" className='bg-white py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <p className='text-markyetcolor font-semibold uppercase text-sm tracking-wide'>
              Our Blog
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>
              Insights & <span className='text-markyetcolor'>Strategies</span>
            </h2>
            <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
              Stay updated with the latest trends in digital marketing, SEO, social media, 
              and growth strategies from our experts.
            </p>
          </div>

          {/* Blog Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {blogValues.map((items) => (
              <BlogCard
                key={items.title}
                img={items.img}
                title={items.title}
                description={items.description}
              />
            ))}
          </div>
        </div>

        {/* JSON-LD Structured Data for Articles */}
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
