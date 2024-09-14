import { Checkbox } from "@/components/ui/checkbox";
import { TCheckBox } from "@/interfaces/login/sign-up/types";
import React from "react";

const CheckBoxInput = (props: TCheckBox) => {
  const { label, disabled = false } = props;
  return (
    <div className="flex items-center space-x-2">
      <Checkbox className="ml-[2px] my-[5px]" disabled={disabled} />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};
export default CheckBoxInput;
