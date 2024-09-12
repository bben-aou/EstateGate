import InputWithLabel from "@/components/common/InputWithLabel";
import React from "react";
import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { Input } from "@/components/ui/input";
import { InputType, TPasswordInput } from "@/interfaces/inputs/types";
import { cn } from "@/lib/utils";

export default function PasswordInput(props: Readonly<TPasswordInput>) {
    const { control, errors, intl } = props;
  return (
    <InputWithLabel
      label={intl.formatMessage({ id: "login.input.password.label" })}
      containerClassName="border-none my-[5px]"
      errorMessage={errors.password?.message}
      children={
        <ControlledInput
          name="password"
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
          }}
        />
      }
    />
  );
}
