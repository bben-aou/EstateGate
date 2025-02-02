import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { Textarea } from "@/components/ui/textarea";
import { InputType } from "@/interfaces/inputs/types";
import { useFormContext } from "react-hook-form";

const PropertyTitleInput = () => {
    const { control } = useFormContext();

  return (
    <div className="py-[40px] h-[75%]  w-full md:w-[80%] md:mx-[10%] flex flex-col self-center  gap-[12px] overflow-y-auto px-[30px]  p-[25px]">
       <ControlledInput
        name="propertyTitle"
        control={control}
        rules={{ required: true }}
        component={Textarea}
        inputType={InputType.TEXT}
        inputProps={{
            placeholder :"Enter a Title",
            maxLength:39
        }}
      />
    </div>
  );
};
export default PropertyTitleInput;
