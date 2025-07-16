import HeroSection from "../../components/LandingPage/HeroSection";
import FeaturesSection from "../../components/LandingPage/FeatureSection";
import CTASection from "../../components/LandingPage/CTASection";
import SadiHeroSection from "../LandingPage/SliderSection";
import SamajCards from "../Samaj/SamajCard";
import ServicePages from "../Services/ServicePages";
import VivahRasme from "../Vivahrasme/VivahRasme";



const LandingPage = () => {
  return (
    <div>
      
      <SadiHeroSection />
      <HeroSection />
      <SamajCards/>
      <CTASection />
      <ServicePages/>
      <VivahRasme/>
      <FeaturesSection />
      
      
     
      {/* <IndianWeddingSlider/> */}
      
    </div>
  );
};

export default LandingPage;
