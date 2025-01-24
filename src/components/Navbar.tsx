import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="text-white text-xl font-bold">Sigma</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
