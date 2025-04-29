import { User } from "@/interfaces/providers/auth.types";
import api from "@/providers/AuthProvider";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const GET_USER_INFORMATION_KEY = "GET_USER_INFORMATION_KEY";

type TUseGetUserInformationParams = {
  userId: string;
  config?: UseQueryOptions<User, Error>;
};

const getUserInformationAPi = (userId: string) => async () => {
  const response: AxiosResponse<{ user: User }> = await api.get(
    `/user/${userId}/getUser`
  );
  return response.data.user;
};
export const useGetUserInformation = ({
  userId,
  config,
}: TUseGetUserInformationParams) => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [GET_USER_INFORMATION_KEY, userId],
    queryFn: getUserInformationAPi(userId),
    enabled: !!userId,
    ...config,
  });
  return {
    userInformation: data,
    isLoading,
    isSuccess,
  };
};
