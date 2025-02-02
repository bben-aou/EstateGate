import { User } from "../providers/auth.types";

export type TReview = {
  id: string;
  rating: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  propertyId: string;
  userId: string;
  user: User;
};

export type TReviewResponseData = {
  review: TReview;
  propertyAverageRating: number;
};

export type TReviewResponse = {
  success: boolean;
  message: string;
  data: TReviewResponseData;
};
export type TAddPropertyReviewPayload = {
  rating: number;
  description: string;
  reviewOwnerId: string;
};
