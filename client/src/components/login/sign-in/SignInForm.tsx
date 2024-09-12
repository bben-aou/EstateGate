import EmailInput from "@/components/inputs/email/EmailInput";
import PasswordInput from "@/components/inputs/password/PasswordInput";
import ForgotPassword from "@/components/login/sign-in/ForgotPassword";
import SignInButton from "@/components/login/sign-in/SignInButton";
import { TSingInForm } from "@/interfaces/inputs/types";

const SignInForm = (props: TSingInForm) => {
  const { control, errors, intl, handleSubmit, onSubmit } = props;
  return (
    <div className=" flex flex-col gap-[15px] py-[20px]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <EmailInput control={control} errors={errors} intl={intl} />
        <PasswordInput control={control} errors={errors} intl={intl} />
        <ForgotPassword
          label={intl.formatMessage({ id: "login.forget.password" })}
          onClickHandler={() => {}}
        />
        <SignInButton
          label={intl.formatMessage({ id: "login.button.sign-in" })}
        />
      </form>
    </div>
  );
};
export default SignInForm;
