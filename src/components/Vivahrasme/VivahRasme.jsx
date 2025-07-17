import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, Heart, Flower, Music, Star, Home, Gift } from 'lucide-react';
import { rituals } from "./ritualsData.js";

const VivahRasme = () => {
  const [selectedRitual, setSelectedRitual] = useState(null);

 

  const categories = {
    "Pre-Wedding": rituals.filter(r => r.category === "Pre-Wedding"),
    "Main Wedding": rituals.filter(r => r.category === "Main Wedding"),
    "Post-Wedding": rituals.filter(r => r.category === "Post-Wedding")
  };

  if (selectedRitual) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedRitual(null)}
            className="flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Rituals
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className={`${selectedRitual.color} p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                {selectedRitual.icon}
                <div>
                  <h1 className="text-3xl font-bold">{selectedRitual.name}</h1>
                  <p className="text-white/90">{selectedRitual.category}</p>
                </div>
              </div>
              <p className="text-xl text-white/90">{selectedRitual.description}</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Purpose & Significance</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{selectedRitual.details.purpose}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedRitual.details.significance}</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ritual Process</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{selectedRitual.details.ritual}</p>
                  
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Required Items</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRitual.details.items.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {selectedRitual.name === "Phere (Saat Phere)" && (
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Seven Sacred Vows</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "1st Phere: Food and nourishment",
                      "2nd Phere: Strength and courage",
                      "3rd Phere: Prosperity and wealth",
                      "4th Phere: Happiness and harmony",
                      "5th Phere: Progeny and family",
                      "6th Phere: Health and longevity",
                      "7th Phere: Friendship and understanding"
                    ].map((vow, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{vow.split(': ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
           Vivah Rasme
          </h1>
           <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 text-center">
        <h1 className="text-3xl font-bold text-white">विवाह रस्में</h1>
      </div>
         
        </div>

        {Object.entries(categories).map(([categoryName, categoryRituals]) => (
          <div key={categoryName} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {categoryName} Rituals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryRituals.map((ritual) => (
                <div
                  key={ritual.id}
                  onClick={() => setSelectedRitual(ritual)}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                    <div className={`${ritual.color} p-6 text-white`}>
                      <div className="flex items-center gap-3 mb-3">
                        {ritual.icon}
                        <h3 className="text-xl font-bold">{ritual.name}</h3>
                      </div>
                      <p className="text-white/90 text-sm">{ritual.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{ritual.category}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Click to learn more</span>
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                          <span className="text-gray-600 group-hover:text-orange-600">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
       
      </div>
    </div>
  );
};

export default VivahRasme;