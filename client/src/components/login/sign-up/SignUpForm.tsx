import EmailInput from "@/components/inputs/email/EmailInput";
import ConfirmPasswordInput from "@/components/inputs/password/ConfirmPasswordInput";
import PasswordInput from "@/components/inputs/password/PasswordInput";
import PhoneNumberInput from "@/components/inputs/phoneNumberInput/PhoneNumberInput";
import FirstNameInput from "@/components/inputs/sign-up/FirstNameInput";
import LastNameInput from "@/components/inputs/sign-up/LastNameInput";
import { TSingUpForm } from "@/interfaces/inputs/types";
// import { Checkbox } from "@radix-ui/react-checkbox";
import SignUpButton from "./SignUpButton";
import CheckBox from "./CheckBox";

const SignUpForm = (props: TSingUpForm) => {
  const { control, errors, handleSubmit, onSubmit, intl } = props;

  return (
    <div className=" flex flex-col gap-[15px] py-[20px] ">
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className=" md:flex md:gap-[23px]">
          <FirstNameInput control={control} errors={errors} intl={intl} />
          <LastNameInput control={control} errors={errors} intl={intl} />
        </div>
        <PhoneNumberInput control={control} errors={errors} intl={intl} />
        <EmailInput
          control={control}
          errors={errors}
          intl={intl}
          name="email"
        />
        <PasswordInput
          control={control}
          errors={errors}
          intl={intl}
          name="password"
        />
        <ConfirmPasswordInput
          control={control}
          errors={errors}
          intl={intl}
          name="confirmPassword"
        />

        <CheckBox
          label={intl.formatMessage({
            id: "login-sign-up.acceptTermsAndConditions.label",
          })}
        />
        <SignUpButton
          label={intl.formatMessage({ id: "login.button.sign-up" })}
        />
      </form>
    </div>
  );
};
export default SignUpForm;
