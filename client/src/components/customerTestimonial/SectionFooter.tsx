import SparklesText from '@/components/ui/sparkles-text'
import { useIntl } from 'react-intl'
import CustomersAvatars from '@/components/customerTestimonial/reviewsSection/customersAvatars';

const SectionFooter = () => {
    const intl = useIntl();
  return (
    <div className="w-full flex flex-col gap-[20px] items-center justify-center">
        <SparklesText
          className="text-light-20 md:mx-[10%] text-center py-[20px] md:py-0 px-[10px] md:px-0 text-[15px] md:text-[16px] font-light"
          text={intl.formatMessage({
            id: "home.CustomerTestimonialSection.sectionBody.review.paragraph.label",
          })}
        />
        <CustomersAvatars />
      </div>
  )
}
export default SectionFooter
