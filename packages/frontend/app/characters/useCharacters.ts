import { useQuery } from "@tanstack/react-query";
import { getAllCharacters } from "./characters.api";

export const useCharacters = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: getAllCharacters,
    staleTime: 1000 * 60 * 60,
  });
};
