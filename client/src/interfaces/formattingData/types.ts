export enum PropertyFeature {
  POOL = "POOL",
  GARDEN = "GARDEN",
  SECURITY = "SECURITY",
  AIR_CONDITIONING = "AIR_CONDITIONING",
  WIFI = "WIFI",
  TV = "TV",
  BALCONY = "BALCONY",
  PARKING = "PARKING",
  GARAGE = "GARAGE",
  WASHER = "WASHER",
  ELEVATOR = "ELEVATOR",
  EQUIPPED_KITCHEN = "EQUIPPED_KITCHEN",
}

// Form Data Types
export interface PropertyLocation {
  display_name: string;
  lat: string;
  lon: string;
}
export interface PropertyDetails {
  floors: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  area: number;
}

export interface PropertyFormData {
    propertyTitle: string;
    propertyDescription: string;
    propertyType: string;
    propertyAuthority: string;
    propertyLocation: PropertyLocation;
    propertyDetails: PropertyDetails;
    propertyFeatures: string[];
    price: string;
  }