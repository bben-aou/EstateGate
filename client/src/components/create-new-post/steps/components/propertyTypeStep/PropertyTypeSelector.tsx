import usePropertyTypeStep from "@/hooks/stepper/steps/usePropertyTypeStep";
import PropertyCard from "@/components/create-new-post/steps/components/propertyTypeStep/PropertyCard";
import { TPropertyTypeSelector } from "@/interfaces/components/stepper/types";

export default function PropertyTypeSelector(props : TPropertyTypeSelector) {
  const {value , onChange} = props;
  const { PropertyTypes } = usePropertyTypeStep();

  return PropertyTypes.map((type) => (
    <PropertyCard
      key={type.value}
      Icon={type.Icon}
      label={type.label}
      onClick={() => onChange(type.value)}
      isSelected={value === type.value}
    />
  ));
}
