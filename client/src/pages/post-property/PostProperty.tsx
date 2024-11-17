import { FormProvider, useForm } from "react-hook-form";
import InstructionsStep from "@/components/create-new-post/steps/InstructionsStep";
import FirstStepImage from "@/components/create-new-post/steps/components/IntroStep/FirstStepImage";
import property from "@assets/property.svg";
import { useStepperStore } from "@/store/stepper";
import PropertyTypeStep from "@/components/create-new-post/steps/PropertyTypeStep";
import { ISteps } from "@/interfaces/components/stepper/types";
import PropertyAuthority from "@/components/create-new-post/steps/PropertyAuthority";
import PropertyLocation from "@/components/create-new-post/steps/PropertyLocation";
import PropertyDetails from "@/components/create-new-post/steps/PropertyDetails";
import PropertyFeatures from "@/components/create-new-post/steps/PropertyFeatures";
import PropertyPhotos from "@/components/create-new-post/steps/PropertyPhotos";

const PostProperty = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      propertyType: "apartment",
      propertyAuthority: "owner",
      propertyLocation: {}, //TODO : should add the entire type of property location
      propertyDetails: {
        floors: 1,
        bedrooms: 1,
        bathrooms: 1,
        garages: 1,
        area: 1,
      },
      propertyFeatures: {},
      propertyPhotos: [],
    },
  });
  const { currentStep } = useStepperStore();

  const steps: ISteps[] = [
    {
      title: "Introduction To Step 1",
      component: (
        <InstructionsStep
          headerTitle="postProperty.FirstStep.component.FirstStep.title"
          headerLabel="postProperty.FirstStep.component.FirstStep.content.firstStep.header"
          description="postProperty.FirstStep.component.FirstStep.content.firstStep.body"
          nextButtonLabel="postProperty.FirstStep.component.FirstStep.content.firstStep.button"
        />
      ),
    },
    { title: "Property type", component: <PropertyTypeStep /> },
    { title: "property Authority", component: <PropertyAuthority /> },
    { title: "Property Location", component: <PropertyLocation /> },
    { title: "Property Details", component: <PropertyDetails /> },
    {
      title: "Introduction To Step 2",
      component: (
        <InstructionsStep
          headerTitle="stepper.secondStep.title"
          headerLabel="stepper.secondStep.stepHeader.label"
          description="stepper.secondStep.description"
          nextButtonLabel="postProperty.FirstStep.component.FirstStep.content.firstStep.button"
          canGoBack
          previousButtonLabel="stepper.propertyTypeStep.previousButton.label"
        />
      ),
    },
    { title: "Property features", component: <PropertyFeatures /> },
    { title: "Property photos", component: <PropertyPhotos /> },
  ];

  return (
    <div className="md:mx-[10%] mt-[8vh] h-[92vh] flex hide-scrollbar">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => console.log(data))}
          className="w-[60%] h-full flex flex-col justify-center pr-[25px]"
        >
          {steps[currentStep].component}
        </form>
      </FormProvider>
      <FirstStepImage img={property} />
    </div>
  );
};

export default PostProperty;
