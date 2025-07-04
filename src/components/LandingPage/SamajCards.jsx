import React from 'react';
import { Users } from 'lucide-react'; // or any other icon

const samajList = [
  "Agarwal", "Brahmin", "Maratha", "Kayastha", "Rajput", "Kshatriya", "Jain", "Punjabi",
  "Sindhi", "Yadav", "Teli", "Gupta", "Vaishnav", "Patel", "Kurmi", "Khandelwal",
  "Chaudhary", "Lohar", "Koli", "Baniya", "Khatik", "Dhobi", "Lodhi", "Kushwaha",
  "SC", "ST", "OBC", "Muslim", "Christian", "Buddhist", "Nai", "Balmiki",
  "Sonar", "Sahu", "Ahir", "Chamar", "Sharma", "Mali", "Gurjar", "Momin"
];

const SamajCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">हमारे 40 प्रमुख समाज</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {samajList.map((samaj, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center hover:shadow-xl transition duration-300"
          >
            <div className="bg-gradient-to-r from-rose-400 to-purple-500 text-white p-3 rounded-full mb-3">
              <Users className="w-6 h-6" />
            </div>
            <p className="font-semibold text-gray-800 text-center">{samaj}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SamajCards;
