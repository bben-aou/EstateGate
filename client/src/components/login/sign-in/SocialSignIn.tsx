import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { useIntl } from "react-intl";
import SignUpPrompt from "@/components/login/sign-in/SignUpPrompt";

const SocialSignIn = () => {
  const intl = useIntl();
  return (
    <div className="flex flex-col gap-[16px]">
      <Button className="w-full h-[42px] md:h-[48px] bg-random-30 rounded-[12px] text-light-0">
        <FcGoogle className="w-6 h-6 mr-[8px]" />
        {intl.formatMessage({ id: "login.button.sign-in.with.google" })}
      </Button>
      <Button className="w-full h-[42px] md:h-[48px] bg-random-30 rounded-[12px] text-light-0">
        <ImAppleinc className="w-6 h-6 mr-[13px] text-black" />
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
