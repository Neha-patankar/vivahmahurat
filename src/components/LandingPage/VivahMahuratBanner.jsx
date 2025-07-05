// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, X, Heart, Calendar, MapPin, Phone, Users, Star, Gift, Camera, Crown } from 'lucide-react';

// const VivahMahuratBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   const slides = [
//     {
//       id: 1,
//       title: "Vivah Mahurat",
//       subtitle: "Complete Wedding Solutions",
//       content: "आपकी सपनों की शादी को साकार करने के लिए हमारे पास सभी सुविधाएं उपलब्ध हैं",
//       bgGradient: "from-pink-500 via-rose-500 to-red-500",
//       icon: <Crown className="w-8 h-8 text-white" />,
//       features: ["Premium Wedding Services", "Professional Team", "24/7 Support"]
//     },
//     {
//       id: 2,
//       title: "शुभ मुहूर्त",
//       subtitle: "Auspicious Wedding Dates",
//       content: "ज्योतिष के अनुसार सबसे शुभ मुहूर्त की जानकारी। आपकी कुंडली के अनुसार सटीक तारीख।",
//       bgGradient: "from-purple-500 via-pink-500 to-rose-500",
//       icon: <Calendar className="w-8 h-8 text-white" />,
//       features: ["Kundli Matching", "Muhurat Calculation", "Pandit Consultation"]
//     },
//     {
//       id: 3,
//       title: "Wedding Services",
//       subtitle: "Complete Package",
//       content: "Decoration • Photography • Catering • Venue • Music • Transportation",
//       bgGradient: "from-orange-500 via-red-500 to-pink-500",
//       icon: <Gift className="w-8 h-8 text-white" />,
//       features: ["Decoration Services", "Photography & Video", "Catering & Venue"]
//     },
//     {
//       id: 4,
//       title: "Premium Packages",
//       subtitle: "Starting from ₹50,000",
//       content: "Silver Package: ₹50,000\nGold Package: ₹1,00,000\nDiamond Package: ₹2,00,000",
//       bgGradient: "from-green-500 via-teal-500 to-blue-500",
//       icon: <Star className="w-8 h-8 text-white" />,
//       features: ["Budget Friendly", "Customizable", "EMI Available"]
//     },
//     {
//       id: 5,
//       title: "Book Now",
//       subtitle: "Special Offer - 20% OFF",
//       content: "Call Now: +91 98765 43210\nWhatsApp: +91 98765 43211\nEmail: info@vivahmahuart.com",
//       bgGradient: "from-indigo-500 via-purple-500 to-pink-500",
//       icon: <Phone className="w-8 h-8 text-white" />,
//       features: ["Free Consultation", "Instant Booking", "24/7 Support"]
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
//       <div className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform">
//         {/* Close Button */}
//         <button
//           onClick={() => setIsVisible(false)}
//           className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all backdrop-blur-sm"
//         >
//           <X className="w-5 h-5 text-white" />
//         </button>

//         {/* Slide Content */}
//         <div className="relative h-[450px] overflow-hidden">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                 index === currentSlide ? 'translate-x-0 opacity-100' : 
//                 index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
//               }`}
//             >
//               <div className={`h-full bg-gradient-to-br ${slide.bgGradient} flex flex-col items-center justify-center text-white p-8 relative overflow-hidden`}>
//                 {/* Animated Background Elements */}
//                 <div className="absolute inset-0 opacity-10">
//                   <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
//                   <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white rounded-full animate-pulse"></div>
//                   <div className="absolute top-1/2 left-8 w-12 h-12 border border-white rounded-full animate-bounce"></div>
//                   <div className="absolute top-1/4 right-8 w-8 h-8 border border-white rounded-full animate-bounce"></div>
//                   <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-white rounded-full animate-ping"></div>
//                 </div>

//                 {/* Icon with Animation */}
//                 <div className="mb-4 p-4 bg-white bg-opacity-20 rounded-full animate-pulse backdrop-blur-sm">
//                   {slide.icon}
//                 </div>

//                 {/* Title */}
//                 <h2 className="text-3xl font-bold mb-2 text-center tracking-wide">{slide.title}</h2>
                
//                 {/* Subtitle */}
//                 <p className="text-base font-medium mb-4 opacity-90 text-center">{slide.subtitle}</p>
                
//                 {/* Content */}
//                 <div className="text-center text-sm leading-relaxed whitespace-pre-line mb-4 max-w-xs">
//                   {slide.content}
//                 </div>

//                 {/* Features List */}
//                 <div className="flex flex-wrap justify-center gap-2 mb-4">
//                   {slide.features.map((feature, idx) => (
//                     <span key={idx} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs backdrop-blur-sm">
//                       {feature}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Decorative Border */}
//                 <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-white to-transparent opacity-30"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Dots */}
//         <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Arrow Navigation */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all backdrop-blur-sm"
//         >
//           <ChevronLeft className="w-6 h-6 text-white" />
//         </button>
        
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all backdrop-blur-sm"
//         >
//           <ChevronRight className="w-6 h-6 text-white" />
//         </button>

//         {/* Bottom Action Bar */}
//         <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-center">
//           <div className="flex items-center justify-center mb-3">
//             <div className="flex text-yellow-400">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className="w-4 h-4 fill-current" />
//               ))}
//             </div>
//             <span className="ml-2 text-sm text-gray-600">5.0 Rating • 1000+ Happy Couples</span>
//           </div>
          
//           <p className="text-sm text-gray-600 mb-4 font-medium">
//             🎉 Special Offer: Book Now & Get 20% OFF + Free Consultation
//           </p>
          
//           <div className="flex gap-3">
//             <button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105 shadow-lg">
//               Book Now
//             </button>
//             <button className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-lg">
//               Call Now
//             </button>
//           </div>
          
//           <p className="text-xs text-gray-500 mt-2">Limited Time Offer • Call +91 98765 43210</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VivahMahuratBanner;

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Crown } from 'lucide-react';

const VivahMahuratBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const fullText = "Welcome to Vivah Mahurat";
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  // Get window size for confetti
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Typewriter effect with loop
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typingForward) {
        if (textIndex < fullText.length) {
          setDisplayText(fullText.substring(0, textIndex + 1));
          setTextIndex((prev) => prev + 1);
        } else {
          setTypingForward(false);
        }
      } else {
        if (textIndex > 0) {
          setDisplayText(fullText.substring(0, textIndex - 1));
          setTextIndex((prev) => prev - 1);
        } else {
          setTypingForward(true);
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [textIndex, typingForward]);

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4 overflow-hidden">
      <div className="relative max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
        {/* Confetti */}
        <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={250} recycle={true} />

        {/* Close Button */}
        <button
          onClick={() => setShowBanner(false)}
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all backdrop-blur-sm text-white font-bold"
        >
          ✕
        </button>

        <div className="h-[460px] bg-gradient-to-br from-purple-800 via-rose-600 to-purple-500 text-white p-8 flex flex-col justify-center items-center relative overflow-hidden">
          {/* Logo */}
          <img src="/vivahlogo.png" alt="Vivah Logo" className="w-24 h-24 mb-4" />

          {/* Magic Icon */}
          <div className="mb-4 p-4 bg-white bg-opacity-20 rounded-full animate-pulse backdrop-blur-sm">
            <Crown className="w-8 h-8 text-white" />
          </div>

          {/* Typewriter Text */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center tracking-wider mb-2 ">
            {displayText}
            <span className="border-r-2 border-white ml-1 animate-pulse" />
          </h1>

          <p className="text-center text-lg opacity-90">आपका स्वागत है हमारे विशेष विवाह महूर्त मंच पर</p>

          {/* Background Decorations */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 left-1/2 w-12 h-12 border border-white rounded-full animate-spin"></div>
          </div>

          {/* Falling Flowers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-no-repeat bg-contain animate-flowerFall"
              style={{
                backgroundImage: 'url("/flower.png")',
                top: `${Math.random() * -100}px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}

          {/* Sparkling Dhamal (Diwali style) */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-yellow-300 animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}

          {/* Bottom Decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-white to-transparent opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default VivahMahuratBanner;
