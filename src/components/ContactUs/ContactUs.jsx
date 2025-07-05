import React, { useState } from "react";
import { Phone, User, MessageCircle, Send } from "lucide-react";
import { communities } from "../../components/Samaj/communities.js";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    samaj: "",
    mobile: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form submitted:", formData);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", samaj: "", mobile: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-orange-600 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel */}
          <div className="lg:w-1/2 bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 p-8 flex flex-col justify-center items-center text-white relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <img src="/vivahlogo.png" alt="Vivah Logo" className="mb-4" />
            <h2 className="text-4xl font-bold mb-4 relative z-10">
              Contact Us
            </h2>
            <p className="text-lg text-center opacity-90 max-w-sm relative z-10">
              आपके विवाह महूर्त के लिए हमसे संपर्क करें। हम आपकी सहायता के लिए
              यहाँ हैं।
            </p>
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/2 right-5 w-12 h-12 bg-white/10 rounded-full"></div>
          </div>

          {/* Right Panel */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Get In Touch
              </h1>
              <p className="text-gray-600">हमें अपना संदेश भेजें</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  आपका संदेश सफलतापूर्वक भेजा गया है। हम जल्दी ही आपसे संपर्क
                  करेंगे।
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-pink-600 mb-1"
                  >
                    Name / नाम
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

               
                {/* Samaj Dropdown from imported objects */}
                <div>
                  <label
                    htmlFor="samaj"
                    className="block text-sm font-semibold text-pink-600 mb-1"
                  >
                    Select Samaj / समाज चुनें
                  </label>
                  <select
                    id="samaj"
                    name="samaj"
                    value={formData.samaj}
                    onChange={handleInputChange}
                    className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  >
                    <option value="">-- समाज चुनें --</option>
                    {communities.map((samaj, index) => (
                      <option key={index} value={samaj.name}>
                        {samaj.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mobile Field */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold text-pink-600 mb-1"
                  >
                    Mobile / मोबाइल
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile number"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-pink-600 mb-1"
                  >
                    Message / संदेश
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message"
                      rows="4"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold text-lg uppercase tracking-wide hover:from-pink-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
