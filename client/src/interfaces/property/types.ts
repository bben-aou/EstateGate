export enum EPropertyType {
  APARTMENT = "APARTMENT",
  HOUSE = "HOUSE",
  VILLA = "VILLA",
  RIAD = "RIAD",
  FARM = "FARM",
  STUDIO = "STUDIO",
  DUPLEX = "DUPLEX",
  TERRAIN = "TERRAIN",
  LOCAL_COMMERCIAL = "LOCAL_COMMERCIAL",
  BUREAU = "BUREAU",
  BUILDING = "BUILDING",
  ROOM = "ROOM",
  HOTEL = "HOTEL",
}

export enum EOwnershipType {
  OWNER = "OWNER",
  TENANT = "TENANT",
  AGENT = "AGENT",
  OTHER = "OTHER",
}

export enum EPropertyFeature {
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

export interface TUser {
  id: string;
  googleId?: string;
  githubId?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
  password: string;
  avatar?: string;
  createdAt: Date;
  properties: TProperty[];
}

export interface TPropertyPhoto {
  id: string;
  fileName: string;
  originalName: string;
  path: string;
  mimetype: string;
  size: number;
  isMainPhoto: boolean;
  uploadedAt: Date;
  propertyId: string;
}

export interface TProperty {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  propertyType: EPropertyType;
  ownershipType: EOwnershipType;
  price: number;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country: string;
  latitude?: number;
  longitude?: number;
  title: string;
  description: string;
  totalFloors: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  squareMeters: number;
  yearBuilt?: number;
  features: EPropertyFeature[];
  photos: TPropertyPhoto[];
  owner: TUser;
  ownerId: string;
}
