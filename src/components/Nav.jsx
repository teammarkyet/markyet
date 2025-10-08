import React, { useState } from 'react'
import { navLinks } from '../constants'
import { hamburger } from "../assets/icons"
import { MarkLogo } from '../assets/images'
const Nav = () => {
  const [active, setActive] = useState("#home")
  const [menuOpen, setMenuOpen] = useState(false) // 👈 state for mobile menu

  return (
    <header className="flex justify-center py-4 bg-gray-100">
      <nav className="fixed z-50 bg-gray-50 rounded-full w-[90%] min-w-9xl flex justify-between items-center px-10 py-3 shadow max-container animate-drop">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img src={MarkLogo} alt="Markyet Logo" className="w-22 h-7 object-contain" />
        </div>


        {/* Desktop Menu */}
        <ul className="bg-gray-100 flex justify-center items-center gap-16 rounded-full px-4 py-2 max-lg:hidden">
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

        {/* Contact Button */}
        <div className="max-lg:hidden">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full text-sm border-2 border-markyetcolor px-5 py-2 font-medium focus:bg-markyetcolor focus:text-white"
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
        <div className="fixed top-20 right-5 bg-white shadow-lg rounded-xl p-6 w-60 z-40 max-lg:block lg:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((items) => (
              <li key={items.label}>
                <a
                  href={items.href}
                  onClick={() => {
                    setActive(items.href)
                    setMenuOpen(false) // close menu after click
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
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  setMenuOpen(false)
                }}
                className="rounded-full text-sm border-2 border-markyetcolor px-5 py-2 font-medium focus:bg-markyetcolor focus:text-white w-full"
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
