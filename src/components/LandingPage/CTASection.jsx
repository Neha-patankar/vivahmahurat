import React from 'react';

const CTASection = () => (
  <div className="py-10 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-4xl md:text-2xl font-bold text-white">
        Ready to Find Your Soulmate?
      </h2>
      <p className="text-xl text-white/90 mb-10">
        Join thousands of happy couples who found their perfect match through Vivah Mahurat
      </p>
      <button className="bg-white text-orange-600 font-bold py-4 px-12 rounded-2xl shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
        Register Free Today
      </button>
    </div>
  </div>
);

export default CTASection;
