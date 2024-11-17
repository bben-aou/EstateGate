import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { useFormContext } from "react-hook-form";
import PropertyFeaturesSelector from "@components/create-new-post/steps/components/propertyFeatures/PropertyFeaturesSelector";
import { InputType } from "@/interfaces/inputs/types";

const PropertyFeaturesList = () => {
    const { control } = useFormContext();
  return (
    <div className="py-[40px] px-[50px] overflow-auto h-[75%] grid place-items-center grid-cols-3 gap-4">
      <ControlledInput
        name="propertyFeatures"
        control={control}
        rules={{ required: true }}
        component={PropertyFeaturesSelector}
        inputType={InputType.multiSelect}
        inputProps={{
          onChange: () => {},
          value: "",
        }}
      />
    </div>
  );
};
export default PropertyFeaturesList;
