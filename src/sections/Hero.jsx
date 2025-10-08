import React from 'react';
import { HeroImage, AnotherHeroImage } from '../assets/images';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-markyetcolor font-semibold uppercase tracking-wide text-sm">
            Welcome to Markyet
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            We Help Brands<br />
            <span className="text-markyetcolor">Win the Digital Market</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-4 text-gray-700">
            Your Partner for SEO, PPC, Social Media & Branding
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            At Markyet, we combine data, creativity, and strategy to drive measurable growth.
            From SEO to paid campaigns, we make your brand stand out and scale faster.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-markyetcolor hover:bg-markyetcolor text-white font-medium"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-markyetcolor text-markyetcolor font-medium hover:bg-violet-50"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <img
            src={AnotherHeroImage}
            alt="Digital marketing analytics dashboard showing campaign ROI and lead generation"
            className="rounded-2xl shadow-lg"
            loading="lazy"
          />

          {/* Floating Stat Cards */}
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

      {/* JSON-LD Structured Data for Stats */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Markyet",
          "url": "https://www.markyet.in",
          "logo": "https://www.markyet.in/logo.png",
          "founder": "Vasimalla Yashwanth",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Guntur",
            "addressRegion": "Andhra Pradesh",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 7995673300",
            "email": "teammarkyet@gmail.com",
            "contactType": "customer service"
          },
          "hasPart": [
            {
              "@type": "Service",
              "name": "SEO Campaign",
              "additionalType": "Campaign ROI +327%"
            },
            {
              "@type": "Service",
              "name": "Lead Generation",
              "additionalType": "Leads Generated +1,200"
            }
          ]
        })}
      </script>
    </section>
  );
};

export default Hero;
