import { ControlledInputProps, InputType } from "@/interfaces/inputs/types";
import React from "react";
import { Controller, FieldValues, Path } from "react-hook-form";

function ControlledInput<TFieldValues extends FieldValues, TComponentProps>({
  name,
  control,
  component: InputComponent,
  rules,
  shouldUnregister = false,
  inputProps,
  inputType,
}: Readonly<ControlledInputProps<TFieldValues, TComponentProps>>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange, onBlur } }) => (
        <InputComponent
          {...inputProps}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...(inputType !== InputType.SELECT
            ? {}
            : { onSelect: (option: Path<TFieldValues>) => onChange(option)})}
        />
      )}
    />
  );
}

export default ControlledInput;
