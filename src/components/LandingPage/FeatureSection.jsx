import React from "react";
import { Heart, Calendar, Users } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "परफेक्ट मैचेस",
    desc: "हमारा आधुनिक एल्गोरिदम आपके लिए सबसे उपयुक्त जीवनसाथी ढूंढता है।",
  },
  {
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: "मुहूर्त मार्गदर्शन",
    desc: "आपके विवाह समारोहों के लिए विशेषज्ञ ज्योतिषीय मार्गदर्शन।",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "वेरिफाइड प्रोफाइल्स",
    desc: "प्रोफाइल की सत्यता सुनिश्चित करने के लिए पूरी तरह से जांचा गया।",
  },
];

const FeaturesSection = () => (
  <div className="py-16 bg-gradient-to-r from-orange-100 via-red-100 to-pink-100">
    <div className="max-w-7xl mx-auto px-4">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 
  bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 
  bg-clip-text text-transparent "
      >
        क्यों चुनें विवाह मुहूर्त?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-white/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1.5"
          >
            <div
              className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4"
              style={{
                background: "linear-gradient(to right, #f97316, #ef4444)",
              }}
            >
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {f.title}
            </h3>
            <p className="text-center text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturesSection;
