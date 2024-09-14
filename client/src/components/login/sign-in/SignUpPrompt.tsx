import { TSignUpPrompt } from "@/interfaces/inputs/types";

const SignUpPrompt = (props: TSignUpPrompt) => {
  const { label, onClickHandler } = props;
  return (
    <button
      className="self-center md:mt-[22px] font-light"
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};
export default SignUpPrompt;
