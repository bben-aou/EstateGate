
import LogoAndNewsletterSection from "@/components/footer/logoAndNewsletterSection/LogoAndNewsletterSection";
import ServicesAndCommunity from "@/components/footer/servicesAndCommunity/ServicesAndCommunity";
import FollowUsOnSocialMedia from "@/components/footer/followUsOnSocialMedia/FollowUsOnSocialMedia";

const Footer = () => {
  return (
    <footer className="lg:h-[393px] flex flex-col lg:flex-row py-[30px] lg:py-[75px] lg:px-[124px]">
      <LogoAndNewsletterSection/>
      <ServicesAndCommunity/>
      <FollowUsOnSocialMedia/>
    </footer>
  );
};
export default Footer;
