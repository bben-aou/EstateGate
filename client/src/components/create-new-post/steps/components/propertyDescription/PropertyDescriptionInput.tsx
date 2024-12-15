import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { Textarea } from "@/components/ui/textarea";
import { InputType } from "@/interfaces/inputs/types";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";

const PropertyDescriptionInput = () => {
  const { control } = useFormContext();
  const intl = useIntl();

  return (
    <div className="py-[40px] h-[75%] w-[80%] mx-[10%]  flex flex-col self-center  gap-[12px] overflow-y-auto px-[30px]  p-[25px]">
      <ControlledInput
        name="propertyDescription"
        control={control}
        rules={{ required: true }}
        component={Textarea}
        inputType={InputType.TEXT}
        inputProps={{
          placeholder: intl.formatMessage({
            id: "stepper.propertyTitle.stepHeader.placeholder.label",
          }),
          maxLength: 500,
          className: "h-[150px]",
        }}
      />
    </div>
  );
};
export default PropertyDescriptionInput;
