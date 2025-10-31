import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
import { MarkLogo } from '../assets/images';

const Nav = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header className={`flex justify-center py-4 transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      
      {/* Nav Bar */}
      <nav className={`fixed z-50 w-[80%] flex justify-between items-center px-6 py-3 rounded-full shadow-lg transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={MarkLogo} alt="Markyet Logo" className="w-24 h-7 object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`hover:text-markyetcolor ${active === link.href ? 'text-markyetcolor font-semibold' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className={`rounded-full text-sm border-2 px-5 py-2 font-medium transition-colors duration-300 ${darkMode ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-markyetcolor focus:bg-markyetcolor focus:text-white'}`}
          >
            Contact Us
          </button>

          <button
            onClick={toggleDarkMode}
            className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-500 ${darkMode ? 'bg-yellow-400' : 'bg-gray-400'}`}
          >
            <div className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-500 ${darkMode ? 'translate-x-7' : 'translate-x-0 rotate-12'}`}></div>
            <span className={`absolute left-1 text-sm ${darkMode ? 'opacity-100' : 'opacity-0'}`}>☀️</span>
            <span className={`absolute right-1 text-sm ${darkMode ? 'opacity-0' : 'opacity-100'}`}>🌙</span>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-20 right-0 w-64 max-w-full p-6 rounded-l-xl shadow-lg transition-transform duration-300 z-40
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} lg:hidden`}
      >
        {/* Cross Button */}
        <div className="flex justify-end mb-4">
          <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">✕</button>
        </div>

        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setMenuOpen(false);
                }}
                className={`block w-full ${active === link.href ? 'text-markyetcolor font-semibold' : 'hover:text-markyetcolor'}`}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className={`w-full rounded-full text-sm border-2 px-5 py-2 font-medium transition-colors duration-300 ${darkMode ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-markyetcolor focus:bg-markyetcolor focus:text-white'}`}
            >
              Contact Us
            </button>
          </li>

          <li>
            <button
              onClick={toggleDarkMode}
              className={`relative w-full h-7 flex items-center rounded-full p-1 transition-colors duration-500 ${darkMode ? 'bg-yellow-400' : 'bg-gray-400'}`}
            >
              <div className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-500 ${darkMode ? 'translate-x-45' : 'translate-x-0 rotate-12'}`}></div>
              <span className={`absolute left-1 text-sm ${darkMode ? 'opacity-100' : 'opacity-0'}`}>☀️</span>
              <span className={`absolute right-1 text-sm ${darkMode ? 'opacity-0' : 'opacity-100'}`}>🌙</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Nav;
