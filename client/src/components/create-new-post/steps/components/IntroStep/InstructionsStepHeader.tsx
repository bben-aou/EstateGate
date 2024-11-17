import { TInstructionsStepHeader } from "@/interfaces/components/stepper/types";
import React from "react";
import { FormattedMessage } from "react-intl";

const InstructionsStepHeader = (props : TInstructionsStepHeader) => {
  const { label , title} = props;
  return (
    <React.Fragment>
      <h1 className="text-[18px] font-medium leading-6">
        <FormattedMessage id={title} />
      </h1>
      <h1 className="text-[48px] font-medium leading-[54px] mt-[16px] mb-[24px]">
        <FormattedMessage id={label} />
      </h1>
    </React.Fragment>
  );
};
export default InstructionsStepHeader;
