import React from "react";
import { useStepperStore } from "@/store/stepper";
import InstructionsStepHeader from "@/components/create-new-post/steps/components/IntroStep/InstructionsStepHeader";
import InstructionsStepBody from "@/components/create-new-post/steps/components/IntroStep/InstructionsStepBody";
import InstructionsStepNextPreviousButton from "@/components/create-new-post/steps/components/IntroStep/InstructionsStepNextPreviousButton";
import { TInstructionsStep } from "@/interfaces/components/stepper/types";
import ConditionalRendering from "@/components/common/ConditionalRendering";
import { useInitiateProperty } from "@/hooks/stepper/api/useInitiateProperty";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { initiateProperty } = useInitiateProperty({
    config: {
      onSuccess: (data) => {
        console.log("initiate data", data);
        if (data?.property.id) {
          navigate(`/post-property/${data.property.id}`);
        }
      },
      onError: (error) => {
        console.error("initiate error", error);
      },
    },
  });

  const handleClick = () => {
    nextStep();
    if (!canGoBack) {
      initiateProperty();
    }
  };

  return (
    <div className="px-[20px] md:px-0">
      <InstructionsStepHeader title={headerTitle} label={headerLabel} />
      <InstructionsStepBody description={description} />

      <ConditionalRendering
        condition={canGoBack === true}
        defaultComponent={
          <InstructionsStepNextPreviousButton
            label={nextButtonLabel}
            onClickHandler={handleClick}
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
