import SupportBanner from "@/components/supportDescription/SupportBanner";
import DescriptionSwitcherBanner from "@/components/supportDescription/DescriptionSwitcherBanner";

const SupportDescriptionSection = () => {
  return (
    <section className="md:mx-[10%] lg:h-[74vh]mb-[30px] lg:flex">
      <SupportBanner />
      <DescriptionSwitcherBanner />
    </section>
  );
};
export default SupportDescriptionSection;
