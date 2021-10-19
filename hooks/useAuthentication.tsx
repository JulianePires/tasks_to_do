import { useMutation } from "react-query";
import { api } from "../services/api";

interface RegisterInfo {
  username: string;
  email: string;
  passwordHash: string;
}

interface LoginInfo {
  email: string;
  passwordHash: string;
}

const register = async (info: RegisterInfo) => {
  const { data } = await api.post("/Auth/Register", info);

  return data;
};

export const useRegister = () => {
  return useMutation(register);
};

const login = async (info: LoginInfo): Promise<string> => {
  const { data } = await api.post<string>("/Auth/Token", info);

  return data;
};

export const useLogin = () => {
  return useMutation(login);
};
