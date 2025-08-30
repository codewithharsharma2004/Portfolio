import React, { useState } from 'react';
import logo from "/src/assets/hs.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mb-20 mx-4 md:mx-20 flex flex-wrap items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="#top">
          <img 
            className="mx-2 w-20 cursor-pointer transition duration-300 
                       hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]" 
            src={logo} 
            alt="logo" 
          />
        </a>
      </div>

      {/* Hamburger for mobile */}
      <button 
        className="md:hidden text-3xl text-pink-500 mt-2"
        onClick={toggleMenu}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Menu Items */}
      <ul className={`w-full md:w-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mt-4 md:mt-0 
                      ${isOpen ? 'flex' : 'hidden'} md:flex text-center`}>
        <li><a href="#top" className="hover:text-pink-500 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-pink-500 transition-colors">About Me</a></li>
        <li><a href="#technologies" className="hover:text-pink-500 transition-colors">Technologies</a></li>
        <li><a href="#experience" className="hover:text-pink-500 transition-colors">Experience</a></li>
        <li><a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a></li>
        <li><a href="#contact" className="hover:text-pink-500 transition-colors">Get in Touch</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
