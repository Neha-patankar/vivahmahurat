import React from 'react';
import { Heart, Star, Users, Calendar } from 'lucide-react';
import SearchForm from './SearchForm';

const HeroSection = () => {
  return (
    <div className="relative  flex items-center justify-center overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20 animate-bounce" />
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-20 animate-bounce" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' ...")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            {/* <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full shadow-2xl">
              <Heart className="w-12 h-12 text-white" />
            </div> */}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">Vivah Mahurat</h1>
         
          <p className="text-xl md:text-2xl text-gray-700 my-6 max-w-4xl mx-auto">आपका सपनों का विवाह... हमारी विशेषज्ञता</p>
          
            
        </div>
        <div className='mt-32'>
        <SearchForm/>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
