import SectionTitle from "@/components/customerTestimonial/SectionTitle";
import SectionBody from "@components/customerTestimonial/SectionBody";
import { useIntl } from "react-intl";
import SectionFooter from "@/components/customerTestimonial/SectionFooter";

const CustomerTestimonial = () => {
  const intl = useIntl();
  return (
    <div className="bg-gradient-to-r from-gradient-10 to-gradient-30 md:px-[10%] md:pt-[10px] md:pb-[50px]">
      <SectionTitle
        titleLabel={intl.formatMessage({
          id: "home.CustomerTestimonialSection.title.label",
        })}
      />
      <SectionBody />
      <SectionFooter/>
    </div>
  );
};
export default CustomerTestimonial;
