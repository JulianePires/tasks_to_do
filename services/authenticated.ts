import Cookie from "js-cookie";

export const TOKEN_KEY = "_ttdaccess";
export const REFRESH_TOKEN_KEY = "_ttdrefresh";

export const isAuthenticated = () => Cookie.get(TOKEN_KEY) !== null;

export const getToken = () => Cookie.get(TOKEN_KEY);

export const getRefreshToken = () => Cookie.get(REFRESH_TOKEN_KEY);

export const setToken = (token: string) =>
  Cookie.set(TOKEN_KEY, token, {
    expires: 15 * 60 * 60,
    sameSite: "strict",
    secure: true,
  });

export const setRefreshToken = (token: string) => {
  Cookie.set(REFRESH_TOKEN_KEY, token, {
    expires: 15 * 60 * 60,
    sameSite: "strict",
    secure: true,
  });
};

export const logout = () => {
  Cookie.remove(TOKEN_KEY);
  Cookie.remove(REFRESH_TOKEN_KEY);
};
