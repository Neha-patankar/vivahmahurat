// import React from 'react';
// import { Heart, Star, Users, Calendar } from 'lucide-react';
// import SearchForm from './SearchForm';

// const HeroSection = () => {
//   return (
//     <div className="relative flex items-center justify-center overflow-hidden  bg-white">
//       {/* Background Bubbles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse" />
//         <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20 animate-bounce" />
//         <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse" />
//         <div className="absolute bottom-20 right-32 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-20 animate-bounce" />
//       </div>

//       {/* Pattern Background */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' ...")`,
//             backgroundSize: '60px 60px',
//           }}
//         ></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
//         {/* Logo */}
//         <div className="mb-8">
//           <div className='flex gap-6'>
       
//            <img
//               src="/HeroSection/brides.png"
//               alt="Vivah Logo"
//               className="w-36 md:w-52 lg:w-60 object-contain mx-auto"
//             />
//           <div className="flex justify-center my-6">
//             <img
//               src="/vivahlogo.png"
//               alt="Vivah Logo"
//               className="w-36 md:w-52 lg:w-60 object-contain mx-auto"
//             />
//           </div>
//           <img
//               src="/HeroSection/groom.png"
//               alt="Vivah Logo"
//               className="w-36 md:w-52 lg:w-60 object-contain mx-auto"
//             />
//             </div>
//           <p className="text-xl md:text-2xl text-gray-700 my-6 max-w-4xl mx-auto">
//             आपका सपनों का विवाह... हमारी विशेषज्ञता
//           </p>
//         </div>

//         {/* Search Form */}
//         <div className="my-10 ">
//           <SearchForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from 'react';
import SearchForm from './SearchForm';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-white py-10 px-4">
      {/* Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20 animate-bounce" />
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-20 animate-bounce" />
      </div>

      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' ...")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Image Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-8">
          {/* Bride Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pink-500 shadow-md">
            <img
              src="/HeroSection/brides.png"
              alt="Bride"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo */}
          <div className="w-32 md:w-48 mx-auto">
            <img
              src="/vivahlogo.png"
              alt="Vivah Logo"
              className="w-full object-contain"
            />
          </div>

          {/* Groom Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
            <img
              src="/HeroSection/groom.png"
              alt="Groom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-gray-700 my-4 max-w-3xl mx-auto">
          आपका सपनों का विवाह... हमारी विशेषज्ञता
        </p>

        {/* Search Form */}
        <div className="mt-8">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
