// // RitualList.jsx or VivahRasme.jsx
// import React from "react";
// import { rituals } from "./ritualsData";
// import { useNavigate } from "react-router-dom";

// export default function RitualList() {
//   const navigate = useNavigate();

//   return (
//     <div>
//        <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 text-center">
//         <h1 className="text-3xl font-bold text-white">विवाह रस्में</h1>
//       </div>

//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
//       {rituals.map((ritual) => {
//         const Icon = ritual.icon; // ✅ Fix: Get component, not object

//         return (
//           <div
//             key={ritual.id}
//             className={`rounded-xl shadow-md p-5 cursor-pointer hover:scale-105 transition-transform duration-200 ${ritual.color}`}
//             onClick={() => navigate(ritual.link)}
//           >
//             <div className="flex items-center gap-4">
//               <div className="p-2 rounded-full bg-white">
//                 <Icon className="w-8 h-8 text-black" /> {/* ✅ Render as component */}
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold text-white">{ritual.name}</h2>
//                 <p className="text-sm text-white">{ritual.category}</p>
//               </div>
//             </div>
//             <p className="mt-3 text-white text-sm">{ritual.description}</p>
//           </div>
//         );
//       })}
//     </div>
//      </div>
//   );
// }

// RitualList.jsx or VivahRasme.jsx
import React from "react";
import { rituals } from "./ritualsData";
import { useNavigate } from "react-router-dom";

export default function RitualList() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Page Heading */}
      <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 py-6 text-center">
        <h1 className="text-3xl font-bold text-white">विवाह रस्में</h1>
      </div>

      {/* Ritual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {rituals.map((ritual) => {
          const Icon = ritual.icon;

          return (
            <div
              key={ritual.id}
              className="relative rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group"
              onClick={() => navigate(ritual.link)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={
                    ritual.image ||
                    "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  }
                  alt={ritual.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Gradient Color Overlay (Your Custom Color Preserved) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${ritual.color} opacity-85 group-hover:opacity-90 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h2 className="text-xl font-semibold text-white drop-shadow-lg">
                    {ritual.name}
                  </h2>
                </div>

                <p className="mt-4 text-white text-sm leading-relaxed drop-shadow-md">
                  {ritual.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
