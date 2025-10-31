import React from 'react';

const BlogCard = ({ img, title, description, darkMode }) => {
  return (
    <div
      className={`relative rounded-xl shadow-md transform transition duration-500 hover:scale-105 overflow-hidden
        ${darkMode ? 'bg-gray-800 text-gray-200 hover:shadow-lg' : 'bg-gray-50 text-gray-900 hover:shadow-lg'}`}
    >
      {/* Blog Image with subtle overlay */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-30 transition-opacity duration-500 rounded-t-xl"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
          {description}
        </p>
        <a
          href="#"
          className={`mt-4 inline-block font-semibold transition-colors duration-300 relative z-10 ${
            darkMode ? 'text-violet-400 hover:text-violet-200' : 'text-markyetcolor hover:text-indigo-500'
          }`}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
