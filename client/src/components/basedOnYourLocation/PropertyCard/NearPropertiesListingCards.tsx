import NearPropertiesListingCardsHeader from "@/components/basedOnYourLocation/PropertyCard/NearPropertiesListingCardsHeader";
import NearPropertiesCards from "@/components/basedOnYourLocation/PropertyCard/NearPropertiesCards";
import { FormattedMessage } from "react-intl";
import PulsatingButton from "@/components/ui/pulsating-button";

const NearPropertiesListingCards = () => {
  return (
    <div className="mt-[50px] md:mt-[72px] flex flex-col">
      <NearPropertiesListingCardsHeader />
      <NearPropertiesCards />
      <PulsatingButton className=" h-[48px] md:h-[56px] w-[250px] md:w-[253px] bg-light-60 lg:mt-[48px] lg:my-[100px] self-center rounded-[8px] flex items-center justify-center text-[16px] font-semibold tracking-[0.2px] text-light-0 cursor-pointer">
        <FormattedMessage id="home.basedOnYourLocationSection.nearPropertyListingCard.browse.more.properties.button.label" />
      </PulsatingButton>
    </div>
  );
};
export default NearPropertiesListingCards;
