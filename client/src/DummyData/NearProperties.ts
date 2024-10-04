import { IPropertyCard } from "@/interfaces/components/basedOnYourLocationSection/nearPropertiesCards/types";
import propertyVilla from "@assets/propertyVilla.jpg";
import apartment from "@assets/appartement.jpg";

export const propertiesCards: IPropertyCard[] = [
  {
    id: 1,
    propertyImage: propertyVilla,
    containsBadge: true,
    badgeLabel: "Popular",
    propertyCardInformation: {
      bodyInformation: {
        propertyPrice: 1234567,
        isRent: true,
        propertyDescription:
          "Luxurious villa with stunning ocean views and modern amenities.",
        propertyLocation: "2699 Green Valley, Highland Lake, FL",
      },
      footerInformation: {
        bedsValue: 3,
        toiletsValue: 3,
        dimensionsValue: "5x7 m²",
      },
    },
  },
  {
    id: 2,
    propertyImage: apartment,
    containsBadge: false,
    badgeLabel: "",
    propertyCardInformation: {
      bodyInformation: {
        propertyPrice: 890000,
        isRent: false,
        propertyDescription:
          "Cozy apartment in the heart of downtown, perfect for young professionals.",
        propertyLocation: "456 Main Street, Metro City, CA",
      },
      footerInformation: {
        bedsValue: 2,
        toiletsValue: 1,
        dimensionsValue: "4x6 m²",
      },
    },
  },
  {
    id: 3,
    propertyImage: propertyVilla,
    containsBadge: true,
    badgeLabel: "New",
    propertyCardInformation: {
      bodyInformation: {
        propertyPrice: 2500,
        isRent: true,
        propertyDescription:
          "Spacious family home with a large backyard and modern kitchen.",
        propertyLocation: "789 Oak Avenue, Suburbia, NY",
      },
      footerInformation: {
        bedsValue: 4,
        toiletsValue: 2,
        dimensionsValue: "6x8 m²",
      },
    },
  },
  {
    id: 4,
    propertyImage: propertyVilla,
    containsBadge: false,
    badgeLabel: "",
    propertyCardInformation: {
      bodyInformation: {
        propertyPrice: 450000,
        isRent: false,
        propertyDescription:
          "Charming cottage in a quiet neighborhood, ideal for retirees.",
        propertyLocation: "123 Pine Lane, Woodland Hills, OR",
      },
      footerInformation: {
        bedsValue: 2,
        toiletsValue: 1,
        dimensionsValue: "3x5 m²",
      },
    },
  },
  {
    id: 5,
    propertyImage: propertyVilla,
    containsBadge: true,
    badgeLabel: "Luxury",
    propertyCardInformation: {
      bodyInformation: {
        propertyPrice: 5000000,
        isRent: false,
        propertyDescription:
          "Elegant mansion with high-end finishes and a private pool.",
        propertyLocation: "1010 Beverly Drive, Platinum Estates, CA",
      },
      footerInformation: {
        bedsValue: 6,
        toiletsValue: 5,
        dimensionsValue: "10x12 m²",
      },
    },
  },
  {
    id: 6,
    propertyImage: propertyVilla,
    containsBadge: true,
    badgeLabel: "Luxury",
    propertyCardInformation: {
      bodyInformation: {
        propertyPrice: 5000000,
        isRent: false,
        propertyDescription:
          "Elegant mansion with high-end finishes and a private pool.",
        propertyLocation: "1010 Beverly Drive, Platinum Estates, CA",
      },
      footerInformation: {
        bedsValue: 6,
        toiletsValue: 5,
        dimensionsValue: "10x12 m²",
      },
    },
  },
];
