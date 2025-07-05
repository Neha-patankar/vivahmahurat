import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutUs = () => {
  return (
    <section className="w-full py-16 bg-rose-500">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl opacity-30"></div>
          <div className="rounded-full overflow-hidden shadow-xl border-8 border-white relative z-10 w-[320px] h-[320px] mx-auto">
            <img
              src="/vivahlogo.png"
              alt="About Matrimony"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase mb-2 tracking-wider">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-950 mb-4">
            <Typewriter
              words={["Welcome to the Vivah Mahurat"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-white mb-6 leading-relaxed">
            <strong className="text-white">Ready Matrimonial</strong> is one of the professional and highly experienced Matrimonial Website Development Companies in India. As one of the leading matrimonial software development organizations in India, we have maintained a strong team of:
          </p>

          <ul className="space-y-2 text-white font-medium text-[16px] list-disc list-inside">
            <li>Profile with fully updated details</li>
            <li>Multiple & easy way to contact</li>
            <li>Automatic Matching System</li>
            <li>Easy & flexible navigations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
