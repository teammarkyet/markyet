import React, { useEffect } from "react";
import SEO from "../components/SEO";
import { keyValues } from "../constants";
import KeyValuesCard from "../components/KeyValuesCard";
import { Clients } from "../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";

const About_us = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <SEO
        title="About Markyet – Driving Growth Through Data & Creativity"
        description="Markyet blends strategy, creativity, and analytics to craft campaigns that engage and deliver measurable growth for brands."
        keywords="digital marketing, SEO, social media marketing, PPC, branding, web design, Google Ads, content marketing"
        url="https://www.markyet.in/about"
        image="https://www.markyet.in/logo.png"
      />

      <section id="about" className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text & Key Values */}
          <div>
            <p className="text-markyetcolor font-semibold uppercase text-sm tracking-wide" data-aos="fade-up">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2" data-aos="fade-up" data-aos-delay="100">
              Driving Growth Through <span className="text-markyetcolor dark:text-violet-400">Data & Creativity</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              At <span className="font-semibold">Markyet</span> we believe digital marketing is more than just ads — 
              it’s about creating meaningful connections that fuel measurable growth.  
              Our team blends strategy, creativity, and analytics to craft campaigns that engage and deliver results.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              From startups to enterprises, we partner with brands to unlock new opportunities, 
              scale faster, and stay ahead in an ever-evolving market.
            </p>

            {/* Key Values */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {keyValues.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="transform transition duration-500 hover:scale-105"
                >
                  <KeyValuesCard
                    title={item.title}
                    description={item.description}
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <img
              src={Clients}
              alt="Markyet Team working on digital marketing projects"
              className="rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl px-6 py-4 animate-pulseSlow transition-colors duration-500">
              <p className="text-sm text-gray-500 dark:text-gray-400">Clients Served</p>
              <p className="text-2xl font-bold text-markyetcolor dark:text-violet-400">150+</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About_us;
