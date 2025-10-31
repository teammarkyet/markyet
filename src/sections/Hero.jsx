import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="/"
      className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden transition-colors duration-500"
    >
      {/* Animated Background Orbs */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-markyetcolor/30 dark:bg-violet-700/30 rounded-full blur-3xl animate-pulseSlow"></div>
      <div className="absolute bottom-10 right-32 w-60 h-60 bg-violet-400/30 dark:bg-markyetcolor/30 rounded-full blur-3xl animate-floatSlow"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-5" data-aos="fade-up">
          <p className="text-markyetcolor dark:text-violet-400 font-semibold uppercase tracking-wide text-sm" data-aos="fade-up" data-aos-delay="100">
            Welcome to Markyet
          </p>

          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight" data-aos="fade-up" data-aos-delay="200">
            We Help Brands<br />
            <span className="text-markyetcolor dark:text-violet-400">
              Win the Digital Market
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mt-4 text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="300">
            Your Partner for SEO, PPC, Social Media & Branding
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg" data-aos="fade-up" data-aos-delay="400">
            At Markyet, we combine data, creativity, and strategy to drive measurable growth.
            From SEO to paid campaigns, we make your brand stand out and scale faster.
          </p>

          <div className="mt-8 flex gap-4" data-aos="fade-up" data-aos-delay="500">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-markyetcolor text-white font-medium hover:shadow-[0_0_25px_#4D4DFF] dark:hover:shadow-[0_0_25px_#8B5CF6] transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-markyetcolor dark:border-violet-400 text-markyetcolor dark:text-violet-400 font-medium hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all duration-300 hover:scale-105"
            >
              Our Services
            </a>
          </div>

          {/* Animated Stats Row */}
          <div className="mt-10 flex flex-wrap gap-6 text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md w-32 hover:-translate-y-1 transition-transform duration-500">
              <p className="text-2xl font-bold text-markyetcolor dark:text-violet-400">98%</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Client Retention</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md w-32 hover:-translate-y-1 transition-transform duration-500">
              <p className="text-2xl font-bold text-markyetcolor dark:text-violet-400">10+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md w-32 hover:-translate-y-1 transition-transform duration-500">
              <p className="text-2xl font-bold text-markyetcolor dark:text-violet-400">500+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Campaigns Run</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative animate-floatSlow" data-aos="fade-up" data-aos-delay="700">
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-markyetcolor blur-2xl opacity-40 rounded-2xl animate-glow dark:from-violet-700 dark:to-indigo-500"></div>

          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80"
            alt="Digital marketing analytics dashboard showing campaign ROI and lead generation"
            className="relative rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Floating Stat Cards */}
          <div className="absolute -bottom-6 left-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-2 w-28 animate-bounceSlow">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Campaign ROI</p>
            <p className="text-2xl font-bold text-markyetcolor dark:text-violet-400">+327%</p>
          </div>

          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-2 w-30 animate-bounceSlow delay-200">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Leads Generated</p>
            <p className="text-2xl font-bold text-markyetcolor dark:text-violet-400">+1,200</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
