import { useStepperStore } from "@/store/stepper";
import StepHeader from "@components/create-new-post/steps/components/common/StepHeader";
import NextAndPreviousButtons from "@/components/common/stepper/buttons/NextAndPreviousButtons";
import PropertyTitleInput from "@components/create-new-post/steps/components/propertyTitle/PropertyTitleInput";
import { useIntl } from "react-intl";
import { useFormContext } from "react-hook-form";
import { PropertyFormSchema } from "@/validators/publishPropertyStepper/validators";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const PropertyTitle = () => {
  const { nextStep, previousStep, canGoNext, canGoPrevious } =
    useStepperStore();
  const intl = useIntl();
  const { toast } = useToast();

  const {trigger , formState : {errors}} = useFormContext<PropertyFormSchema>();
  const handleNext = async () => {
    const isValid = await trigger('propertyTitle');
    if (isValid) {
      nextStep();
    } else {
      toast({
        title: "Validation",
        variant: "destructive",
        description: errors.propertyTitle?.message,
        duration: 2000,
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    }
  }
  return (
    <div className="h-[60vh] md:h-[60%]">
      <StepHeader
        label="stepper.propertyTitle.stepHeader.label"
        hasSubtitle
        subtitleLabel={intl.formatMessage({
          id: "stepper.propertyTitle.stepHeader.subtitle.label",
        })}
      />
      <PropertyTitleInput />
      <NextAndPreviousButtons
        nextLabel="postProperty.FirstStep.component.FirstStep.content.firstStep.button"
        previousLabel="stepper.propertyTypeStep.previousButton.label"
        nextOnclickHandler={handleNext}
        previousOnclickHandler={previousStep}
        isNextDisable={!canGoNext()}
        isPreviousDisable={!canGoPrevious()}
      />
    </div>
  );
};
export default PropertyTitle;
