// 在真实环境中如果使用了firebase这种第三方auth服务的话，本文件不需要开发者开发
import { User } from "./screens/project-list/search-panel";
const localStorageKey = "__auth_provider_token__";
export const getToken = () => window.localStorage.getItem(localStorageKey);

const apiUrl = process.env.REACT_APP_API_URL;
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};
export const login = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      handleUserResponse(await response.json());
    }
  });
};
export const register = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      handleUserResponse(await response.json());
    }
  });
};

export const logout = () => window.localStorage.removeItem(localStorageKey);
