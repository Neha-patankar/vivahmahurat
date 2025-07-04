import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Circle, Heart } from 'lucide-react';

const IndianWeddingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Indian Wedding and Festival Images with cultural context
  const images = [
    {
      title: "विवाह यात्रा",
      description: "Traditional Indian wedding procession with baraat",
      content: (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-orange-200">
          <div className="text-center px-8">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-4xl font-bold text-red-800 mb-2">विवाह यात्रा</h3>
            <p className="text-xl text-red-600">Traditional wedding procession with decorated horses and musicians</p>
            <div className="flex justify-center space-x-4 mt-6 text-3xl">
              <span>🏇</span>
              <span>🎺</span>
              <span>🥁</span>
              <span>🎉</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "फूलों की माला",
      description: "Beautiful marigold garlands and diyas",
      content: (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200">
          <div className="text-center px-8">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="text-4xl font-bold text-orange-800 mb-2">फूलों की माला</h3>
            <p className="text-xl text-orange-600">Sacred marigold garlands and traditional oil lamps</p>
            <div className="flex justify-center space-x-4 mt-6 text-3xl">
              <span>🌼</span>
              <span>🪔</span>
              <span>🌺</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "पारंपरिक उत्सव",
      description: "Cultural celebrations and rituals",
      content: (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200">
          <div className="text-center px-8">
            <div className="text-6xl mb-4">🎊</div>
            <h3 className="text-4xl font-bold text-purple-800 mb-2">पारंपरिक उत्सव</h3>
            <p className="text-xl text-purple-600">Traditional ceremonies with music and dance</p>
            <div className="flex justify-center space-x-4 mt-6 text-3xl">
              <span>💃</span>
              <span>🎭</span>
              <span>🎨</span>
              <span>🎪</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "शादी की रस्में",
      description: "Sacred wedding ceremonies",
      content: (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-100 to-red-200">
          <div className="text-center px-8">
            <div className="text-6xl mb-4">💒</div>
            <h3 className="text-4xl font-bold text-red-800 mb-2">शादी की रस्में</h3>
            <p className="text-xl text-red-600">Sacred wedding rituals and holy ceremonies</p>
            <div className="flex justify-center space-x-4 mt-6 text-3xl">
              <span>🔥</span>
              <span>🙏</span>
              <span>💍</span>
              <span>🕉️</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "भारतीय संस्कृति",
      description: "Rich cultural heritage",
      content: (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-teal-200">
          <div className="text-center px-8">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-4xl font-bold text-green-800 mb-2">भारतीय संस्कृति</h3>
            <p className="text-xl text-green-600">Rich traditions and cultural heritage of India</p>
            <div className="flex justify-center space-x-4 mt-6 text-3xl">
              <span>🎭</span>
              <span>📿</span>
              <span>🛕</span>
              <span>🎺</span>
            </div>
          </div>
        </div>
      )
    }
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
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl mx-auto">
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
          <Heart className="text-pink-300" fill="currentColor" />
        </div>
        
        {/* Main Slider Container */}
        <div 
          className="relative w-full h-[70vh] rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-yellow-50 to-orange-100 border-4 border-yellow-400"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          {/* Images Container */}
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative min-w-full h-full">
                {image.content}
                
                {/* Decorative Border */}
                <div className="absolute inset-4 border-4 border-yellow-400/30 rounded-2xl pointer-events-none"></div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute top-8 right-8 text-2xl animate-pulse opacity-60">
                  🪔
                </div>
                <div className="absolute bottom-8 left-8 text-2xl animate-pulse opacity-60" style={{ animationDelay: '1s' }}>
                  🌸
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 backdrop-blur-sm rounded-full p-4 transition-all duration-300 opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 backdrop-blur-sm rounded-full p-4 transition-all duration-300 opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-200 to-orange-200">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-100 ease-linear"
              style={{ 
                width: isAutoPlaying ? `${((currentIndex + 1) / images.length) * 100}%` : '0%' 
              }}
            ></div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 hover:scale-125 p-2 rounded-full ${
                currentIndex === index 
                  ? 'text-orange-400 bg-orange-400/20' 
                  : 'text-white/40 hover:text-orange-300 hover:bg-orange-300/10'
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

        {/* Title Display */}
        <div className="text-center mt-6">
          <h2 className="text-3xl font-bold text-orange-200 mb-2">
            {images[currentIndex].title}
          </h2>
          <p className="text-lg text-orange-300/80">
            {images[currentIndex].description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-6 space-x-8 text-2xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🪔</span>
          <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🌺</span>
          <span className="animate-bounce" style={{ animationDelay: '1s' }}>🎭</span>
          <span className="animate-bounce" style={{ animationDelay: '1.5s' }}>🌸</span>
          <span className="animate-bounce" style={{ animationDelay: '2s' }}>🪔</span>
        </div>

        {/* Controls Info */}
        <div className="text-center mt-6 text-orange-200/60 text-sm">
          <p>🎊 Indian Wedding Celebrations • Hover to pause • Auto-plays every 4 seconds 🎊</p>
        </div>
      </div>
    </div>
  );
};

export default IndianWeddingSlider;