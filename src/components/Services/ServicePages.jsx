import React from "react";
import {
  Heart,
  Users,
  Briefcase,
  HandHeart,
  FileText,
  Crown,
  Calendar,
  Star,
  UserCheck,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Match Making",
    slug: "match-making",
    icon: Heart,
    color: "rose",
    bgGradient: "from-rose-400 to-pink-500",
  },
  {
    id: 2,
    title: "Parichay Sammelan Management",
    slug: "parichay-sammelan",
    icon: Users,
    color: "purple",
    bgGradient: "from-purple-400 to-indigo-500",
  },
  {
    id: 3,
    title: "White Collar Matrimony Site/App",
    slug: "white-collar-matrimony",
    icon: Briefcase,
    color: "blue",
    bgGradient: "from-blue-400 to-cyan-500",
  },
  {
    id: 4,
    title: "Assistance Match Making",
    slug: "assistance-match-making",
    icon: HandHeart,
    color: "emerald",
    bgGradient: "from-emerald-400 to-teal-500",
  },
  {
    id: 5,
    title: "Marriage Biodata Maker",
    slug: "biodata-maker",
    icon: FileText,
    color: "indigo",
    bgGradient: "from-indigo-400 to-purple-500",
  },
  {
    id: 6,
    title: "Premium & VIP Rishte",
    slug: "premium-vip-rishte",
    icon: Crown,
    color: "amber",
    bgGradient: "from-amber-400 to-orange-500",
  },
  {
    id: 7,
    title: "Vivah Management",
    slug: "vivah-management",
    icon: Calendar,
    color: "pink",
    bgGradient: "from-pink-400 to-rose-500",
  },
  {
    id: 8,
    title: "Kundali Milan",
    slug: "kundali-milan",
    icon: Star,
    color: "orange",
    bgGradient: "from-orange-400 to-red-500",
  },
  {
    id: 9,
    title: "Vivah Meetup",
    slug: "Vivah Meetup",
    icon: UserCheck,
    color: "teal",
    bgGradient: "from-teal-400 to-cyan-500",
  },
  
];

const ServicePages = () => {
  const navigate = useNavigate();

  const goToService = (slug) => {
    navigate(`/service/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-orange-300 via-white to-orange-300">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            {/* <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mr-4 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div> */}
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            {/* <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center ml-4 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div> */}
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive matrimonial services designed to help you
            find your perfect life partner with trust, tradition, and modern
            efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                onClick={() => goToService(service.slug)}
              >
                {/* Background gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-20"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.bgGradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-xl font-bold text-gray-800 mb-4 group-hover:text-${service.color}-600 transition-colors duration-300`}
                  >
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Click to know more about {service.title}.
                  </p>

                  {/* Action indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 group-hover:text-gray-700 transition-colors">
                      <button className="bg-blue-800  text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors inline-flex items-center justify-center shadow-lg">
                       
                        Know more
                      </button>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
                    >
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${service.color}-200 transition-colors duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        {/* <div className="mt-16 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl mb-8 text-rose-100">
              Let our experienced team guide you through your matrimonial
              journey with care and expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors inline-flex items-center justify-center shadow-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-colors inline-flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                Get Quote
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServicePages;
