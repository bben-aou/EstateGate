import NextAndPreviousButtons from "@/components/common/stepper/buttons/NextAndPreviousButtons";
import StepHeader from "@/components/create-new-post/steps/components/common/StepHeader";
import { useStepperStore } from "@/store/stepper";
import PropertyDetailsList from "@/components/create-new-post/steps/components/propertyDetails/PropertyDetailsList";

const PropertyDetails = () => {
  const { nextStep, previousStep, canGoNext, canGoPrevious } =
    useStepperStore();
  return (
    <div className=" md:h-[60%]">
      <StepHeader label="stepper.propertyDetails.stepHeader.label" />
      <PropertyDetailsList/>
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
export default PropertyDetails;
