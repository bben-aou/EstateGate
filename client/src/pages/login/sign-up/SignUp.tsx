import LoginImage from "@/components/login/sign-in/LoginImage";
import SignUpHeader from "@/components/login/sign-up/SignUpHeader";
import { useIntl } from "react-intl";

export default function SignUp() {
  const intl = useIntl();
  return (
    <div className=" md:mx-[10%] mt-[8vh] h-[92vh] flex flex-row-reverse ">
      <LoginImage
        imgSrc="/sign-up.jpg"
        imgAlt="Login"
        imgClassName={"brightness-75"}
      />
      <div className="w-[50%] h-full flex items-center justify-center ">
        <div className="h-[690px] w-[388px] flex flex-col ">

          <SignUpHeader
            headline={intl.formatMessage({ id : 'login.sign-up.headline' })}
            descriptionPrompt={intl.formatMessage({ id : 'login.sign-up.description.prompt' })}
          />
          <div className=" flex flex-col gap-[15px] py-[20px]">

          </div>
        </div>
      </div>
    </div>
  );
}
