import { Button } from "@/components/ui/button";
import { TFirstStepNextButton } from "@/interfaces/components/createNewPost/types";
import { cn } from "@/lib/utils";
import { FormattedMessage } from "react-intl";

const InstructionsStepNextPreviousButton = (props: TFirstStepNextButton) => {
  const { label, onClickHandler, styling } = props;
  return (
    <Button
      className={cn(
        "self-start my-[24px] w-[150px] md:w-[200px] h-[54px] bg-light-60 text-light-0 rounded-[8px]",
        styling
      )}
      onClick={onClickHandler}
      type="submit"
    >
      <FormattedMessage id={label} />
    </Button>
  );
};
export default InstructionsStepNextPreviousButton;
