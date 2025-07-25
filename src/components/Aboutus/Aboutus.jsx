// import React from "react";
// import { Typewriter } from "react-simple-typewriter";

// const AboutUs = () => {
//   return (
//     <section className="w-full py-16 bg-rose-500">
//       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
//         {/* Image Section */}
//         <div className="relative">
//           <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl opacity-30"></div>
//           <div className="rounded-full overflow-hidden shadow-xl border-8 border-white relative z-10 w-[320px] h-[320px] mx-auto">
//             <img
//               src="/vivahlogo.png"
//               alt="About Matrimony"
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <div className="rounded-xl overflow-hidden shadow-xl border-8 border-white relative z-10 w-[320px] h-[320px] mx-auto">
//             <iframe
//               className="w-full h-full"
//               src="/about/WhatsApp Video 2025-07-23 at 1.39.29 PM.mp4"
//               title="Vivah Mahurat Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div>
//           <h3 className="text-sm font-semibold text-white uppercase mb-2 tracking-wider">
//             About Us
//           </h3>
//           <h2 className="text-3xl md:text-4xl font-bold text-purple-950 mb-4">
//             <Typewriter
//               words={["Welcome to the Vivah Mahurat"]}
//               loop={0}
//               cursor
//               cursorStyle="_"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1500}
//             />
//           </h2>
//           <p className="text-white mb-6 leading-relaxed">
//             <strong className="text-white">Ready Matrimonial</strong> is one of
//             the professional and highly experienced Matrimonial Website
//             Development Companies in India. As one of the leading matrimonial
//             software development organizations in India, we have maintained a
//             strong team of:
//           </p>

//           <ul className="space-y-2 text-white font-medium text-[16px] list-disc list-inside">
//             <li>Profile with fully updated details</li>
//             <li>Multiple & easy way to contact</li>
//             <li>Automatic Matching System</li>
//             <li>Easy & flexible navigations</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;


import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutUs = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-rose-500 to-pink-400 ">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mt-16">
        {/* Media Section */}
        <div className=" flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className=" w-[300px] h-[100px] sm:w-[500px] sm:h-[300px] ">
            <div className=""></div>
            <img
              src="/about/aboutimage.png"
              alt="Vivah Logo"
              className="sm:w-full sm:h-full  w-[100] h-[100] object-cover border rounded-2xl border-white border-4"
            />
          </div>

          {/* Video Box */}
          {/* <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <video
              src="/about/WhatsApp Video 2025-07-23 at 1.39.29 PM.mp4"
              className="w-full h-full object-cover"
              controls
            />
          </div> */}
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase mb-2 tracking-widest">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            <Typewriter
              words={["Welcome to Vivah Mahurat"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h2>
          <p className="text-white text-[17px] mb-6 leading-relaxed">
            <strong>Ready Matrimonial</strong> is one of the most professional and experienced Matrimonial Website Development Companies in India. With a passionate and skilled team, we specialize in:
          </p>

          <ul className="list-disc list-inside space-y-2 text-white font-medium text-[16px]">
            <li>Fully detailed and verified profiles</li>
            <li>Multiple and easy contact options</li>
            <li>Smart Automatic Matchmaking System</li>
            <li>User-friendly and modern navigation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
