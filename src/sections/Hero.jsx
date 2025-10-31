import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="/"
      className={`relative overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      {/* Animated Background Orbs */}
      <div
        className={`absolute top-10 left-20 w-40 h-40 rounded-full blur-3xl animate-pulseSlow ${
          darkMode ? 'bg-violet-700/30' : 'bg-markyetcolor/30'
        }`}
      ></div>
      <div
        className={`absolute bottom-10 right-32 w-60 h-60 rounded-full blur-3xl animate-floatSlow ${
          darkMode ? 'bg-markyetcolor/30' : 'bg-violet-400/30'
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-5" data-aos="fade-up">
          <p
            className={`font-semibold uppercase tracking-wide text-sm ${
              darkMode ? 'text-violet-400' : 'text-markyetcolor'
            }`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Welcome to Markyet
          </p>

          <h1
            className={`mt-2 text-4xl md:text-5xl font-extrabold leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We Help Brands<br />
            <span className={`${darkMode ? 'text-violet-400' : 'text-markyetcolor'}`}>
              Win the Digital Market
            </span>
          </h1>

          <h2
            className={`text-xl md:text-2xl font-semibold mt-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Your Partner for SEO, PPC, Social Media & Branding
          </h2>

          <p
            className={`mt-6 text-lg max-w-lg transition-colors duration-500 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            At Markyet, we combine data, creativity, and strategy to drive measurable growth.
            From SEO to paid campaigns, we make your brand stand out and scale faster.
          </p>

          <div className="mt-8 flex gap-4" data-aos="fade-up" data-aos-delay="500">
            <a
              href="#contact"
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-violet-700 text-white hover:shadow-[0_0_25px_#8B5CF6]'
                  : 'bg-markyetcolor text-white hover:shadow-[0_0_25px_#4D4DFF]'
              }`}
            >
              Get Started
            </a>
            <a
              href="#services"
              className={`px-6 py-3 rounded-full border font-medium transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? 'border-violet-400 text-violet-400 hover:bg-violet-900/30'
                  : 'border-markyetcolor text-markyetcolor hover:bg-violet-50'
              }`}
            >
              Our Services
            </a>
          </div>

          {/* Animated Stats Row */}
          <div className="mt-10 flex flex-wrap gap-6 text-center" data-aos="fade-up" data-aos-delay="600">
            {[
              { value: '98%', label: 'Client Retention' },
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Campaigns Run' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl shadow-md w-32 transition-transform duration-500 hover:-translate-y-1 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <p className={`${darkMode ? 'text-violet-400' : 'text-markyetcolor'} text-2xl font-bold`}>
                  {stat.value}
                </p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative animate-floatSlow" data-aos="fade-up" data-aos-delay="700">
          <div
            className={`absolute -inset-2 rounded-2xl opacity-40 blur-2xl animate-glow ${
              darkMode
                ? 'from-violet-700 to-indigo-500 bg-gradient-to-r'
                : 'from-violet-500 to-markyetcolor bg-gradient-to-r'
            }`}
          ></div>

          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80"
            alt="Digital marketing analytics dashboard showing campaign ROI and lead generation"
            className="relative rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Floating Stat Cards */}
          <div className={`absolute -bottom-6 left-6 rounded-xl shadow-2xl p-2 w-28 animate-bounceSlow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Campaign ROI</p>
            <p className={`${darkMode ? 'text-violet-400' : 'text-markyetcolor'} text-2xl font-bold`}>+327%</p>
          </div>

          <div className={`absolute top-2 right-2 rounded-xl shadow-2xl p-2 w-30 animate-bounceSlow delay-200 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Leads Generated</p>
            <p className={`${darkMode ? 'text-violet-400' : 'text-markyetcolor'} text-2xl font-bold`}>+1,200</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
