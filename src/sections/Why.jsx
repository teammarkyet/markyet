import React from 'react';
import { approachSteps } from '../constants'; // Make sure approachSteps includes `img` now

const Why = () => {
  return (
    <section id="approach" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <p className="text-markyetcolor font-semibold uppercase text-sm tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Our Proven Approach
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We use a structured and results-driven process to grow your brand across digital channels.
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachSteps.map((step, index) => (
            <div
              key={step.title}
              className="transform transition duration-500 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 bg-gray-50 rounded-xl shadow-lg text-center">
                {/* Image instead of icon */}
                <img
                  src={step.img}
                  alt={step.title}
                  className="mx-auto mb-4 w-24 h-24 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
