export type TOwner = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatar?:string;
  createdAt?: string
};

export type TReviewUser = Pick<TOwner, 'id' | 'firstName' | 'lastName' | 'avatar' | 'createdAt'>;
