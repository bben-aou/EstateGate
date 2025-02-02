import {
  TAddPropertyReviewPayload,
  TReviewResponse,
} from "@/interfaces/payloads/addPropertyReview";
import api from "@/providers/AuthProvider";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const ADD_REVIEW_KEY = "ADD_REVIEW_KEY";

type TAddPropertyReviewParams = {
  propertyId: string;
  config?: UseMutationOptions<
    TReviewResponse,
    Error,
    TAddPropertyReviewPayload
  >;
};

const addPropertyReviewApiCall =
  (propertyId: string) => async (payload: TAddPropertyReviewPayload) => {
    const response: AxiosResponse<TReviewResponse> = await api.put(
      `/property/${propertyId}/addPropertyReview`,
      payload
    );
    return response.data;
  };

export const useAddPropertyReviewMutation = ({
  propertyId,
  config,
}: TAddPropertyReviewParams) => {
  const { mutate, data, error } = useMutation({
    mutationKey: [ADD_REVIEW_KEY],
    mutationFn: addPropertyReviewApiCall(propertyId),
    ...config,
  });
  return {
    addPropertyReview: mutate,
    data,
    error,
  };
};
