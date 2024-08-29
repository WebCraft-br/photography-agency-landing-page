"use client"; 
import { useState } from "react";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import Button from "./ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar flexBetween max-container padding-container relative z-30 py-5 bg-gradient-to-b from-transparent to-transparent">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img src="/logo.png" alt="CREACY" width={44} height={20} className="rounded-md" />
        </Link>
        <p className="text-white mb-2 text-lg font-semibold">CREACY</p>
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-6 items-center rounded-full bg-white/10 p-3 shadow-lg">
        {NAV_LINKS.map((link, index) => (
          <li key={link.key} className="flex items-center">
            <Link
              href={link.href}
              className={`regular-16 text-white hover:text-gray-300 transition-all ${index < NAV_LINKS.length - 1 ? 'pr-4' : ''}`}
            >
              {link.label}
            </Link>
            {/* Vertical line */}
            {index < NAV_LINKS.length - 1 && (
              <div className="w-[1px] h-6 bg-gray-500 mx-2"></div>
            )}
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="lg:flex hidden items-center">
        <Button type="button" title="BOOK A CALL" variant="btn_dark_green" />
        <button className="w-12 h-12 inline-flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-10 10M17 7H6.5M17 7v10" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={handleMobileMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-5">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="w-full text-center">
              <Link
                href={link.href}
                className="block py-2 text-white hover:text-gray-300 transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <Button type="button" title="BOOK A CALL" variant="btn_dark_green" />
       {/* Add the arrow button to the mobile menu */}
       <button className="w-12 h-12 inline-flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 7l-10 10M17 7H6.5M17 7v10"
              />
            </svg>
          </button>
        </ul>
      )}
      
    </nav>
  );
};

export default Navbar;
