"use client";

import {
  CharacterPreviewItem,
  CharacterSkeleton,
  ErrorBlock,
} from "../components";
import { useCharacters } from "./useCharacters";

export default function CharactersClient() {
  const { data, isLoading, error, refetch } = useCharacters();

  return (
    <div>
      {isLoading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(12)].map((_, index) => (
            <CharacterSkeleton key={index} />
          ))}
        </div>
      )}
      {(error || !data) && (
        <ErrorBlock
          error={error as Error}
          errorText={"Failed to load characters"}
          refetch={refetch}
        />
      )}
      {!isLoading && data && (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {data.map((character) => (
            <CharacterPreviewItem key={character.id} {...character} />
          ))}
        </ul>
      )}
    </div>
  );
}
