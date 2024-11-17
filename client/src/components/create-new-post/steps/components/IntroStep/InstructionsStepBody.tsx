import { TInstructionsStepBody } from "@/interfaces/components/stepper/types";
import React from "react";
import { FormattedMessage } from "react-intl";

const InstructionsStepBody = (props : TInstructionsStepBody) => {
  const { description } = props;
  return (
    <p className="text-[18px] leading-7 font-light">
      <FormattedMessage id={description} />
    </p>
  );
};
export default InstructionsStepBody;
