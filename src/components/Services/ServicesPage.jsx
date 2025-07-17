

import React, { useState, useEffect } from 'react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Updated services array
  const services = [
    { id: 1, title: 'Match Making', slug: 'match-making', icon: '💖', color: 'from-rose-400 to-pink-500', category: 'matrimony', description: 'Find your perfect match with advanced algorithms.', features: ['AI Matching', 'Compatibility Score', 'Personality Analysis'] },
    { id: 2, title: 'Parichay Sammelan Management', slug: 'parichay-sammelan', icon: '👥', color: 'from-purple-400 to-indigo-500', category: 'event', description: 'Seamless management for your community gatherings.', features: ['Event Coordination', 'Guest Management', 'Venue Support'] },
    { id: 3, title: 'White Collar Matrimony', slug: 'white-collar-matrimony', icon: '💼', color: 'from-blue-400 to-cyan-500', category: 'matrimony', description: 'Exclusive matchmaking for professionals.', features: ['Verified Profiles', 'Confidential Matching', 'Premium Support'] },
    { id: 4, title: 'Assistance Match Making', slug: 'assistance-match-making', icon: '🤝', color: 'from-emerald-400 to-teal-500', category: 'matrimony', description: 'Personalized assistance for your matrimonial search.', features: ['Dedicated Counselor', 'Curated Matches', 'Profile Enhancement'] },
    { id: 5, title: 'Marriage Biodata Maker', slug: 'biodata-maker', icon: '📝', color: 'from-indigo-400 to-purple-500', category: 'tools', description: 'Create stunning and professional marriage biodata.', features: ['Customizable Templates', 'Easy Editor', 'Downloadable Formats'] },
    { id: 6, title: 'Premium & VIP Rishte', slug: 'premium-vip-rishte', icon: '👑', color: 'from-amber-400 to-orange-500', category: 'matrimony', description: 'High-end matchmaking for discerning individuals.', features: ['Elite Profiles', 'Exclusive Access', 'Priority Service'] },
    { id: 7, title: 'Vivah Management', slug: 'vivah-management', icon: '🗓️', color: 'from-pink-400 to-rose-500', category: 'event', description: 'End-to-end wedding event management services.', features: ['Venue Booking', 'Vendor Coordination', 'Budget Planning'] },
    { id: 8, title: 'Kundali Matching', slug: 'kundali-matching', icon: '🔮', color: 'from-green-400 to-lime-500', category: 'astrology', description: 'Astrological compatibility analysis for marriage.', features: ['Guna Milan', 'Dosha Analysis', 'Expert Consultation'] },
    { id: 9, title: 'Pre-Wedding Photography', slug: 'pre-wedding-photography', icon: '📸', color: 'from-red-400 to-orange-500', category: 'photography', description: 'Capture beautiful moments before your big day.', features: ['Creative Concepts', 'Professional Shoots', 'Stunning Locations'] }
  ];

  // No filtering needed, all services will be displayed
  const allServices = services;

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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-red-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div> */}
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

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
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