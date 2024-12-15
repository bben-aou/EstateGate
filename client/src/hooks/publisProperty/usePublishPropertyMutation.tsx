import { TPropertyUpdatePayload } from "@/interfaces/payloads/PropertyUpdatePayload";
import { PropertyMutationResponse } from "@/interfaces/responses/updatedPropertyResponse";
import api from "@/providers/AuthProvider";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const PUBLISH_PROPERTY_KEY = "PUBLISH_PROPERTY_KEY";

type TUsePublishPropertyParams = {
  propertyId: string;
  config?: UseMutationOptions<
    PropertyMutationResponse,
    Error,
    TPropertyUpdatePayload
  >;
};

const updatePropertyApiCall =
  (propertyId: string) =>
  async (
    payload: TPropertyUpdatePayload
  ): Promise<PropertyMutationResponse> => {
    const response: AxiosResponse<PropertyMutationResponse> = await api.put(
      `/property/${propertyId}/updateProperty`,
      payload
    );
    return response.data;
  };

export const usePublishProperty = ({
  propertyId,
  config,
}: TUsePublishPropertyParams) => {
  const { mutate, data, error } = useMutation({
    mutationKey: [PUBLISH_PROPERTY_KEY],
    mutationFn: updatePropertyApiCall(propertyId),
    ...config,
  });
  return {
    publishProperty: mutate,
    data,
    error,
  };
};
