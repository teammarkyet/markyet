import React, { useState } from 'react';
import { navLinks } from '../constants';
import { hamburger } from "../assets/icons";
import { MarkLogo } from '../assets/images';

const Nav = ({ darkMode, toggleDarkMode }) => {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`flex justify-center py-4 transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <nav className={`fixed z-50 w-[90%] min-w-9xl flex justify-between items-center px-10 py-3 rounded-full shadow max-container animate-drop transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={MarkLogo} alt="Markyet Logo" className="w-22 h-7 object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className={`flex justify-center items-center gap-16 rounded-full px-4 py-2 max-lg:hidden transition-colors duration-500 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                onClick={() => setActive(items.href)}
                className={`${active === items.href ? "navActiveView" : ""}`}
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4 max-lg:hidden">

          {/* Contact Button */}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className={`rounded-full text-sm border-2 px-5 py-2 font-medium transition-colors duration-500 ${darkMode ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-markyetcolor focus:bg-markyetcolor focus:text-white'}`}
          >
            Contact Us
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-500 ${darkMode ? 'bg-yellow-400' : 'bg-gray-400'}`}
          >
            {/* Circle */}
            <div
              className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-500 ${darkMode ? 'translate-x-7 rotate-0' : 'translate-x-0 rotate-12'}`}
            ></div>

            {/* Sun/Moon Icons */}
            <span
              className={`absolute left-1 text-sm transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`}
            >
              ☀️
            </span>
            <span
              className={`absolute right-1 text-sm transition-opacity duration-500 ${darkMode ? 'opacity-0' : 'opacity-100'}`}
            >
              🌙
            </span>
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="hidden max-lg:flex">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1 w-7 h-6 justify-center items-center"
          >
            <span
              className={`block h-0.5 w-full bg-current transform transition duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-current transform transition duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className={`fixed top-20 right-5 w-60 p-6 shadow-lg rounded-xl z-40 max-lg:block lg:hidden transition-colors duration-500 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
          <ul className="flex flex-col gap-6">
            {navLinks.map((items) => (
              <li key={items.label}>
                <a
                  href={items.href}
                  onClick={() => {
                    setActive(items.href);
                    setMenuOpen(false);
                  }}
                  className={`${active === items.href ? "navActiveView" : ""}`}
                >
                  {items.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className={`rounded-full text-sm border-2 px-5 py-2 font-medium w-full transition-colors duration-500 ${darkMode ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-markyetcolor focus:bg-markyetcolor focus:text-white'}`}
              >
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className={`relative w-full h-7 flex items-center rounded-full p-1 transition-colors duration-500 ${darkMode ? 'bg-yellow-400' : 'bg-gray-400'}`}
              >
                <div
                  className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-500 ${darkMode ? 'translate-x-7 rotate-0' : 'translate-x-0 rotate-12'}`}
                ></div>
                <span
                  className={`absolute left-1 text-sm transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`}
                >
                  ☀️
                </span>
                <span
                  className={`absolute right-1 text-sm transition-opacity duration-500 ${darkMode ? 'opacity-0' : 'opacity-100'}`}
                >
                  🌙
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
