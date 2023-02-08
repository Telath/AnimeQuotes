import { useQuery } from "@tanstack/react-query";

export const fetchData = async () => {
  const result = await fetch(`https://animechan.vercel.app/api/quotes`);
  const data = await result.json();
  return data;
};

export function useAnimeQuotes() {
  return useQuery(["animequotes"], fetchData);
}