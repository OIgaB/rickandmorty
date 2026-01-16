import { graphqlClient } from "@/app/lib/graphqlClient";
import { GET_ALL_CHARACTERS } from "../characters/characters.queries";

import { CharacterPreviewItemPropsType } from "../components/types";

interface Data {
  characters: {
    results: CharacterPreviewItemPropsType[];
  };
}

export const getAllCharacters = async () => {
  try {
    const data = await graphqlClient.request<Data>(GET_ALL_CHARACTERS);
    return data.characters.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
