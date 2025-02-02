import PropertyDetailItem from '@/components/create-new-post/steps/components/propertyDetails/PropertyDetailItem';
import { useFormContext } from 'react-hook-form';

const PropertyDetailsList = () => {
  const { control , } = useFormContext();
  return (
    <div className="md:py-[40px] h-[75%]  gap-[12px] md:overflow-y-auto px-[30px] md:px-[85px] md:p-[25px]">
      <PropertyDetailItem control={control}  maxValue={15}  name='propertyDetails.floors' label='Floors'/>
      <PropertyDetailItem control={control} maxValue={15}  name='propertyDetails.bedrooms' label='bedrooms'/>
      <PropertyDetailItem control={control} maxValue={15} name='propertyDetails.bathrooms' label='bathrooms'/>
      <PropertyDetailItem control={control} maxValue={15} name='propertyDetails.garages' label='garages'/>
      <PropertyDetailItem control={control} unitLabel='stepper.propertyDetailItem.square.metre.unit' name='propertyDetails.area' label='area' />
    </div>
  )
}
export default PropertyDetailsList;
