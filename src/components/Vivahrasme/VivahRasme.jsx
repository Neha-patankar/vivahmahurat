import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, Heart, Flower, Music, Star, Home, Gift } from 'lucide-react';

const VivahRasme = () => {
  const [selectedRitual, setSelectedRitual] = useState(null);

  const rituals = [
    {
      id: 1,
      name: "Ganesh Pooja",
      category: "Pre-Wedding",
      icon: <Star className="w-8 h-8" />,
      color: "bg-gradient-to-br from-orange-400 to-red-500",
      description: "Lord Ganesha worship for removing obstacles",
      details: {
        purpose: "Lord Ganesha is worshipped first to remove obstacles and bless the wedding with success and prosperity.",
        ritual: "Both families perform this ritual with offerings of modak, flowers, incense, and prayers. The pooja includes chanting of Ganesh mantras and aarti.",
        items: ["Modak", "Red flowers", "Incense sticks", "Coconut", "Jaggery", "Durva grass"],
        significance: "Ensures smooth completion of all wedding ceremonies without any obstacles or negative influences."
      }
    },
    {
      id: 2,
      name: "Mata Pooja",
      category: "Pre-Wedding",
      icon: <Flower className="w-8 h-8" />,
      color: "bg-gradient-to-br from-pink-400 to-rose-500",
      description: "Divine Mother worship for blessings",
      details: {
        purpose: "Worship of the Divine Mother (Durga/Parvati) seeking her blessings for the bride and groom's marital life.",
        ritual: "Special prayers are offered with red chunari, flowers, and sweets. The goddess is invoked for protection and prosperity.",
        items: ["Red chunari", "Marigold flowers", "Kumkum", "Rice", "Sweets", "Diya"],
        significance: "Provides divine protection, ensures fertility, and blesses the couple with a harmonious married life."
      }
    },
    {
      id: 3,
      name: "Haldi Ceremony",
      category: "Pre-Wedding",
      icon: <Star className="w-8 h-8" />,
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      description: "Turmeric ritual for purification",
      details: {
        purpose: "Turmeric paste mixed with oil, milk, and rose water is applied to both bride and groom at their respective homes.",
        ritual: "Family members apply haldi while singing traditional songs. The couple cannot leave their homes after this ceremony until the wedding.",
        items: ["Turmeric powder", "Mustard oil", "Milk", "Rose water", "Besan", "Sandalwood"],
        significance: "Purifies the body and soul, enhances beauty, provides protection from evil eye, and brings good fortune."
      }
    },
    {
      id: 4,
      name: "Mehandi Ceremony",
      category: "Pre-Wedding",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      description: "Henna application with celebrations",
      details: {
        purpose: "Intricate henna designs are applied to the bride's hands and feet. The darker the mehandi, the deeper the love between the couple.",
        ritual: "Female relatives and friends participate with songs, dance, and celebrations. The groom's name is hidden in the design.",
        items: ["Henna paste", "Eucalyptus oil", "Lemon", "Sugar", "Tea", "Cloves"],
        significance: "Symbolizes love, fertility, and new beginnings. The red color represents passion and prosperity."
      }
    },
    {
      id: 5,
      name: "Tilak Ceremony",
      category: "Pre-Wedding",
      icon: <Users className="w-8 h-8" />,
      color: "bg-gradient-to-br from-red-400 to-pink-500",
      description: "Groom's welcome ceremony",
      details: {
        purpose: "The bride's family visits the groom's house to apply tilak (vermillion mark) on his forehead, welcoming him as their son-in-law.",
        ritual: "The bride's father or uncle applies tilak while chanting mantras. Gifts, sweets, and blessings are exchanged between families.",
        items: ["Kumkum", "Rice", "Sweets", "Fruits", "Clothes", "Jewelry"],
        significance: "Formally accepts the groom into the bride's family and strengthens the bond between both families."
      }
    },
    {
      id: 6,
      name: "Mahila Sangeet",
      category: "Pre-Wedding",
      icon: <Music className="w-8 h-8" />,
      color: "bg-gradient-to-br from-purple-400 to-indigo-500",
      description: "Musical celebration for women",
      details: {
        purpose: "A musical evening where women from both families gather to sing traditional folk songs, dance, and celebrate.",
        ritual: "Traditional songs about marriage are sung. Modern celebrations include choreographed performances, DJ music, and competitions.",
        items: ["Dhol", "Manjira", "Harmonium", "Decorations", "Costumes", "Prizes"],
        significance: "Strengthens bonds between families, celebrates femininity, and creates joyful memories before the wedding."
      }
    },
    {
      id: 7,
      name: "Barat",
      category: "Main Wedding",
      icon: <Users className="w-8 h-8" />,
      color: "bg-gradient-to-br from-blue-400 to-cyan-500",
      description: "Groom's wedding procession",
      details: {
        purpose: "The groom's wedding procession arrives at the wedding venue, traditionally on a decorated horse or in a car.",
        ritual: "The groom is accompanied by family, friends, and musicians with dhol, band, and fireworks. The bride's family welcomes them.",
        items: ["Decorated horse/car", "Band", "Dhol", "Fireworks", "Garlands", "Sweets"],
        significance: "Marks the groom's arrival as a prince coming to claim his bride, celebrated with grandeur and joy."
      }
    },
    {
      id: 8,
      name: "Mandap",
      category: "Main Wedding",
      icon: <Home className="w-8 h-8" />,
      color: "bg-gradient-to-br from-amber-400 to-yellow-500",
      description: "Sacred wedding pavilion",
      details: {
        purpose: "The sacred wedding pavilion decorated with flowers, cloth, and holy symbols where the main ceremonies take place.",
        ritual: "Four pillars represent the four parents supporting the couple. The sacred fire (havan kund) is placed in the center.",
        items: ["Bamboo poles", "Cloth", "Flowers", "Kalash", "Havan kund", "Decorations"],
        significance: "Creates a sacred space for the wedding rituals, representing the couple's future home and divine presence."
      }
    },
    {
      id: 9,
      name: "Jaimal (Varmala)",
      category: "Main Wedding",
      icon: <Flower className="w-8 h-8" />,
      color: "bg-gradient-to-br from-rose-400 to-pink-500",
      description: "Exchange of flower garlands",
      details: {
        purpose: "The bride and groom exchange flower garlands, symbolizing their acceptance of each other as life partners.",
        ritual: "This is often a playful moment with family members lifting the bride and groom. Three attempts are made before success.",
        items: ["Fresh flower garlands", "Rose petals", "Marigold", "Jasmine", "Mogra", "Decorative strings"],
        significance: "Symbolizes mutual acceptance, respect, and the beginning of their journey together as husband and wife."
      }
    },
    {
      id: 10,
      name: "Kanyadan",
      category: "Main Wedding",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-gradient-to-br from-red-500 to-rose-600",
      description: "Giving away the bride",
      details: {
        purpose: "The most emotional ritual where the bride's father places her hand in the groom's hand, formally giving away his daughter.",
        ritual: "The father washes the groom's feet, applies tilak, and offers gifts. He then places the bride's hand in the groom's hand.",
        items: ["Water", "Towel", "Tilak", "Gold ornaments", "Clothes", "Coconut"],
        significance: "Represents the father's trust in the groom and his blessing for the couple's future happiness and prosperity."
      }
    },
    {
      id: 11,
      name: "Phere (Saat Phere)",
      category: "Main Wedding",
      icon: <Star className="w-8 h-8" />,
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      description: "Seven sacred rounds around fire",
      details: {
        purpose: "The couple takes seven sacred rounds around the holy fire, each with specific vows for different aspects of life.",
        ritual: "Each phere has specific mantras and promises. The couple is bound by sacred thread (gathbandhan) during this ritual.",
        items: ["Sacred fire", "Ghee", "Samagri", "Rice", "Flowers", "Sacred thread"],
        significance: "The most important ritual that legally and spiritually binds the couple. Each round represents a lifetime vow."
      }
    },
    {
      id: 12,
      name: "Sneh Bhoj",
      category: "Main Wedding",
      icon: <Users className="w-8 h-8" />,
      color: "bg-gradient-to-br from-green-500 to-teal-600",
      description: "Family bonding ceremony",
      details: {
        purpose: "A ritual where both families meet and exchange gifts, sweets, and blessings, strengthening bonds between families.",
        ritual: "Family members are formally introduced, gifts are exchanged, and blessings are given for the couple's future.",
        items: ["Gifts", "Sweets", "Fruits", "Flowers", "Clothes", "Jewelry"],
        significance: "Creates new relationships between families and ensures ongoing support and love for the couple."
      }
    },
    {
      id: 13,
      name: "Bidai",
      category: "Post-Wedding",
      icon: <Home className="w-8 h-8" />,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      description: "Bride's departure ceremony",
      details: {
        purpose: "The emotional departure ceremony where the bride leaves her parental home to start her new life.",
        ritual: "She throws rice over her shoulder, symbolizing prosperity for her parents' house. Family members bless her with prayers and gifts.",
        items: ["Rice", "Coins", "Kalash", "Flowers", "Gifts", "Tears of joy"],
        significance: "Marks the bride's transition from daughter to wife, carrying her family's blessings to her new home."
      }
    }
  ];

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