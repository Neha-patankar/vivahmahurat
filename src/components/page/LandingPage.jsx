import HeroSection from "../../components/LandingPage/HeroSection";
import FeaturesSection from "../../components/LandingPage/FeatureSection";
import CTASection from "../../components/LandingPage/CTASection";
import SadiHeroSection from "../LandingPage/SliderSection";
import IndianWeddingSlider from "../LandingPage/ImageSlider2";
import SamajCards from "../LandingPage/SamajCards";

const LandingPage = () => {
  return (
    <div>
      <SadiHeroSection />
      <HeroSection />
      <CTASection />
      <FeaturesSection />
      <SamajCards/>
      {/* <IndianWeddingSlider/> */}
      
    </div>
  );
};

export default LandingPage;
