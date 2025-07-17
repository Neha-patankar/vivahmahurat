// RitualList.jsx or VivahRasme.jsx
import React from "react";
import { rituals } from "./ritualsData";
import { useNavigate } from "react-router-dom";

export default function RitualList() {
  const navigate = useNavigate();

  return (
    <div>
       <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 text-center">
        <h1 className="text-3xl font-bold text-white">विवाह रस्में</h1>
      </div>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {rituals.map((ritual) => {
        const Icon = ritual.icon; // ✅ Fix: Get component, not object

        return (
          <div
            key={ritual.id}
            className={`rounded-xl shadow-md p-5 cursor-pointer hover:scale-105 transition-transform duration-200 ${ritual.color}`}
            onClick={() => navigate(ritual.link)}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-white">
                <Icon className="w-8 h-8 text-black" /> {/* ✅ Render as component */}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{ritual.name}</h2>
                <p className="text-sm text-white">{ritual.category}</p>
              </div>
            </div>
            <p className="mt-3 text-white text-sm">{ritual.description}</p>
          </div>
        );
      })}
    </div>
     </div>
  );
}
