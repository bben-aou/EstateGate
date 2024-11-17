import NextAndPreviousButtons from "@/components/common/stepper/buttons/NextAndPreviousButtons";
import StepHeader from "@/components/create-new-post/steps/components/common/StepHeader";
import { useStepperStore } from "@/store/stepper";
import PropertyFeaturesList from "@/components/create-new-post/steps/components/propertyFeatures/PropertyFeaturesList";

const PropertyFeatures = () => {
  const { nextStep, previousStep, canGoNext, canGoPrevious } =
    useStepperStore();
  return (
    <div className="h-[60%]">
      <StepHeader label="stepper.PropertyFeatures.stepHeader.label" hasSubtitle  subtitleLabel="stepper.houseFeatures.subtitle"/>
      <PropertyFeaturesList/>
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
export default PropertyFeatures;
