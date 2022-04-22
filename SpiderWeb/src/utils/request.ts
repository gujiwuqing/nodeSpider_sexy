import qs from "qs";
import { BASE_URL } from "./config";

interface Config extends RequestInit {
  data?: object;
}

const request = async (
  endpoint: string,
  { data, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET")
    endpoint += `?${qs.stringify(data)}`;
  else config.body = JSON.stringify(data || {});

  return window
    .fetch(`${BASE_URL}${endpoint}`, config)
    .then(async (response) => {
      // if (response.status === 401) {
      //   await logout();
      //   window.location.reload();
      //   return Promise.reject({ message: "请重新登录" });
      // }
      const data = await response.json();
      if (response.ok) return data;
      else return Promise.reject(data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default request;
