import { TPropertyAuthority } from "@/enums/ownership";
import { TPropertyType } from "@/enums/propertyType";
import { PropertyFeature } from "@interfaces/formattingData/types";

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
