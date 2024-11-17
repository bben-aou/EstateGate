import usePropertyFeatures from "@/hooks/stepper/steps/usePropertyFeatures";
import PropertyCard from "@/components/create-new-post/steps/components/propertyTypeStep/PropertyCard";

type TPropertyFeaturesSelector = {
  value: string;
  onChange: (value: string) => void;
};
const PropertyFeaturesSelector = (props: TPropertyFeaturesSelector) => {
  const { HouseFeatures } = usePropertyFeatures();
  const { value, onChange } = props;

  return HouseFeatures.map((type) => (
    <PropertyCard
      key={type.value}
      Icon={type.Icon}
      label={type.label}
      onClick={() => onChange(type.value)}
      isSelected={value === type.value}
      isWithinMultiSelect={
        Array.isArray(value) ? value?.includes(type.value) : false
      }
    />
  ));
};
export default PropertyFeaturesSelector;
