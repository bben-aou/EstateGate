import { FormattedMessage } from "react-intl";

const  SectionBodyParagraph = () => {
  return (
    <div className="w-full lg:w-[60%] flex items-center justify-end">
    <div className=" flex lg:ml-[10%]  lg:w-[70%]">
      <p className="text-center lg:text-left my-[10px] md:my-[20px]  lg:my-0 text-light-50 font-light">
        <FormattedMessage id="home.CustomerTestimonialSection.sectionBody.paragraph.label"/>
      </p>
    </div>
  </div>
  )
};
export default SectionBodyParagraph;
