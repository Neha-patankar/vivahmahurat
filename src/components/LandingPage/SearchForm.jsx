import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchForm = () => {
  const [searchData, setSearchData] = useState({
    lookingFor: 'bride',
    fromAge: '',
    toAge: '',
    religion: '',
  });

  const ageOptions = Array.from({ length: 40 }, (_, i) => i + 18); // Ages 18–57

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    console.log("Search triggered with data:", searchData);
    // You can call your API here or pass the data to parent via callback
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 p-6 rounded-3xl max-w-7xl mx-auto -mt-20 relative shadow-xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {/* Looking For */}
        <div>
          <label className="text-white font-medium block mb-1">I'm looking for a</label>
          <select
            name="lookingFor"
            value={searchData.lookingFor}
            onChange={handleInputChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          >
            <option value="bride">Bride</option>
            <option value="groom">Groom</option>
          </select>
        </div>

        {/* From Age */}
        <div>
          <label className="text-white font-medium block mb-1">From Age</label>
          <select
            name="fromAge"
            value={searchData.fromAge}
            onChange={handleInputChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          >
            <option value="">Select</option>
            {ageOptions.map((age) => (
              <option key={age} value={age}>{age}</option>
            ))}
          </select>
        </div>

        {/* To Age */}
        <div>
          <label className="text-white font-medium block mb-1">To Age</label>
          <select
            name="toAge"
            value={searchData.toAge}
            onChange={handleInputChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          >
            <option value="">Select</option>
            {ageOptions.map((age) => (
              <option key={age} value={age}>{age}</option>
            ))}
          </select>
        </div>

        {/* Religion */}
        <div>
          <label className="text-white font-medium block mb-1">Religion</label>
          <select
            name="religion"
            value={searchData.religion}
            onChange={handleInputChange}
            className="w-full rounded-lg p-2 focus:outline-none"
          >
            <option value="">Any</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Jain">Jain</option>
          </select>
        </div>

        {/* Button */}
        <div className="col-span-2 sm:col-span-1 flex items-end justify-center">
          <button
            onClick={handleSearch}
            className="w-full bg-white text-gray-800 font-bold py-2 px-4 rounded-xl hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Let's Begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
