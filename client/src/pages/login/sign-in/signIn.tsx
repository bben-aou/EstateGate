import { useIntl } from "react-intl";
import { useSignInForm } from "@/hooks/froms/login/sign-in/useLoginForm";
import LoginImage from "@/components/login/sign-in/LoginImage";
import SingInHeader from "@/components/login/sign-in/SingInHeader";
import Divider from "@/components/login/sign-in/Divider";
import SocialSignIn from "@/components/login/sign-in/SocialSignIn";
import SignInForm from "@/components/login/sign-in/SignInForm";

const SignIn = () => {
  const intl = useIntl();

  const { control, errors, handleSubmit, onSubmit } = useSignInForm();
  console.log(errors);
  return (
    <div className=" md:mx-[10%] mt-[8vh] h-[92vh]  flex flex-row-reverse">
      <LoginImage imgSrc="/login.jpg" imgAlt="Login" />
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="h-[690px]  w-[388px] flex flex-col">
          <SingInHeader
            greetingMessage={intl.formatMessage({ id: "login.greeting" })}
            promptMessage={intl.formatMessage({ id: "login.prompt" })}
          />
          <SignInForm
            intl={intl}
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
          <Divider label={intl.formatMessage({ id: "login.splitter.or" })} />
          <SocialSignIn />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
