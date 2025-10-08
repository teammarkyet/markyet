import React from 'react';
import { MarkLogo } from '../assets/images';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-16'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10'>
        <div>
          <div className="flex items-center gap-2">
            <img src={MarkLogo} alt="Markyet Logo" className="w-22 h-7 object-contain" />
          </div>
          <p className='text-gray-400 mt-4 text-sm leading-relaxed'>
            Helping brands win the digital market with data-driven strategies, creativity, and innovation.
          </p>
        </div> 

        <div>
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#home" className="hover:text-markyetcolor">Home</a></li>
            <li><a href="#about" className="hover:text-markyetcolor">About Us</a></li>
            <li><a href="#services" className="hover:text-markyetcolor">Services</a></li>
            <li><a href="#projects" className="hover:text-markyetcolor">Projects</a></li>
            <li><a href="#blog" className="hover:text-markyetcolor">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-markyetcolor">Social Media</a></li>
            <li><a href="#services" className="hover:text-markyetcolor">SEO & Content</a></li>
            <li><a href="#services" className="hover:text-markyetcolor">Web Design</a></li>
            <li><a href="#services" className="hover:text-markyetcolor">Ads & Campaigns</a></li>
            <li><a href="#services" className="hover:text-markyetcolor">Analytics</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg">Contact Us</h3>
          <p className="text-gray-400 mt-4 text-sm">📍 Guntur, Andhra Pradesh, India</p>
          <p className="text-gray-400 text-sm">📞 +91 7995673300</p>
          <p className="text-gray-400 text-sm">✉️ teammarkyet@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-markyetcolor">🌐</a>
            <a href="#" className="text-gray-400 hover:text-markyetcolor">🐦</a>
            <a href="#" className="text-gray-400 hover:text-markyetcolor">📸</a>
            <a href="#" className="text-gray-400 hover:text-markyetcolor">💼</a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 Markyet. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
