import { TPropertyType } from "@/enums/propertyType";
import { TOwner } from "@/interfaces/responses/ownerType";
import { TPhoto } from "@/interfaces/responses/photosType";
import { ReactNode } from "react";
import { TReviews } from "@/interfaces/responses/reviewsType";

export type TProperty = {
  id: string;
  createdAt: string;
  updatedAt: string;
  propertyType: TPropertyType;
  features: string[];
  ownershipType: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  totalFloors: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  squareMeters: number;
  yearBuilt: number;
  hasPool: boolean;
  hasGarden: boolean;
  hasSecurity: boolean;
  hasAirConditioning: boolean;
  hasWifi: boolean;
  hasTV: boolean;
  hasBalcony: boolean;
  hasParking: boolean;
  hasGarage: boolean;
  hasWasher: boolean;
  hasElevator: boolean;
  hasEquippedKitchen: boolean;
  ownerId: string;
  photos: TPhoto[];
  owner: TOwner;
  reviews?: TReviews;
  averageRating: number;
};

export type TPhotosGrid = {
  id: string;
  path: string;
  fileName: string;
  isMainPhoto: boolean;
};
export type TPhotosGridProps = {
  photos: TPhotosGrid[];
  isLoading?: boolean;
};

export type TPropertyStructureItem = {
  value: number | undefined;
  label: string;
  Icon: ReactNode;
};

export type TPropertyStructure = {
  totalFloors: TPropertyStructureItem;
  bedrooms: TPropertyStructureItem;
  bathrooms: TPropertyStructureItem;
  garages: TPropertyStructureItem;
  squareMeters: TPropertyStructureItem;
  yearBuilt: TPropertyStructureItem;
};

export type PropertyStructureArrayItem = {
  name: string;
  value: number | undefined;
  label: string;
  Icon: ReactNode;
};

export type TPropertyAboutTheSpaceProps = {
  propertyDescription?: string;
  isLoading?: boolean;
};

export type TPropertyFeaturesProps = {
  propertyFeatures: string[];
  isLoading?: boolean;
};

export type TPropertyRatingBadgeProps = {
  averageRating?: number;
  numberOfReviews?: number;
  isLoading?: boolean;
};

export type TPropertyReviewsProps = {
  reviews: TReviews;
  containerStyle?: string;
  reviewContainer?: string;
  truncateText?: boolean;
  enableShowMore?: boolean;
  numberOfReviewsToDisplay?: number;
  isLoading?: boolean;
};

export type TRatingForm = {
  rating: number;
  description: string;
};

export type TPropertyOwnerBadgeProps = {
  avatar: string;
  ownerFirstName: string;
  ownerLastName: string;
  ownerJoiningDate: string;
  ownerId: string;
  isLoading?: boolean;
  hide? : boolean;
};

export type TPropertyTitleAndPriceProps = {
  title?: string;
  price?: number | string;
  city?: string;
  propertyCreationDate?: string;
  overallRating?: number;
  isLoading?: boolean;
};

export type TPropertyOwnerInformationProps = {
  firstName: string;
  lastName: string;
  ownershipType: string;
  avatar: string;
  isLoading?: boolean;
};

export type TPropertyDetailsProps = {
  propertyStructure: PropertyStructureArrayItem[];
  isLoading?: boolean;
};

export type TPropertyLocationProps = {
  longitude?: number;
  latitude?: number;
  propertyAddress?: string;
  isLoading?: boolean;
};
