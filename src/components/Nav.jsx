import React, { useState } from 'react'
import { navLinks } from '../constants'
import { hamburger } from "../assets/icons"
import { MarkLogo } from '../assets/images'

const Nav = () => {
  const [active, setActive] = useState("#home")
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex justify-center py-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <nav className="fixed z-50 bg-gray-50 dark:bg-gray-800 rounded-full w-[90%] min-w-9xl flex justify-between items-center px-10 py-3 shadow max-container animate-drop transition-colors duration-500">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img src={MarkLogo} alt="Markyet Logo" className="w-22 h-7 object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="flex justify-center items-center gap-16 rounded-full px-4 py-2 max-lg:hidden bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                onClick={() => setActive(items.href)}
                className={`${active === items.href ? "navActiveView" : ""} text-gray-900 dark:text-white hover:text-markyetcolor dark:hover:text-violet-400 transition-colors duration-300`}
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="max-lg:hidden">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full text-sm border-2 border-markyetcolor dark:border-violet-400 px-5 py-2 font-medium text-gray-900 dark:text-white hover:bg-markyetcolor hover:text-white dark:hover:bg-violet-400 dark:hover:text-white transition-all duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="hidden max-lg:block">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-20 right-5 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-60 z-40 max-lg:block lg:hidden transition-colors duration-500">
          <ul className="flex flex-col gap-6">
            {navLinks.map((items) => (
              <li key={items.label}>
                <a
                  href={items.href}
                  onClick={() => {
                    setActive(items.href)
                    setMenuOpen(false)
                  }}
                  className={`${active === items.href ? "navActiveView" : ""} text-gray-900 dark:text-white hover:text-markyetcolor dark:hover:text-violet-400 transition-colors duration-300`}
                >
                  {items.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  setMenuOpen(false)
                }}
                className="rounded-full text-sm border-2 border-markyetcolor dark:border-violet-400 px-5 py-2 font-medium text-gray-900 dark:text-white hover:bg-markyetcolor hover:text-white dark:hover:bg-violet-400 dark:hover:text-white w-full transition-all duration-300"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Nav
