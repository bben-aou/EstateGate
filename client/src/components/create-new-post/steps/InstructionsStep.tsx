import React from "react";
import { useStepperStore } from "@/store/stepper";
import InstructionsStepHeader from "@/components/create-new-post/steps/components/IntroStep/InstructionsStepHeader";
import InstructionsStepBody from "@/components/create-new-post/steps/components/IntroStep/InstructionsStepBody";
import InstructionsStepNextPreviousButton from "@/components/create-new-post/steps/components/IntroStep/InstructionsStepNextPreviousButton";
import { TInstructionsStep } from "@/interfaces/components/stepper/types";
import ConditionalRendering from "@/components/common/ConditionalRendering";

const InstructionsStep = (props: TInstructionsStep) => {
  const {
    headerTitle,
    headerLabel,
    description,
    nextButtonLabel,
    canGoBack,
    previousButtonLabel,
  } = props;
  const { nextStep, previousStep } = useStepperStore();

  return (
    <div>
      <InstructionsStepHeader title={headerTitle} label={headerLabel} />
      <InstructionsStepBody description={description} />

      <ConditionalRendering
        condition={canGoBack === true}
        defaultComponent={
          <InstructionsStepNextPreviousButton
            label={nextButtonLabel}
            onClickHandler={nextStep}
          />
        }
      >
        <div className="w-full flex items-center justify-between">
          <InstructionsStepNextPreviousButton
            label={previousButtonLabel}
            onClickHandler={previousStep}
          />
          <InstructionsStepNextPreviousButton
            label={nextButtonLabel}
            onClickHandler={nextStep}
          />
        </div>
      </ConditionalRendering>
    </div>
  );
};
export default InstructionsStep;
