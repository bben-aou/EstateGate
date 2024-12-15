export interface IInitiatePropertyResponse {
  message: string;
  property: {
    id: string;
    createdAt: string;
    updatedAt: string;
    propertyType: string;
    ownershipType: string;
    price: number;
    address: string;
    city: string;
    state: string;
    zipCode: number | null;
    country: string;
    latitude: number | null;
    longitude: number | null;
    title: string;
    description: string;
    totalFloors: number;
    bedrooms: number;
    bathrooms: number;
    garages: number;
    squareMeters: number;
    yearBuilt: number | null;
    hasPool: boolean;
    hasGarden: boolean;
    hasSecurity: boolean;
    hasAirConditioning: boolean;
    hasCentralHeating: boolean;
    hasInternet: boolean;
    isFurnished: boolean;
    ownerId: string;
  };
}
