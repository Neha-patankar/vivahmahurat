import React from 'react';
import { Heart, Calendar, Users } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: "Perfect Matches",
    desc: "Advanced compatibility algorithm ensures you find your perfect life partner."
  },
  {
    icon: <Calendar className="w-8 h-8 text-white" />,
    title: "Muhurat Guidance",
    desc: "Expert astrological guidance for your wedding ceremonies."
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Verified Profiles",
    desc: "Thorough verification ensures authenticity and trust."
  }
];

const FeaturesSection = () => (
  <div className="py-20 bg-gradient-to-r from-orange-100 via-red-100 to-pink-100">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
        Why Choose Vivah Mahurat?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{ background: 'linear-gradient(to right, #f97316, #ef4444)' }}>
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{f.title}</h3>
            <p className="text-center text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturesSection;
