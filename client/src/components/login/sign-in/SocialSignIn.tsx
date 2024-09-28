import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useIntl } from "react-intl";
import SignUpPrompt from "@/components/login/sign-in/SignUpPrompt";
import { useAuth } from "@/providers/AuthProvider";


//TODO : add forgot passwords functionality
const SocialSignIn = () => {
  const intl = useIntl();

  const {initiateGoogleLogin , initiateGithubLogin} = useAuth();

  return (
    <div className="flex flex-col gap-[16px]">
      <Button className="w-full h-[42px] md:h-[48px] bg-random-30 rounded-[12px] text-light-0"  onClick={initiateGoogleLogin}>
        <FcGoogle className="w-6 h-6 mr-[8px]"/>
        {intl.formatMessage({ id: "login.button.sign-in.with.google" })}
      </Button>
      <Button className="w-full h-[42px] md:h-[48px] bg-random-30 rounded-[12px] text-light-0" onClick={initiateGithubLogin}>
        <FaGithub className="w-6 h-6 mr-[13px] text-black" />
        {intl.formatMessage({ id: "login.button.sign-in.with.apple" })}
      </Button>
      <SignUpPrompt
        label={intl.formatMessage({ id: "login.sign-up.prompt" })}
        onClickHandler={() => {}}
      />
    </div>
  );
};
export default SocialSignIn;
