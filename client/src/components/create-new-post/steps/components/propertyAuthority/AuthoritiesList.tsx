import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { useFormContext } from "react-hook-form";
import PropertyAuthoritySelector from "@components/create-new-post/steps/components/propertyAuthority/PropertyAuthoritySelector";
import { InputType } from "@/interfaces/inputs/types";

const AuthoritiesList = () => {
  const { control } = useFormContext();
  return (
    <div className="md:py-[40px] grid h-[75%] gap-[12px] overflow-y-auto justify-center p-[25px]">
      <ControlledInput
        name="propertyAuthority"
        control={control}
        rules={{ required: true }}
        component={PropertyAuthoritySelector}
        inputType={InputType.CUSTOM}
        inputProps={{
          onChange: () => {},
          value: "",
        }}
      />
    </div>
  );
};
export default AuthoritiesList;
