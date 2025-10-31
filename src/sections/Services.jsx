import React, { useEffect } from "react";
import SEO from "../components/SEO";
import { serviceLinks } from "../constants";
import ServiceCard from "../components/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <SEO
        title="Digital Marketing Services – Markyet"
        description="Explore our marketing services including SEO, Google Ads, social media marketing, and brand strategy tailored to your business."
        keywords="digital marketing, SEO, social media marketing, PPC, branding, web design, Google Ads, content marketing"
        url="https://www.markyet.in/services"
        image="https://www.markyet.in/logo.png"
      />

      <section
        id="services"
        className={`relative py-20 overflow-hidden transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Subtle floating orbs for background depth */}
        <div
          className={`absolute top-10 left-20 w-48 h-48 rounded-full blur-3xl animate-pulseSlow ${
            darkMode ? "bg-violet-700/30" : "bg-markyetcolor/20"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-32 w-64 h-64 rounded-full blur-3xl animate-floatSlow ${
            darkMode ? "bg-markyetcolor/20" : "bg-violet-400/20"
          }`}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <p
              className={`font-semibold uppercase text-sm tracking-wide ${
                darkMode ? "text-violet-400" : "text-markyetcolor"
              }`}
            >
              Our Services
            </p>
            <h2
              className={`text-3xl md:text-4xl font-bold mt-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              What We Offer
            </h2>
            <p
              className={`mt-4 max-w-2xl mx-auto ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              From strategy to execution, Markyet delivers end-to-end digital
              marketing solutions designed to help your brand scale and succeed.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceLinks.map((service, index) => (
              <div
                key={service.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="transform transition duration-500 hover:scale-105"
              >
                <ServiceCard
                  title={service.name}
                  description={service.value}
                  image={service.img}
                  darkMode={darkMode} // Pass prop to ServiceCard
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
