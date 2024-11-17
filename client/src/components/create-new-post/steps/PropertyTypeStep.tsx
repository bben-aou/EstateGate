import NextAndPreviousButtons from "@/components/common/stepper/buttons/NextAndPreviousButtons";
import PropertiesList from "@/components/create-new-post/steps/components/propertyTypeStep/PropertiesList";
import StepHeader from "@/components/create-new-post/steps/components/common/StepHeader";
import { useStepperStore } from "@/store/stepper";

const PropertyTypeStep = () => {
  const { nextStep, previousStep, canGoNext, canGoPrevious } =
    useStepperStore();
  return (
    <div className="h-[60%]">
      <StepHeader label="stepper.propertyTypeStep.stepHeader.label" />
      <PropertiesList />
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
export default PropertyTypeStep;
