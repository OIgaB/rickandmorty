import { useQuery } from "@tanstack/react-query";

import { getCharacterById } from "@/app/characters/[id]/[name]/character.api";

export const useCharacter = (id: string) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    enabled: !!id,
  });
};
