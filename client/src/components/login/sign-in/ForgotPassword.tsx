import { TForgotPassword } from "@/interfaces/inputs/types";
import { cn } from "@/lib/utils";


const ForgotPassword = (props: Readonly<TForgotPassword>) => {
  const { label, onClickHandler, containerClassName } = props;
  return (
    <button
      className={cn("self-end font-light text-[13px] md:text-sm mb-[20px]", containerClassName)}
      onClick={onClickHandler}
      type="button"
    >
      {label}
    </button>
  );
};
export default ForgotPassword;
