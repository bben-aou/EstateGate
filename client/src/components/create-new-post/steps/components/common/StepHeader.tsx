import ConditionalRendering from "@/components/common/ConditionalRendering";
import { TStepHeader } from "@/interfaces/components/stepper/types";
import { cn } from "@/lib/utils";
import { FormattedMessage } from "react-intl";

const StepHeader = (props: TStepHeader) => {
  const { headerClassName, label, hasSubtitle = false , subtitleLabel} = props;
  return (
    <div>
      <h1
        className={cn(
          "text-[26px] md:text-[32px] font-medium leading-9 w-full text-center",
          headerClassName
        )}
      >
        <FormattedMessage id={label} />
      </h1>
      <ConditionalRendering condition={hasSubtitle}>
        <h1 className="text-[18px] leading-6 w-full text-center text-gray-400 font-light mt-3">
         <FormattedMessage id={subtitleLabel}/>
        </h1>
      </ConditionalRendering>
    </div>
  );
};
export default StepHeader;
