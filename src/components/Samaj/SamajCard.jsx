import React, { useState, useEffect } from 'react';
import { Search, Users, ChevronDown, Check, Heart, Star, Crown } from 'lucide-react';
import { communities } from "./communities.js";

const SamajCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.english.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.community-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelect = (community) => {
    setSelectedCommunity(community.name);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 via-red-100 to-purple-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-red-600 rounded-full mb-6 shadow-2xl">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            अपना समुदाय चुनें
          </h1>
          <p className="text-gray-600 text-lg">Choose Your Community</p>
        </div>

        {/* Selected Community Display */}
        {selectedCommunity && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg border border-purple-100 animate-bounce">
              <Check className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-purple-700">Selected: {selectedCommunity}</span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            </div>
          </div>
        )}

        {/* Search and Selector */}
        <div className="community-selector relative mb-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-purple-100">
            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search communities... समुदाय खोजें..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsOpen(true)}
                className="w-full pl-12 pr-4 py-4 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg transition-all"
              />
            </div>

            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all"
            >
              <span className="text-purple-700 font-medium">
                {selectedCommunity || 'Select Community / समुदाय चुनें'}
              </span>
              <ChevronDown className={`w-5 h-5 text-purple-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-purple-100 z-50 max-h-96 overflow-y-auto">
                <div className="p-4 space-y-2">
                  {filteredCommunities.map((community, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect(community)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(-1)}
                      className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        hoveredIndex === index
                          ? 'bg-gradient-to-r from-purple-100 to-pink-100 scale-105 shadow-lg'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-2xl animate-pulse">{community.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-purple-800">{community.name}</div>
                        <div className="text-sm text-gray-600">{community.english}</div>
                      </div>
                      {selectedCommunity === community.name && (
                        <Check className="w-5 h-5 text-green-500 animate-bounce" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Community Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredCommunities.map((community, index) => (
            <div
              key={index}
              onClick={() => handleSelect(community)}
              className={`bg-white rounded-2xl p-6 shadow-xl border-2 border-transparent cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 transform ${
                selectedCommunity === community.name 
                  ? 'ring-4 ring-purple-400 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300' 
                  : 'hover:border-purple-200 bg-red-800'
              }`}
              style={{
                background: selectedCommunity === community.name 
                  ? 'linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 100%)'
                  : 'white'
              }}
            >
              <div className="text-center relative">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gradient-to-r ${community.gradient} shadow-lg`}>
                  <div className="text-2xl animate-pulse">{community.icon}</div>
                </div>
                
                {/* Community name with gradient text */}
                <h3 className={`font-bold text-lg mb-2 bg-gradient-to-r ${community.gradient} bg-clip-text text-transparent`}>
                  {community.name}
                </h3>
                
                {/* English name */}
                <p className="text-gray-600 text-sm mb-3">{community.english}</p>
                
                {/* Decorative gradient line */}
                <div className={`w-12 h-1 bg-gradient-to-r ${community.gradient} rounded-full mx-auto mb-3`}></div>
                
                {/* Selection indicator */}
                {selectedCommunity === community.name && (
                  <div className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full border border-green-200">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Selected</span>
                  </div>
                )}
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${community.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-2xl border border-purple-100">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{communities.length}</div>
              <div className="text-sm text-gray-600">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">5000+</div>
              <div className="text-sm text-gray-600">Happy Matches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">★ 4.9</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamajCard;