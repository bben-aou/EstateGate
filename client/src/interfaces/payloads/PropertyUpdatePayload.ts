import { PropertyFeature } from "@/components/create-new-post/steps/FinalStep";
import { TPropertyAuthority } from "@/enums/ownership";
import { TPropertyType } from "@/enums/propertyType";

export type TPropertyUpdatePayload = {
  // Basic info
  title: string;
  description: string;
  propertyType: TPropertyType;
  ownershipType: TPropertyAuthority;
  price: string;
  // Location
  address: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  latitude?: string;
  longitude?: string;

  // Property details
  totalFloors: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
  squareMeters: string;
  yearBuilt?: string;

  features: PropertyFeature[];
}
