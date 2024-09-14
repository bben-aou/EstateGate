import InputWithLabel from "@/components/common/InputWithLabel";
import React from "react";
import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { Input } from "@/components/ui/input";
import { InputType, IPasswordInput } from "@/interfaces/inputs/types";
import { cn } from "@/lib/utils";
import { FieldError, FieldValues } from "react-hook-form";

const PasswordInput = <T extends FieldValues>(
  props: Readonly<IPasswordInput<T>>
) => {
  const { control, errors, intl, name } = props;
  return (
    <InputWithLabel
      label={intl.formatMessage({ id: "login.input.password.label" })}
      containerClassName="border-none my-[5px]"
      errorMessage={(errors.password as FieldError)?.message}
      children={
        <ControlledInput
          name={name}
          control={control}
          component={Input}
          inputType={InputType.PASSWORD}
          inputProps={{
            type: "password",
            placeholder: "At least 8 characters",
            className: cn(
              "w-full shadow-none h-[50px] rounded-[12px] my-[10px] border-random-40 bg-random-50",
              {
                ["border-error-20 focus-visible:ring-0"]: errors.password,
              }
            ),
            id: "password"
          }}
        />
      }
    />
  );
};
export default PasswordInput;
