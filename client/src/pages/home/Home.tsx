import HeroSection from "@components/hereSection/HeroSection";
import AdvantagesSection from "@/components/advantages/AdvantagesSection";
import SupportDescriptionSection from "@/components/supportDescription/SupportDescriptionSection";
import BasedOnYourLocationSection from "@/components/basedOnYourLocation/BasedOnYourLocationSection";
const Home = () => {
  return (
    <div className="bg-light-20">
      <HeroSection />
      <AdvantagesSection />
      <SupportDescriptionSection/>
      <BasedOnYourLocationSection/>
    </div>
  );
};
export default Home;
