export interface IFooterInformation {
  bedsValue: number;
  toiletsValue: number;
  dimensionsValue: string;
}

export interface IBodyInformation {
  propertyPrice: number;
  isRent: boolean;
  propertyDescription: string;
  propertyLocation: string;
}

export interface IPropertyCardInformation {
  bodyInformation: IBodyInformation;
  footerInformation: IFooterInformation;
}

export interface IPropertyCard {
  id:number;
  propertyImage: string;
  containsBadge: boolean;
  badgeLabel: string;
  propertyCardInformation: IPropertyCardInformation;
}

export type TPropertiesCards = {
  propertiesCards: IPropertyCard[];
};

export type TNearPropertiesListingCardsSmallScreens = {
  propertiesCards: IPropertyCard[];
};

export type TPropertyCard = {
  propertyCard: IPropertyCard;
};