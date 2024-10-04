import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PropertyImageContainer from "@/components/basedOnYourLocation/PropertyCardHeader/PropertyImageContainer";

import PropertyCardInformation from "@/components/basedOnYourLocation/PropertyCard/PropertyCardInformation";
import {
  IPropertyCard,
  TNearPropertiesListingCardsSmallScreens,
} from "@/interfaces/components/basedOnYourLocationSection/nearPropertiesCards/types";
import Badge from "@/components/basedOnYourLocation/PropertyCardBody/Badge";

const NearPropertiesListingCardsSmallScreens = (
  props: TNearPropertiesListingCardsSmallScreens
) => {
  const { propertiesCards } = props;
  const propertiesCardsMapper = propertiesCards.map((card: IPropertyCard) => (
    <CarouselItem key={card.id}>
      <div className=" h-[405px] md:h-[424px] border border-t-0 border-random-90 bg-light-20 shadow-sm rounded-[8px] relative z-[100]">
        <PropertyImageContainer imageUrl={card.propertyImage} />
        <Badge label={card.badgeLabel} />
        <PropertyCardInformation
          propertyCardInfo={card.propertyCardInformation}
        />
      </div>
    </CarouselItem>
  ));
  return (
    <div className="lg:hidden pb-[50px] mt-[48px] flex flex-col items-center">
      <Carousel className="md:w-full">
        <CarouselContent className="w-[300px] md:w-[382px] p-2">
          {propertiesCardsMapper}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default NearPropertiesListingCardsSmallScreens;
