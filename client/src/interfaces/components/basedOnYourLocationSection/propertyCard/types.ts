import {
  IBodyInformation,
  IFooterInformation,
  IPropertyCard,
  IPropertyCardInformation,
} from "@/interfaces/components/basedOnYourLocationSection/nearPropertiesCards/types";

export type TPropertyCard = {
  propertyCard: IPropertyCard;
};

export type TPropertyImageContainer = {
  containerClassName?: string;
  imageClassName?: string;
  imageUrl: string;
};

export type TBadge = {
  containerClassName?: string;
  label: string;
  labelClassName?: string;
};

export type TPropertyCardInformation = {
  propertyCardInfo: IPropertyCardInformation;
};

export type TPropertyCardBody = {
  bodyInformation: IBodyInformation;
};

export type TPropertyCardDivider = {
  dividerClassName?: string;
};

export type TPropertyCardFooter = {
  footerInformation: IFooterInformation;
};
