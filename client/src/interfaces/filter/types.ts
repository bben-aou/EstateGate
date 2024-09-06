import { LocationData } from "@interfaces/data/location";

export type IFilter = {
  containerStyle?: string;
};

export type IFilterType = {
  propertyActionType: string;
  location: LocationData;
  propertyType: string;
  priceRange: { min: number; max: number };
};
