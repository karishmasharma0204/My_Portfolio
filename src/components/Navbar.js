import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-lg font-bold">Karishma's Portfolio</div>

        {/* Show hamburger menu only on mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon for mobile */}
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Show desktop menu only when hamburger is not open */}
        <ul
          className={`hidden md:flex space-x-6 text-white ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <li>
            <a
              href="#about"
              className="transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <ul className="flex flex-col space-y-2 text-white">
            <li>
              <a
                href="#about"
                className="transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
