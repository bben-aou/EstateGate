import React from "react";
import NearPropertiesListingCardsSmallScreens from "@/components/basedOnYourLocation/PropertyCard/NearPropertiesListingCardsSmallScreens";
import PropertiesCards from "@/components/basedOnYourLocation/PropertyCard/PropertiesCards";
import { propertiesCards } from "@/DummyData/NearProperties";

const NearPropertiesCards = () => {

  return (
    <React.Fragment>
      <PropertiesCards propertiesCards={propertiesCards}/>
      <NearPropertiesListingCardsSmallScreens propertiesCards={propertiesCards}/>
    </React.Fragment>
  );
};

export default NearPropertiesCards;
