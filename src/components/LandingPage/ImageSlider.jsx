
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample images - replace these URLs with your own images
  const images = [
    {
      url: "/slider/flower.png",
      title: "Mountain Landscape",
      description: "Beautiful mountain scenery with crystal clear lakes"
    },
    {
      url: "/slider/vivahmahurat.jpg",
      title: "Ocean View",
      description: "Stunning ocean waves and coastal beauty"
    },
    {
      url: "/slider/viewProfile.jpeg", 
      title: "Forest Path",
      description: "Peaceful forest trail surrounded by nature"
    },
    {
      url: "public/slider/images.png",
      title: "Sunset Sky",
      description: "Magnificent sunset with vibrant colors"
    },
    
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
      <div className="relative w-full max-w-8xl mx-auto mt-9">
        
        {/* Main Slider Container */}
        <div 
          className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          {/* Images Container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative min-w-full h-50">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Image Info */}
                <div className="absolute bottom-8 left-8 text-white transform transition-all duration-300">
                  <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">
                    {image.title}
                  </h3>
                  <p className="text-lg opacity-90 drop-shadow-md">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Loading Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
            <div 
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-100 ease-linear"
              style={{ 
                width: isAutoPlaying ? `${((currentIndex + 1) / images.length) * 100}%` : '0%' 
              }}
            ></div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 hover:scale-125 ${
                currentIndex === index 
                  ? 'text-purple-400' 
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              <Circle 
                size={12} 
                fill={currentIndex === index ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth={2}
              />
            </button>
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-6 space-x-4 overflow-x-auto pb-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 transition-all duration-300 rounded-lg overflow-hidden ${
                currentIndex === index 
                  ? 'ring-4 ring-purple-400 scale-110' 
                  : 'opacity-60 hover:opacity-80 hover:scale-105'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-20 h-16 object-cover"
              />
              {currentIndex === index && (
                <div className="absolute inset-0 bg-purple-400/20"></div>
              )}
            </button>
          ))}
        </div>

        {/* Controls Info */}
        <div className="text-center mt-6 text-white/60 text-sm">
          <p>Hover to pause • Click arrows or dots to navigate • Auto-plays every 4 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;