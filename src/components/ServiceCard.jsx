import React from "react";

const ServiceCard = ({ image, title, description, bgColor = "bg-violet-100" }) => {
  return (
    <div
      className="group relative p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-[0_0_25px_rgba(77,77,255,0.25)] 
      dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-500 text-center
      animate-fadeInUp hover:-translate-y-2"
    >
      {/* Animated gradient ring behind icon */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 
        bg-gradient-to-r from-markyetcolor/10 via-violet-400/10 to-markyetcolor/10 blur-2xl animate-glow"
      ></div>

      {/* Icon Container */}
      <div
        className={`relative w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full ${bgColor} 
        group-hover:scale-110 transition-transform duration-500`}
      >
        <img
          src={image}
          alt={title}
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg text-markyetcolor dark:text-violet-400 mb-2 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
