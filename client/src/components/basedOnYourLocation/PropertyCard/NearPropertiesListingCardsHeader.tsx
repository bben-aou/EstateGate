import SearchBar from "@/components/basedOnYourLocation/filterAndSearchBar/SearchBar";
import PropertySwitcherTabs from "@/components/basedOnYourLocation/filterAndSearchBar/PropertySwitcherTabs";

const NearPropertiesListingCardsHeader = () => {
    //TODO : handle the logic of getting values of the selected properties by using react use form
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-center lg:justify-between ">
      <PropertySwitcherTabs />
      <SearchBar />
    </div>
  );
};
export default NearPropertiesListingCardsHeader;
