import { TProperty } from "@/interfaces/responses/property";
import api from "@/providers/AuthProvider";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const GET_PROPERTY_KEY = "GET_PROPERTY_KEY";


type TUseGetPropertyParams = {
  propertyId: string;
  config?: UseQueryOptions<TProperty, Error>;
};

const getPropertyApiCall = (propertyId : string) => async () => {
    const response : AxiosResponse<{property: TProperty}> =  await api.get(`/property/${propertyId}/getProperty`);
    return response.data.property;
}

export const useGetProperty = ({ propertyId, config }: TUseGetPropertyParams) => {
    const {data, isLoading , isSuccess} = useQuery({
        queryKey: [GET_PROPERTY_KEY, propertyId],
        queryFn: getPropertyApiCall(propertyId),
        enabled:  !!propertyId,
       ...config,
    })
    return {
        property: data,
        isLoading,
        isSuccess,
    };
};