import React from 'react';

const InfiniteAdSlider = () => {
  // Advertisement data
  const advertisements = [
    {
      id: 1,
      title: "Premium Wedding Services",
      subtitle: "सुंदर विवाह समारोह",
      description: "Book your dream wedding today!",
      bgColor: "from-rose-500 to-pink-600",
      icon: "💒"
    },
    {
      id: 2,
      title: "Photography Package",
      subtitle: "यादगार तस्वीरें",
      description: "Professional wedding photography",
      bgColor: "from-purple-500 to-indigo-600",
      icon: "📸"
    },
    {
      id: 3,
      title: "Catering Services",
      subtitle: "स्वादिष्ट व्यंजन",
      description: "Delicious food for your guests",
      bgColor: "from-orange-500 to-red-600",
      icon: "🍽️"
    },
    {
      id: 4,
      title: "Decoration & Setup",
      subtitle: "खूबसूरत सजावट",
      description: "Beautiful venue decorations",
      bgColor: "from-green-500 to-teal-600",
      icon: "🎨"
    },
    {
      id: 5,
      title: "Music & Entertainment",
      subtitle: "संगीत और मनोरंजन",
      description: "Live music and DJ services",
      bgColor: "from-yellow-500 to-orange-600",
      icon: "🎵"
    },
    {
      id: 6,
      title: "Bridal Makeup",
      subtitle: "दुल्हन का श्रृंगार",
      description: "Professional bridal makeup",
      bgColor: "from-pink-500 to-rose-600",
      icon: "💄"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 py-8 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🌟 Special Offers 🌟
        </h2>
        <p className="text-gray-600">विशेष छूट और सेवाएं</p>
      </div>

      {/* Infinite Slider */}
      <div className="relative">
        {/* Left to Right Scroll */}
        <div className="flex animate-scroll-left space-x-6 mb-4">
          {/* Duplicate ads for seamless loop */}
          {[...advertisements, ...advertisements].map((ad, index) => (
            <div
              key={`left-${index}`}
              className={`flex-shrink-0 w-80 h-32 bg-gradient-to-r ${ad.bgColor} rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
            >
              {/* Decorative circles */}
              <div className="absolute top-2 right-2 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
              
              <div className="p-4 h-full flex items-center justify-between text-white relative z-10">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{ad.title}</h3>
                  <p className="text-sm text-white text-opacity-90 mb-1">{ad.subtitle}</p>
                  <p className="text-xs text-white text-opacity-80">{ad.description}</p>
                </div>
                <div className="text-4xl ml-4">{ad.icon}</div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full animate-shine"></div>
            </div>
          ))}
        </div>

        {/* Right to Left Scroll */}
        <div className="flex animate-scroll-right space-x-6">
          {/* Duplicate ads for seamless loop - reverse order */}
          {[...advertisements.reverse(), ...advertisements].map((ad, index) => (
            <div
              key={`right-${index}`}
              className={`flex-shrink-0 w-80 h-32 bg-gradient-to-r ${ad.bgColor} rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
            >
              {/* Decorative elements */}
              <div className="absolute top-3 left-3 w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 bg-white bg-opacity-30 rounded-full"></div>
              
              <div className="p-4 h-full flex items-center justify-between text-white relative z-10">
                <div className="text-4xl mr-4">{ad.icon}</div>
                <div className="flex-1 text-right">
                  <h3 className="text-lg font-bold mb-1">{ad.title}</h3>
                  <p className="text-sm text-white text-opacity-90 mb-1">{ad.subtitle}</p>
                  <p className="text-xs text-white text-opacity-80">{ad.description}</p>
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 translate-x-full animate-shine-reverse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse">
          🎉 Contact Us Today! 🎉
        </button>
        <p className="text-gray-600 mt-2 text-sm">आज ही संपर्क करें और विशेष छूट पाएं!</p>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        @keyframes shine-reverse {
          0% {
            transform: translateX(100%) skewX(-12deg);
          }
          100% {
            transform: translateX(-200%) skewX(-12deg);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }

        .animate-shine-reverse {
          animation: shine-reverse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteAdSlider;