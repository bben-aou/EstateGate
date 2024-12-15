import { Button } from "@/components/ui/button";
import { TNextAndPreviousButtons } from "@/interfaces/components/stepper/types";
import { cn } from "@/lib/utils";
import { FormattedMessage } from "react-intl";

const NextAndPreviousButtons = (props: TNextAndPreviousButtons) => {
  const {
    nextLabel,
    previousLabel,
    nextClassName,
    previousClassName,
    nextOnclickHandler,
    previousOnclickHandler,
    isNextDisable,
    isPreviousDisable,
    disable,
  } = props;
  return (
    <div className=" px-[60px] flex justify-between">
      <Button
        className={cn(
          "my-[24px] w-[150px] h-[54px] bg-light-60 text-light-0 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-[8px]",
          nextClassName
        )}
        disabled={isPreviousDisable }
        onClick={previousOnclickHandler}
        type="button"
      >
        <FormattedMessage id={previousLabel} />
      </Button>
      <Button
        className={cn(
          "my-[24px] w-[150px] h-[54px] bg-light-60 disabled:bg-gray-500 disabled:cursor-not-allowed text-light-0 rounded-[8px]",
          previousClassName
        )}
        onClick={nextOnclickHandler}
        disabled={isNextDisable || disable}
        type="button"
      >
        <FormattedMessage id={nextLabel} />
      </Button>
    </div>
  );
};
export default NextAndPreviousButtons;
