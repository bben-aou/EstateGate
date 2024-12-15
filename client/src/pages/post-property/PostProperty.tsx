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
import PropertyTitle from "@/components/create-new-post/steps/PropertyTitle";
import PropertyDescription from "@/components/create-new-post/steps/PropertyDescription";
import FinalStep from "@/components/create-new-post/steps/FinalStep";
import { propertyFormSchema, PropertyFormSchema } from "@/validators/publishPropertyStepper/validators";
import { EPropertyType } from "@/enums/propertyType";
import { EPropertyAuthority } from "@/enums/ownership";
import PropertyPrice from "@/components/create-new-post/steps/PropertyPrice";
import { useSubmitProperty } from "@/hooks/sumbitPostProperty/useSubmitProperty";
import { zodResolver } from "@hookform/resolvers/zod";

const PostProperty = () => {
  const methods = useForm<PropertyFormSchema>({
    mode: "all",
    defaultValues: {
      propertyType: EPropertyType.APARTMENT,
      propertyAuthority: EPropertyAuthority.OWNER,
      propertyLocation: {
        lat: "33.5637066",
        lon: "-7.6278608 ",
        display_name: "",
      },
      propertyDetails: {
        floors: 1,
        bedrooms: 1,
        bathrooms: 1,
        garages: 1,
        area: 1,
      },
      propertyFeatures: [],
      propertyPhotos: [],
      propertyTitle: "",
      price : '0',
      propertyDescription: "",
    },
    resolver: zodResolver(propertyFormSchema),
  });

  const { currentStep } = useStepperStore();
  const  {handlePublish} = useSubmitProperty();

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
    { title: "Property Title", component: <PropertyTitle /> },
    { title: "Property Description", component: <PropertyDescription /> },
    { title : "Property Price " , component : <PropertyPrice/>},
    { title: "Final Step", component: <FinalStep /> },
  ];

  return (
    <div className="md:mx-[10%] mt-[8vh] h-[92vh] flex hide-scrollbar">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data)=> handlePublish(data))}
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
