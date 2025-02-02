import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { useFormContext } from "react-hook-form";
import { InputType } from "@/interfaces/inputs/types";
import PropertyTypeSelector from "@components/create-new-post/steps/components/propertyTypeStep/PropertyTypeSelector";

const PropertiesList = () => {
  const { control } = useFormContext();

  return (
    <div className="py-[40px] px-[50px] overflow-auto h-[75%] grid place-items-center md:grid-cols-3 gap-4">
      <ControlledInput
        name="propertyType"
        control={control}
        rules={{ required: true }}
        component={PropertyTypeSelector}
        inputType={InputType.SELECT}
        inputProps={{
          onChange: () => {},
          value: "",
        }}
      />
    </div>
  );
};
export default PropertiesList;
