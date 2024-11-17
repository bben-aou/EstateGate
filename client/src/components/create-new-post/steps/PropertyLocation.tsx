import { useStepperStore } from "@/store/stepper";
import StepHeader from "@/components/create-new-post/steps/components/common/StepHeader";
import NextAndPreviousButtons from "@/components/common/stepper/buttons/NextAndPreviousButtons";
import FindPropertyLocation from "@/components/create-new-post/steps/components/propertyLocation/FindPropertyLocation";

const PropertyLocation = () => {
  const { nextStep, previousStep, canGoNext, canGoPrevious } =
  useStepperStore();
  return (
    
    <div className="h-[60%]">
      <StepHeader label="stepper.propertyTypeStep.stepHeader.label" />
      <FindPropertyLocation/>
      <NextAndPreviousButtons
        nextLabel="postProperty.FirstStep.component.FirstStep.content.firstStep.button"
        previousLabel="stepper.propertyTypeStep.previousButton.label"
        nextOnclickHandler={nextStep}
        previousOnclickHandler={previousStep}
        isNextDisable={!canGoNext()}
        isPreviousDisable={!canGoPrevious()}
      />
    </div>
  )
};
export default PropertyLocation;
