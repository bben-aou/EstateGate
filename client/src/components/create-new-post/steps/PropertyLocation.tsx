import { useStepperStore } from "@/store/stepper";
import StepHeader from "@/components/create-new-post/steps/components/common/StepHeader";
import NextAndPreviousButtons from "@/components/common/stepper/buttons/NextAndPreviousButtons";
import FindPropertyLocation from "@/components/create-new-post/steps/components/propertyLocation/FindPropertyLocation";
import { useToast } from "@/hooks/use-toast";
import { useFormContext } from "react-hook-form";
import { PropertyFormSchema } from "@/validators/publishPropertyStepper/validators";
import { cn } from "@/lib/utils";

const PropertyLocation = () => {
  const { nextStep, previousStep, canGoNext, canGoPrevious } =
    useStepperStore();
  const { toast } = useToast();

  const {
    trigger,
    formState: { errors },
  } = useFormContext<PropertyFormSchema>();
  const handleNext = async () => {
    const isValid = await trigger("propertyLocation");
    if (isValid) {
      nextStep();
    } else {
      console.log(
        "Validation errors:",
        errors.propertyLocation?.display_name?.message
      );
      toast({
        title: "Validation",
        variant: "destructive",
        description: errors.propertyLocation?.display_name?.message,
        duration: 2000,
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
      });
    }
  };
  return (
    <div className="h-[80vh] md:h-[60%]">
      <StepHeader label="stepper.propertyTypeStep.stepHeader.label" />
      <FindPropertyLocation />
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
export default PropertyLocation;
