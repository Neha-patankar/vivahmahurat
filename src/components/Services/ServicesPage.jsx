import React, { useState, useEffect } from 'react';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      id: 1,
      title: "वधू-वर खोजें",
      description: "हजारों प्रोफाइल्स में से अपना जीवनसाथी खोजें। विस्तृत बायो-डेटा के साथ।",
      icon: "👰",
      color: "from-pink-400 to-rose-600",
      category: "matrimony",
      features: ["हजारों प्रोफाइल्स", "विस्तृत बायो-डेटा", "फोटो गैलरी", "प्राइवेसी सेटिंग्स"]
    },
    {
      id: 2,
      title: "मैच मेकिंग",
      description: "परफेक्ट मैच के लिए एडवांस्ड फिल्टर और AI-आधारित सुझाव।",
      icon: "💕",
      color: "from-red-400 to-pink-600",
      category: "matrimony",
      features: ["AI मैचिंग", "कंपैटिबिलिटी स्कोर", "व्यक्तित्व विश्लेषण", "प्राथमिकता फिल्टर"]
    },
    {
      id: 3,
      title: "कुंडली मिलान",
      description: "ज्योतिष विशेषज्ञों द्वारा गुण मिलान और भविष्यफल।",
      icon: "🔮",
      color: "from-orange-400 to-red-600",
      category: "astrology",
      features: ["36 गुण मिलान", "मंगल दोष जांच", "भविष्यफल", "विशेषज्ञ सलाह"]
    },
    {
      id: 4,
      title: "रिश्ते का सत्यापन",
      description: "100% वेरिफाइड प्रोफाइल्स और बैकग्राउंड वेरिफिकेशन।",
      icon: "✅",
      color: "from-green-400 to-teal-600",
      category: "matrimony",
      features: ["KYC वेरिफिकेशन", "डॉक्यूमेंट चेक", "रेफरेंस वेरिफिकेशन", "सिक्योरिटी बैज"]
    },
    {
      id: 5,
      title: "वेडिंग प्लानिंग",
      description: "शादी की पूरी योजना बनाएं। हॉल बुकिंग से लेकर डेकोरेशन तक।",
      icon: "📋",
      color: "from-purple-400 to-pink-600",
      category: "planning",
      features: ["वेन्यू बुकिंग", "बजट प्लानिंग", "टाइमलाइन", "वेंडर कोऑर्डिनेशन"]
    },
    {
      id: 6,
      title: "डेकोरेशन सर्विस",
      description: "शानदार मंडप और सजावट। थीम-बेस्ड डेकोरेशन।",
      icon: "🎊",
      color: "from-yellow-400 to-orange-600",
      category: "decoration",
      features: ["मंडप डिजाइन", "फूलों की सजावट", "लाइटिंग", "फोटो बूथ"]
    },
    {
      id: 7,
      title: "कैटरिंग सर्विस",
      description: "स्वादिष्ट व्यंजन और मिठाइयां। पारंपरिक और मॉडर्न मेन्यू।",
      icon: "🍽️",
      color: "from-green-400 to-teal-600",
      category: "catering",
      features: ["पारंपरिक व्यंजन", "लाइव काउंटर", "मिठाई बॉक्स", "स्पेशल मेन्यू"]
    },
    {
      id: 8,
      title: "मेहंदी & मेकअप",
      description: "ब्राइडल ब्यूटी सर्विसेज। प्रोफेशनल मेकअप आर्टिस्ट।",
      icon: "💄",
      color: "from-rose-400 to-pink-600",
      category: "beauty",
      features: ["ब्राइडल मेकअप", "हेयर स्टाइलिंग", "मेहंदी डिजाइन", "स्किन केयर"]
    },
    {
      id: 9,
      title: "फोटो गैलरी",
      description: "सुंदर शादी की तस्वीरें देखें। प्रीमियम फोटोग्राफी।",
      icon: "📸",
      color: "from-blue-400 to-indigo-600",
      category: "photography",
      features: ["प्री-वेडिंग", "वेडिंग फोटो", "सिनेमैटिक वीडियो", "ड्रोन शूट"]
    }
  ];

  const categories = [
    { id: 'all', name: 'सभी सेवाएं', icon: '🎯' },
    { id: 'matrimony', name: 'मैट्रिमोनी', icon: '💖' },
    { id: 'planning', name: 'प्लानिंग', icon: '📋' },
    { id: 'decoration', name: 'डेकोरेशन', icon: '🎊' },
    { id: 'catering', name: 'कैटरिंग', icon: '🍽️' },
    { id: 'beauty', name: 'ब्यूटी', icon: '💄' },
    { id: 'photography', name: 'फोटोग्राफी', icon: '📸' },
    { id: 'astrology', name: 'ज्योतिष', icon: '🔮' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ServiceCard = ({ service, index }) => (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer transform ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
            <span className="text-white text-sm">→</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-white/90 mb-4 line-clamp-3 group-hover:text-white transition-colors duration-300">
          {service.description}
        </p>
        
        <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h4 className="text-white font-semibold text-sm">मुख्य सुविधाएं:</h4>
          <ul className="text-white/90 text-sm space-y-1">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-sm group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full blur-sm group-hover:scale-150 transition-transform duration-500"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-red-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              हमारी सेवाएं
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-500">
              आपकी शादी को यादगार बनाने के लिए सभी सेवाएं एक ही स्थान पर
            </p>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-600 mx-auto rounded-full animate-fade-in animation-delay-1000"></div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-white text-rose-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                अभी संपर्क करें
              </h2>
              <p className="text-white/80 mb-6">
                हमारे विशेषज्ञों से बात करें और अपनी शादी को सपनों जैसा बनाएं
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  📞 कॉल करें
                </button>
                <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  💬 व्हाट्सएप करें
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;