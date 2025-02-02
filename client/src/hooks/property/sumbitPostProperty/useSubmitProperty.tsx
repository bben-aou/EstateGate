import { useToast } from "@hooks/use-toast";
import {
  PropertyFeature,
  PropertyFormData,
} from "@/interfaces/formattingData/types";
import { usePublishProperty } from "@/hooks/property/publisProperty/usePublishPropertyMutation";
import { TPropertyUpdatePayload } from "@/interfaces/payloads/PropertyUpdatePayload";
import { TPropertyType } from "@/enums/propertyType";
import { TPropertyAuthority } from "@/enums/ownership";
import { cn } from "@/lib/utils";
import { PropertyFormSchema } from "@/validators/publishPropertyStepper/validators";
import { useNavigate, useParams } from "react-router-dom";

const featureMapping: Record<string, PropertyFeature> = {
    pool: PropertyFeature.POOL,
    garden: PropertyFeature.GARDEN,
    security: PropertyFeature.SECURITY,
    "air-conditioning": PropertyFeature.AIR_CONDITIONING,
    wifi: PropertyFeature.WIFI,
    tv: PropertyFeature.TV,
    balcony: PropertyFeature.BALCONY,
    parking: PropertyFeature.PARKING,
    garage: PropertyFeature.GARAGE,
    washer: PropertyFeature.WASHER,
    elevator: PropertyFeature.ELEVATOR,
    equipped_kitchen: PropertyFeature.EQUIPPED_KITCHEN,
  };
export const useSubmitProperty = () => {
  const { toast } = useToast();
  const {propertyId} = useParams();
  const navigate = useNavigate();
  const { publishProperty } = usePublishProperty({
    propertyId: propertyId ?? '',
  });

  const transformFormDataToPayload = (
    formData: PropertyFormData
  ): TPropertyUpdatePayload => {
    // Transform property features to enum array with proper typing
    const features = formData.propertyFeatures
      .map((feature: string) => featureMapping[feature])
      .filter((feature): feature is PropertyFeature => feature !== undefined);

    return {
      // Basic info
      title: formData.propertyTitle,
      description: formData.propertyDescription,
      propertyType: formData.propertyType as unknown as TPropertyType,
      ownershipType:
        formData.propertyAuthority as unknown as TPropertyAuthority,
      price: formData.price,

      // Location from propertyLocation
      address: formData.propertyLocation.display_name,
      city: formData.propertyLocation.display_name.split(",")[0],
      country:
        formData.propertyLocation.display_name.split(",").pop()?.trim() ?? "",
      latitude: formData.propertyLocation.lat,
      longitude: formData.propertyLocation.lon,

      // Property details
      totalFloors: formData.propertyDetails.floors.toString(),
      bedrooms: formData.propertyDetails.bedrooms.toString(),
      bathrooms: formData.propertyDetails.bathrooms.toString(),
      garages: formData.propertyDetails.garages.toString(),
      squareMeters: formData.propertyDetails.area.toString(),

      // Features array
      features: features,
    };
  };
  const handlePublish = (data: PropertyFormSchema) => {
    const formData = data;

    const payload = transformFormDataToPayload(formData);
    console.log("Transformed payload:", payload);

    publishProperty(payload, {
      onSuccess: (response) => {
        console.log("Property updated successfully:", response);

        toast({
          title: "Publishing Property",
          description: "property published successfully",
          duration: 4000,
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
        });
        navigate(`/property/${response.property.propertyType}/${response.property.id}`)
      },
      onError: (error) => {
        console.error("Failed to update property:", error);
      },
    });
  };
  return { handlePublish };
};
