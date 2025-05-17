import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-[#0066CC]" />
            <div className="ml-2 flex flex-col">
              <span className="text-indigo-600 text-1.7xl font-bold">Reader</span>
 
              <span className="text-gray-600 text-xs tracking-tight leading-none">PowerDeepAI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#demo"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Demo
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              FAQ
            </a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium">
              Download
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#demo"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium w-full">
              Download
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};