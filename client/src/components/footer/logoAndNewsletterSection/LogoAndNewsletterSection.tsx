import Logo from "@/components/footer/logoAndNewsletterSection/Logo";
import LocalExpertismStatement from "@/components/footer/logoAndNewsletterSection/LocalExpertismStatement";
import Newsletter from "@/components/footer/logoAndNewsletterSection/Newsletter";

const LogoAndNewsletterSection = () => {
  return (
    <div className="flex-1 px-[30px] md:px-0 mb-[40px] md:mb-0  md:self-center lg:self-start">
      <Logo />
      <LocalExpertismStatement />
      <Newsletter />
    </div>
  );
};
export default LogoAndNewsletterSection;
