"use client";

import { CharacterItem } from "@/app/components";
import { useCharacter } from "./useCharacter";

type Props = {
  id: string;
};

export default function CharacterClient({ id }: Props) {
  const { data, isLoading, error } = useCharacter(id);

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Character not found</p>;

  return <div>{!isLoading && data && <CharacterItem {...data} />}</div>;
}
