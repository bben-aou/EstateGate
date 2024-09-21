import InputWithLabel from "@/components/common/InputWithLabel";
import { InputType, TUserName } from "@/interfaces/inputs/types";
import ControlledInput from "../controlledInputs/ControlledInput";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const LastNameInput = (props : Readonly<TUserName>) => {
  const { control, errors, intl } = props;

  return (
    <InputWithLabel
    label={intl.formatMessage({ id : 'login.sign-up.input.lastName.label' })}
    containerClassName="border-none"
    errorMessage={errors.lastName?.message}
    children={
      <ControlledInput
        name="lastName"
        control={control}
        component={Input}
        inputType={InputType.TEXT}
        inputProps={{
            type: "text",
            placeholder: "Enter your first name",
            className: cn( 
              "w-full shadow-none h-[50px] rounded-[12px] my-[10px] border-random-40 bg-random-50",
              {
                ["border-error-20 focus-visible:ring-0 shake-horizontal"]: errors.lastName,
              }
            ),
            id: "lastName"
        }}
      />
    }
    />
  )
};
export default LastNameInput;

