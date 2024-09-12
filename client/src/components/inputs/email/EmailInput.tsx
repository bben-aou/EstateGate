import InputWithLabel from '@/components/common/InputWithLabel';
import { Input } from '@/components/ui/input';
import { InputType, TEmailInput } from '@/interfaces/inputs/types';
import { cn } from '@/lib/utils';
import ControlledInput from '@/components/inputs/controlledInputs/ControlledInput';


const EmailInput = (props : Readonly<TEmailInput>) => {
    const { control, errors, intl } = props;
  return (
    <InputWithLabel
    label={intl.formatMessage({ id: "login.input.email.label" })}
    containerClassName="border-none"
    errorMessage={errors.email?.message}
    children={
      <ControlledInput
        name="email"
        control={control}
        component={Input}
        inputType={InputType.TEXT}
        inputProps={{
          type: "email",
          placeholder: "Example@email.com",
          className: cn(
            "w-full shadow-none h-[50px] rounded-[12px] my-[10px] border-random-40 bg-random-50",
            {
              ["border-error-20 focus-visible:ring-0"]: errors.email,
            }
          ),
        }}
      />
    }
  />
  )
};
export default EmailInput;
