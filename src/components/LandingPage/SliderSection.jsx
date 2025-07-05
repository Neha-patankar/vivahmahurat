import React, { useState, useEffect } from 'react';

const SadiHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leftSliderData = [
    {
      title: "वधू-वर खोजें",
      description: "हजारों प्रोफाइल्स में से अपना जीवनसाथी",
      icon: "👰",
      color: "from-pink-400 to-rose-600"
    },
    {
      title: "मैच मेकिंग",
      description: "परफेक्ट मैच के लिए एडवांस्ड फिल्टर",
      icon: "💕",
      color: "from-red-400 to-pink-600"
    },
    {
      title: "शादी की तैयारी",
      description: "A to Z शादी की सभी जरूरतें",
      icon: "💒",
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "रिश्ते का सत्यापन",
      description: "100% वेरिफाइड प्रोफाइल्स",
      icon: "✅",
      color: "from-green-400 to-teal-600"
    },
    {
      title: "कुंडली मिलान",
      description: "ज्योतिष विशेषज्ञों द्वारा मैचिंग",
      icon: "🔮",
      color: "from-orange-400 to-red-600"
    }
  ];

  const rightSliderData = [
    {
      title: "फोटो गैलरी",
      description: "सुंदर शादी की तस्वीरें देखें",
      icon: "📸",
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "वेडिंग प्लानिंग",
      description: "शादी की पूरी योजना बनाएं",
      icon: "📋",
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "डेकोरेशन सर्विस",
      description: "शानदार मंडप और सजावट",
      icon: "🎊",
      color: "from-yellow-400 to-orange-600"
    },
    {
      title: "कैटरिंग सर्विस",
      description: "स्वादिष्ट व्यंजन और मिठाइयां",
      icon: "🍽️",
      color: "from-green-400 to-teal-600"
    },
    {
      title: "मेहंदी & मेकअप",
      description: "ब्राइडल ब्यूटी सर्विसेज",
      icon: "💄",
      color: "from-rose-400 to-pink-600"
    }
  ];

  const centerImages = [
    "/slider/viewProfile.jpeg",
    "/slider/vivahmahurat.jpg",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % centerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const SliderCard = ({ data, direction }) => (
    <div className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-0  w-80 overflow-hidden`}>
      <div className={`flex flex-col  ${direction === 'left' ? 'animate-slide-up' : 'animate-slide-down'}`}>
        {[...data, ...data, ...data].map((item, index) => (
          <div
            key={index}
            className={`min-h-32 p-6 m-2 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-sm bg-opacity-90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{item.icon}</div>
              <div className="text-white">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className=" bg-gradient-to-br from-rose-900 via-pink-900 to-red-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10  flex items-center justify-center px-0">
        <div className="w-full max-w-7xl mx-auto relative">
          
          {/* Left Slider */}
          <SliderCard data={leftSliderData} direction="left" />

          {/* Center Image Section */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl group py-8">
              {centerImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Wedding Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">
                  🌸 विवाह महूरत 
                  </h1>
                  <p className="text-xl mb-4 drop-shadow-md">
                    आपका भरोसेमंद विवाह पोर्टल
                  </p>
                  <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    अभी रजिस्टर करें
                  </button>
                </div>
              </div> */}

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
            </div>
          </div>

          {/* Right Slider */}
          <SliderCard data={rightSliderData} direction="right" />

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {centerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes slide-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        
        .animate-slide-up {
          animation: slide-up 20s linear infinite;
        }
        
        .animate-slide-down {
          animation: slide-down 20s linear infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SadiHeroSection;