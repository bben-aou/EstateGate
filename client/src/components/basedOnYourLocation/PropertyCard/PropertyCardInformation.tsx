import React from "react";
import PropertyCardBody from "@/components/basedOnYourLocation/PropertyCard/PropertyCardBody";
import PropertyCardFooter from "@/components/basedOnYourLocation/PropertyCard/PropertyCardFooter";
import PropertyCardDivider from "@/components/basedOnYourLocation/PropertyCard/PropertyCardDivider";
import { TPropertyCardInformation } from "@/interfaces/components/basedOnYourLocationSection/propertyCard/types";

const PropertyCardInformation = (props: TPropertyCardInformation) => {
  const { propertyCardInfo } = props;

  return (
    <React.Fragment>
      <PropertyCardBody bodyInformation={propertyCardInfo?.bodyInformation} />
      <PropertyCardDivider />
      <PropertyCardFooter
        footerInformation={propertyCardInfo.footerInformation}
      />
    </React.Fragment>
  );
};
export default PropertyCardInformation;
