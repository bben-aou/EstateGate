import NearPropertiesListingCardsHeader from '@/components/basedOnYourLocation/PropertyCard/NearPropertiesListingCardsHeader';
import NearPropertiesCards from '@/components/basedOnYourLocation/PropertyCard/NearPropertiesCards';


const NearPropertiesListingCards = () => {
  return (
    <div className='mt-[50px] md:mt-[72px] flex flex-col '>
        <NearPropertiesListingCardsHeader/>
        <NearPropertiesCards/>
    </div>
  )
};
export default NearPropertiesListingCards;
