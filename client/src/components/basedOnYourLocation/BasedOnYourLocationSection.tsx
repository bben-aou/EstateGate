import NearPropertiesListingCards from "@/components/basedOnYourLocation/PropertyCard/NearPropertiesListingCards";
import BasedOnYourLocationHeader from "@/components/basedOnYourLocation/PropertyCardHeader/BasedOnYourLocationHeader";

const BasedOnYourLocationSection = () => {
  return (
    <section className="md:mx-[10%] h-fit mb-[30px] flex flex-col">
       <BasedOnYourLocationHeader/>
        <NearPropertiesListingCards/>
    </section>
  )
}
export default BasedOnYourLocationSection;