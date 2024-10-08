import BlurFade from "@/components/ui/blur-fade";
import PropertyCard from "@/components/basedOnYourLocation/PropertyCard/PropertyCard";
import { IPropertyCard, TPropertiesCards } from "@/interfaces/components/basedOnYourLocationSection/nearPropertiesCards/types";

const PropertiesCards = (props: TPropertiesCards) => {
  const { propertiesCards } = props;
  const propertiesCardsList = propertiesCards.map((card: IPropertyCard, index) => (
    <BlurFade key={card.id} delay={0.5 + index * 0.05} inView>
      <PropertyCard propertyCard={card}  key={card.id}/>

    </BlurFade>
  ));
  return (
    <div className="hidden self-center mt-[48px] h-[880px] lg:grid lg:grid-cols-2 overflow-scroll  hide-scrollbar xl:overflow-visible  xl:grid-cols-3 gap-10 mx-[25px]">
      {propertiesCardsList}
    </div>
  );
};
export default PropertiesCards;
