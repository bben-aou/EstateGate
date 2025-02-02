import { TReviewUser } from "@interfaces/responses/ownerType";

export type TReview = {
  id: string;
  rating: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  propertyId: string;
  userId: string;
  user: TReviewUser;
};
export type TReviews = TReview[];
