import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, Shield, Star } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Find Your Perfect Life Partner",
      subtitle: "Millions of verified profiles waiting to connect with you",
      image: "/homeSlider/image1.png",
      cta: "Start Your Journey"
    },
    {
      id: 2,
      title: "Trusted by Millions",
      subtitle: "Join India's most trusted matrimonial platform with verified profiles",
      image: "/homeSlider/image2.png",
      cta: "Register Free"
    },
    {
      id: 3,
      title: "Success Stories Every Day",
      subtitle: "Thousands of couples found love through our platform",
      image: "/homeSlider/image5.png",
      cta: "View Success Stories"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image - Fixed for desktop */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full  object-cover object-center"
                style={{ 
                  minHeight: '80vh',
                  minWidth: '100vw'
                }}
                onError={(e) => {
                  console.log('Image failed to load:', slide.image);
                  // Fallback to background image method
                  e.target.style.display = 'none';
                  e.target.parentElement.style.backgroundImage = `url(${slide.image})`;
                  e.target.parentElement.style.backgroundSize = 'cover';
                  e.target.parentElement.style.backgroundPosition = 'center';
                  e.target.parentElement.style.backgroundRepeat = 'no-repeat';
                }}
              />
            </div>
            
            {/* Overlay */}
            <div className="" />
             {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-purple-900/70 to-pink-800/80 z-10" /> */}
            
            {/* Content */}
            <div className="relative z-20 flex items-center justify-center h-full">
              <div className="text-center text-white max-w-4xl px-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed opacity-90 drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Feature Icons */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 hidden lg:flex items-center space-x-12 text-white">
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span className="text-sm font-medium">50,000+ Profiles</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span className="text-sm font-medium">26 samaj</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;