import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={` w-full  transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-gradient-to-r from-purple-500 to-rose-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/vivahlogo.png"
              alt="Vivah Logo"
              className="w-15 h-10 object-contain"
            />
           
            {/* <span className="text-xl md:text-2xl font-bold text-white">विवाह मुहूर्त</span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { label: 'होम', id: 'home' },
              { label: 'सुविधाएं', id: 'features' },
              { label: 'हमारे बारे में', id: 'about' },
              { label: 'वेंडर डायरेक्टरी', id: 'vendor' },
              { label: 'प्लान विवाह', id: 'plan' },
              { label: 'रिश्ते', id: 'rishtey' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-white font-bold hover:text-rose-200 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button className="bg-gradient-to-r to-rose-500 from-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
              लॉगिन
            </button>
            <button className="bg-gradient-to-r to-rose-500 from-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
              लॉगिन
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-rose-200 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20 shadow-lg">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {[
              { label: 'होम', id: 'home' },
              { label: 'सुविधाएं', id: 'features' },
              { label: 'हमारे बारे में', id: 'about' },
              { label: 'वेंडर डायरेक्टरी', id: 'vendor' },
              { label: 'प्लान विवाह', id: 'plan' },
              { label: 'रिश्ते', id: 'rishtey' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded-md"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200">
              रजिस्टर 
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
