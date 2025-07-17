import HeroSection from "../../components/LandingPage/HeroSection";
import FeaturesSection from "../../components/LandingPage/FeatureSection";
import CTASection from "../../components/LandingPage/CTASection";
import SadiHeroSection from "../LandingPage/SliderSection";
import SamajCards from "../Samaj/SamajCard";
import ServicePages from "../Services/ServicePages";

import RitualList from "../Vivahrasme/RitualList";



const LandingPage = () => {
  return (
    <div>
      
      <SadiHeroSection />
      <HeroSection />
      <CTASection />
      <SamajCards/>
    
      <ServicePages/>
      <RitualList/>
      <FeaturesSection />
      
      
     
      {/* <IndianWeddingSlider/> */}
      
    </div>
  );
};

export default LandingPage;
