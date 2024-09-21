import { InputType, TPhoneInput } from "@/interfaces/inputs/types";
import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import InputWithLabel from "@/components/common/InputWithLabel";
import { PhoneInput } from "@/components/ui/phoneInput";
import { cn } from "@/lib/utils";

const PhoneNumberInput = (props: Readonly<TPhoneInput>) => {
  const { control, errors, intl } = props;
  return (
    <InputWithLabel
      label={intl.formatMessage({
        id: "login.sign-up.input.phoneNumber.label",
      })}
      containerClassName="border-none"
      errorMessage={errors.phoneNumber?.message}
      children={
        <ControlledInput
          name="phoneNumber"
          control={control}
          component={PhoneInput}
          inputType={InputType.PHONE}
          inputProps={{
            type: "phone",
            selectCountryClassName: cn(
              "shadow-none h-[50px] rounded-l-[12px] my-[10px] border-y-random-40 bg-random-50",
              {
                ["border-l-error-20 border-y-error-20 focus-visible:ring-0 shake-horizontal"]:
                  errors.phoneNumber,
              }
            ),
            inputClassName: cn(
              "shadow-none h-[50px] rounded-r-[12px] my-[10px] border-y-random-40 bg-random-50",
              {
                ["border-error-20 border-y-error-20 focus-visible:ring-0 shake-horizontal"]:
                  errors.phoneNumber,
              }
            ),
            defaultCountry: "MA",
            inputPlaceholder: intl.formatMessage({
              id: "login.input.phoneNumber.placeholder",
            }),
            international: true,
            id: "phoneNumber",
          }}
        />
      }
    />
  );
};
export default PhoneNumberInput;
