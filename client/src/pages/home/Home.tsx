import HeroSection from "@components/hereSection/HeroSection";
import AdvantagesSection from "@/components/advantages/AdvantagesSection";
import SupportDescriptionSection from "@/components/supportDescription/SupportDescriptionSection";
import BasedOnYourLocationSection from "@/components/basedOnYourLocation/BasedOnYourLocationSection";
import CustomerTestimonial from "@/components/customerTestimonial/CustomerTestimonial";
import Footer from "@/components/footer/Footer";
const Home = () => {
  return (
    <div className="bg-light-20">
      <HeroSection />
      <AdvantagesSection />
      <SupportDescriptionSection/>
      <BasedOnYourLocationSection/>
      <CustomerTestimonial/>
      <Footer/>
    </div>
  );
};
export default Home;
