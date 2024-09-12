import { TSignInButton } from "@/interfaces/inputs/types";
import { cn } from "@/lib/utils";


const SignInButton = (props: TSignInButton) => {
  const { label, containerClassName } = props;
  return (
    <button
      className={cn(
        "w-full h-[48px] bg-light-60 rounded-[12px] text-light-0",
        containerClassName
      )}
      type="submit"
    >
      {label}
    </button>
  );
};
export default SignInButton;
