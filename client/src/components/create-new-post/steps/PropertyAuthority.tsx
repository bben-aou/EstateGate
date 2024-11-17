import NextAndPreviousButtons from "@/components/common/stepper/buttons/NextAndPreviousButtons";
import StepHeader from "@/components/create-new-post/steps/components/common/StepHeader";
import { useStepperStore } from "@/store/stepper";
import AuthoritiesList from "@/components/create-new-post/steps/components/propertyAuthority/AuthoritiesList";

const PropertyAuthority = () => {
  const { nextStep, previousStep, canGoNext, canGoPrevious } =
    useStepperStore();
  return (
    <div className="h-[60%] ">
      <StepHeader label="stepper.propertyTypeStep.stepHeader.label" />
      <AuthoritiesList/>
      <NextAndPreviousButtons
        nextLabel="postProperty.FirstStep.component.FirstStep.content.firstStep.button"
        previousLabel="stepper.propertyTypeStep.previousButton.label"
        nextOnclickHandler={nextStep}
        previousOnclickHandler={previousStep}
        isNextDisable={!canGoNext()}
        isPreviousDisable={!canGoPrevious()}
      />
    </div>
  );
};
export default PropertyAuthority;
