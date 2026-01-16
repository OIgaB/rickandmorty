"use client";

import { CharacterPreviewItem } from "../components";
import { CharacterPreviewItemPropsType } from "../components/types";
import { useCharacters } from "./useCharacters";

export default function CharactersClient() {
  const { data, isLoading, error } = useCharacters();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {!isLoading &&
        data &&
        data.map(
          ({ id, image, name, gender }: CharacterPreviewItemPropsType) => (
            <CharacterPreviewItem
              key={id}
              id={id}
              image={image}
              name={name}
              gender={gender}
            />
          )
        )}
    </div>
  );
}
