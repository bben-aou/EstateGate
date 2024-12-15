import { useStepperStore } from "@/store/stepper";
import InstructionsStepHeader from "@/components/create-new-post/steps/components/IntroStep/InstructionsStepHeader";
import InstructionsStepBody from "@/components/create-new-post/steps/components/IntroStep/InstructionsStepBody";
import InstructionsStepNextPreviousButton from "@/components/create-new-post/steps/components/IntroStep/InstructionsStepNextPreviousButton";
import { useIntl } from "react-intl";

const FinalStep = () => {
  const { previousStep } = useStepperStore();
  const intl = useIntl();


  return (
    <div>
      <InstructionsStepHeader
        title={intl.formatMessage({ id: "stepper.finalStep.title.label" })}
        label={intl.formatMessage({ id: "stepper.finalStep.subTitle.label" })}
      />
      <InstructionsStepBody
        description={"Your property is just one click away from going live"}
      />
      <div className="xl:max-w-[70%] flex items-center justify-between ">
        <InstructionsStepNextPreviousButton
          label={"stepper.propertyTypeStep.previousButton.label"}
          onClickHandler={previousStep}
        />
        <InstructionsStepNextPreviousButton
          label={"stepper.propertyTypeStep.publish.label"}
        />
      </div>
    </div>
  );
};

export default FinalStep;
