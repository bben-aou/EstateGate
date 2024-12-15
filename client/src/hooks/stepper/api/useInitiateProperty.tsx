import { IInitiatePropertyResponse } from "@/interfaces/stepper/types";
import api from "@/providers/AuthProvider";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const INITIATE_PROPERTY_KEY = "INITIATE_PROPERTY_KEY";

type useInitiatePropertyParams = {
  config?: UseMutationOptions<IInitiatePropertyResponse, Error>;
};

const apiCall = async (): Promise<IInitiatePropertyResponse> => {
    const response: AxiosResponse<IInitiatePropertyResponse> = await api.post(
    `/property/initialize`,
  );
  return response.data;
};

export const useInitiateProperty = ({ config }: useInitiatePropertyParams) => {
  const { data, error, mutate } = useMutation({
    mutationKey: [INITIATE_PROPERTY_KEY],
    mutationFn: apiCall,
    ...config,
  });
  return {
    initiateProperty: mutate,
    data,
    error,
  };
};
