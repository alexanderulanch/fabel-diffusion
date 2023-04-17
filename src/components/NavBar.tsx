import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import useDarkMode from "../hooks/useDarkMode";

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null); // Create a ref to the dropdown menu

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown menu if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the event listeners when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full flex items-center justify-between p-4 z-10 transition-colors duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-slate-800 text-white"
            : "bg-white text-slate-900"
          : "bg-transparent text-white"
      } shadow`}
    >
      <Link href="/" legacyBehavior>
        <a className="text-xl font-bold">Fable Diffusion</a>
      </Link>
      <div className="relative">
        {/* Dropdown button */}
        <button
          className="focus:outline-none dark:focus:ring-blue-800 p-2"
          type="button"
          onClick={handleDropdownToggle}
        >
          <svg
            className="w-6 h-6 text-blue-700 dark:text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef} // Attach the ref to the dropdown menu
            className="absolute right-0 mt-2 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
