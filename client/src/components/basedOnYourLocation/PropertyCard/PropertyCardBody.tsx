import PropertyPrice from "@/components/basedOnYourLocation/PropertyCardBody/PropertyPrice";
import PropertyDescription from "@/components/basedOnYourLocation/PropertyCardBody/PropertyDescription";
import AddPropertyToFavorite from "@/components/basedOnYourLocation/PropertyCardBody/AddPropertyToFavorite";
import PropertyLocation from "@/components/basedOnYourLocation/PropertyCardBody/PropertyLocation";
import { TPropertyCardBody } from "@/interfaces/components/basedOnYourLocationSection/propertyCard/types";


const PropertyCardBody = (props: TPropertyCardBody) => {
  const { bodyInformation } = props;
  return (
    <div className="h-[108px] mx-[24px]  mt-[32px] md:mb-[16px] relative">
      <PropertyPrice
        amount={bodyInformation.propertyPrice}
        isRent={bodyInformation.isRent}
      />
      <PropertyDescription description={bodyInformation.propertyDescription} />
      <AddPropertyToFavorite />
      <PropertyLocation location={bodyInformation.propertyLocation} />
    </div>
  );
};
export default PropertyCardBody;
