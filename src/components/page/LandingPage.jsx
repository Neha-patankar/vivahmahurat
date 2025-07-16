import HeroSection from "../../components/LandingPage/HeroSection";
import FeaturesSection from "../../components/LandingPage/FeatureSection";
import CTASection from "../../components/LandingPage/CTASection";
import SadiHeroSection from "../LandingPage/SliderSection";
import SamajCards from "../Samaj/SamajCard";



const LandingPage = () => {
  return (
    <div>
      
      <SadiHeroSection />
      <HeroSection />
      <SamajCards/>
      <CTASection />
      
      <FeaturesSection />
      
      
     
      {/* <IndianWeddingSlider/> */}
      
    </div>
  );
};

export default LandingPage;
