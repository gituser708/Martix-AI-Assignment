import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Matrix AI</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-indigo-400">
            Services
          </a>
          <a href="#vision" className="hover:text-indigo-400">
            Vision
          </a>
          <a href="#contact" className="hover:text-indigo-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-4">
          <a href="#services" className="block hover:text-indigo-400">
            Services
          </a>
          <a href="#vision" className="block hover:text-indigo-400">
            Vision
          </a>
          <a href="#contact" className="block hover:text-indigo-400">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
