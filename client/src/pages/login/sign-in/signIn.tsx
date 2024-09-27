import { useIntl } from "react-intl";
import { useSignInForm } from "@/hooks/froms/login/sign-in/useLoginForm";
import LoginImage from "@/components/login/sign-in/LoginImage";
import SingInHeader from "@/components/login/sign-in/SingInHeader";
import Divider from "@/components/login/sign-in/Divider";
import SocialSignIn from "@/components/login/sign-in/SocialSignIn";
import SignInForm from "@/components/login/sign-in/SignInForm";
import { useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

//TODO : make sure to trim the inputs values to avoid sending unnecessary whitespace to the backend
const SignIn = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { control, errors, handleSubmit, onSubmit } = useSignInForm();
  const {  errors : authErrors , user } = useAuth();
  console.log('auth errors : ', authErrors.login)

 
  useEffect(() => {
    if (user ) {
      navigate(`/profile/${user?.id}`);
    }
  }, [navigate, user]);

  console.log(errors);
  return (
    <div className="mx-[10%] mt-[8vh] h-[92vh]  flex flex-row-reverse">
      <LoginImage
        imgSrc="/login.jpg"
        imgAlt="Login"
        imgClassName="brightness-75"
        wrapperClassName="hidden lg:block"
      />
      <div className="w-full lg:w-[50%] h-full flex items-center justify-center ">
        <div className="h-full lg:h-[690px]  justify-center lg:justify-start  w-[388px] flex flex-col">
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
