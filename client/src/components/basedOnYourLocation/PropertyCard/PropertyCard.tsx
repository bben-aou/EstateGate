import PropertyImageContainer from "@/components/basedOnYourLocation/PropertyCardHeader/PropertyImageContainer";
import Badge from "@/components/basedOnYourLocation/PropertyCardBody/Badge";
import PropertyCardInformation from "@/components/basedOnYourLocation/PropertyCard/PropertyCardInformation";
import { TPropertyCard } from "@/interfaces/components/basedOnYourLocationSection/nearPropertiesCards/types";
import ConditionalRendering from "@/components/common/ConditionalRendering";


const PropertyCard = (props: TPropertyCard) => {
  const { propertyCard } = props;

  return (
    <div className="lg:w-[380px] xl:w-full 2xl:w-[360px]  h-[424px] border border-t-0 border-random-90 bg-light-20 shadow-lg rounded-[8px] relative z-[100]">
      <PropertyImageContainer imageUrl={propertyCard.propertyImage} />
      <ConditionalRendering condition={propertyCard.containsBadge}>
        <Badge label={propertyCard.badgeLabel} />
      </ConditionalRendering>
      <PropertyCardInformation
        propertyCardInfo={propertyCard.propertyCardInformation}
      />
    </div>
  );
};
export default PropertyCard;
