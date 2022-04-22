import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useSpider = () => {
  return useSWR("/api/spider/start", fetcher);
};
