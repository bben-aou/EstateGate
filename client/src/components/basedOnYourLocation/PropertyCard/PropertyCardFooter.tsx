import { IoBed } from "react-icons/io5";
import { PiToiletFill } from "react-icons/pi";
import { TbDimensions } from "react-icons/tb";
import CardInfoItem from "@/components/basedOnYourLocation/propertyCardFooter/CardInfoItem";
import { TPropertyCardFooter } from "@/interfaces/components/basedOnYourLocationSection/propertyCard/types";

const PropertyCardFooter = (props: TPropertyCardFooter) => {
  const { footerInformation } = props;
  return (
    <div className="mx-[10px] md:mx-[24px] mt-[16px] flex items-center justify-between">
      <CardInfoItem
        Icon={IoBed}
        value={footerInformation.bedsValue}
        iconClassName="mt-[1px]"
        label="home.basedOnYourLocationSection.nearPropertyCards.propertyCardsFooter.CardInfoItem.beds.label"
      />
      <CardInfoItem
        Icon={PiToiletFill}
        value={footerInformation.toiletsValue}
        label="home.basedOnYourLocationSection.nearPropertyCards.propertyCardsFooter.CardInfoItem.Bathrooms.label"
      />
      <CardInfoItem
        Icon={TbDimensions}
        label={footerInformation.dimensionsValue}
        iconClassName="w-[20px] h-[20px]"
      />
    </div>
  );
};
export default PropertyCardFooter;
