import { useStepperStore } from "@/store/stepper";
import StepHeader from "@components/create-new-post/steps/components/common/StepHeader";
import NextAndPreviousButtons from "@/components/common/stepper/buttons/NextAndPreviousButtons";
import PropertyDescriptionInput from "@components/create-new-post/steps/components/propertyDescription/PropertyDescriptionInput";
import { useIntl } from "react-intl";
import { useToast } from "@/hooks/use-toast";
import { PropertyFormSchema } from "@/validators/publishPropertyStepper/validators";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

const PropertyDescription = () => {
  const { nextStep, previousStep, canGoNext, canGoPrevious } =
    useStepperStore();
  const intl = useIntl();
  const { toast } = useToast();

  const {
    trigger,
    formState: { errors },
  } = useFormContext<PropertyFormSchema>();
  const handleNext = async () => {
    const isValid = await trigger("propertyDescription");
    if (isValid) {
      nextStep();
    } else {
      console.log("Validation errors:", errors.propertyDescription?.message);
      toast({
        title: "Validation",
        variant: "destructive",
        description: errors.propertyDescription?.message,
        duration: 2000,
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    }
  };

  return (
    <div className="h-[60vh] md:h-[60%]">
      <StepHeader
        label="stepper.propertyDescription.stepHeader.label"
        hasSubtitle
        subtitleLabel={intl.formatMessage({
          id: "stepper.propertyDescription.stepHeader.subtitle.label",
        })}
      />
      <PropertyDescriptionInput />
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
export default PropertyDescription;
