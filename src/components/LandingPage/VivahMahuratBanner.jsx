

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
    }, 500);

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
          <img src="/vivahlogo.png" alt="Vivah Logo" className="w-52 h-52 mb-4" />

          {/* Magic Icon */}
        

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
