import { TSignUpHeader } from "@/interfaces/login/sign-up/types";

const SignUpHeader = (props: TSignUpHeader) => {
  const { headline, descriptionPrompt } = props;
  return (
    <div className="w-full flex flex-col gap-[15px]">
      <h1 className="text-[36px] font-semibold tracking-wide">{headline}</h1>
      <p className="text-[17px] font-light text-left w-full my-[10px]">
        {descriptionPrompt}
      </p>
    </div>
  );
};
export default SignUpHeader;
