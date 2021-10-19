import { useQuery } from "react-query";
import { api } from "../services/api";

type LoggedUserReturn = {
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
};

export const GET_LOGGED_USER_KEY = "GET_LOGGED_USER";

const getLoggedUser = async (): Promise<LoggedUserReturn> => {
  const { data } = await api.get<LoggedUserReturn>("/Auth/LoggedUser");

  return data;
};

export const useGetLoggedUser = () => {
  return useQuery(GET_LOGGED_USER_KEY, () => getLoggedUser());
};
