
import LoginImage from "@/components/login/sign-in/LoginImage";
import SignUpForm from "@/components/login/sign-up/SignUpForm";
import SignUpHeader from "@/components/login/sign-up/SignUpHeader";
import { useSignUpForm } from "@/hooks/froms/login/sign-up/useSignUpForm";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

//TODO : make sure to trim the inputs values to avoid sending unnecessary whitespace to the backend

export default function SignUp() {
  const intl = useIntl();
  const navigate = useNavigate();

  const { control, errors, handleSubmit, onSubmit } = useSignUpForm();
  const { isLoading, errors : authErrors , user } = useAuth();

  console.log('error ---> ', authErrors)
  useEffect(() => {
    if (user ) {
      navigate(`/profile/${user?.id}`);
    }
  }, [navigate, user]);

  return (
    <div className="mx-[10%] mt-[8vh] h-[92vh] flex flex-row-reverse ">
      <LoginImage
        imgSrc="/sign-up.jpg"
        imgAlt="Login"
        imgClassName="brightness-75"
        wrapperClassName="hidden lg:block"
      />
      <div className="w-full lg:w-[50%] h-full flex items-center justify-center">
        <div className="h-fit w-[388px] flex flex-col max-h-full mt-[15px] md:mt-0">
          <SignUpHeader
            headline={intl.formatMessage({ id: "login.sign-up.headline" })}
            descriptionPrompt={intl.formatMessage({
              id: "login.sign-up.description.prompt",
            })}
          />

          <SignUpForm
             intl={intl}
             control={control}
             errors={errors}
             handleSubmit={handleSubmit}
             onSubmit={onSubmit}
             isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
