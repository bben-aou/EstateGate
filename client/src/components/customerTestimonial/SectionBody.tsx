import SectionBodyTitle from "@components/customerTestimonial/SectionBodyTitle";
import SectionBodyParagraph from "@/components/customerTestimonial/SectionBodyParagraph";
import ReviewsSection from "@/components/customerTestimonial/reviewsSection/ReviewsSection";

const SectionBody = () => {
  return (
    <div className="my-[10px] lg:my-[40px]">
      <div className="flex flex-col lg:flex-row">
        <SectionBodyTitle />
        <SectionBodyParagraph/>
      </div>
      <ReviewsSection/>
    </div>
  );
};
export default SectionBody;
