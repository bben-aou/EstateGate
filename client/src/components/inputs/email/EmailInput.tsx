import InputWithLabel from "@/components/common/InputWithLabel";
import { Input } from "@/components/ui/input";
import { IEmailInput, InputType } from "@/interfaces/inputs/types";
import { cn } from "@/lib/utils";
import ControlledInput from "@components/inputs/controlledInputs/ControlledInput";
import { FieldValues } from "react-hook-form";

const EmailInput = <T extends FieldValues>(props: Readonly<IEmailInput<T>>) => {
  const { control, errors, intl, name } = props;

  return (
    <InputWithLabel
      label={intl.formatMessage({ id: "login.input.email.label" })}
      containerClassName="border-none"
      errorMessage={errors.email?.message?.toString()}
      children={
        <ControlledInput
          name={name}
          control={control}
          component={Input}
          inputType={InputType.TEXT}
          inputProps={{
            type: "email",
            placeholder: "Example@email.com",
            className: cn(
              "w-full shadow-none h-[50px] rounded-[12px] my-[10px] border-random-40 bg-random-50",
              {
                ["border-error-20 focus-visible:ring-0 shake-horizontal"]: errors.email,
              }
            ),
            id : "email"
          }}
        />
      }
    />
  );
};
export default EmailInput;
