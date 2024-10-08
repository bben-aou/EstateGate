import { BorderBeam } from "@/components/ui/border-beam";
import { FormattedMessage } from "react-intl";

const BrowsePropertyCard = () => {
  return (
    <div className="lg:h-full w-full lg:w-[40%]  flex items-center justify-center">
      <div className="h-[500px] w-full mx-[10px] md:mx-0 md:w-[70%] border-[1px] relative rounded-[6px] bg-banner-10 p-[40px] ">
        <BorderBeam size={250} duration={12} delay={9} />
        <h1 className="text-[30px] font-bold text-light-60 leading-10 mb-[16px]">
          <FormattedMessage id="home.advantages.section.browsePropertyCard.title" />
        </h1>
        <p className="text-[16px] text-random-80">
          <FormattedMessage id="home.advantages.section.browsePropertyCard.subTitle" />
        </p>
        <button className="my-[24px] w-[159px] h-[40px] text-[14px] tracking-[0.2px] font-semibold bg-light-60 text-light-0 rounded-[3px]">
          <FormattedMessage id="home.advantages.section.browsePropertyCard.button.label" />
        </button>
        <img src="/3d-house.svg" alt="villa" />
      </div>
    </div>
  );
};
export default BrowsePropertyCard;
