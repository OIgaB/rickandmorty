import { graphqlClient } from "@/app/lib/graphqlClient";
import { GET_CHARACTER_BY_ID } from "./character.queries";
import { CharacterItemPropsType } from "@/app/components/types";

interface Data {
  character: CharacterItemPropsType;
}

export const getCharacterById = async (id: string) => {
  try {
    const data = await graphqlClient.request<Data>(GET_CHARACTER_BY_ID, { id });
    return data.character;
  } catch (error) {
    console.error(error);
    return null;
  }
};
