"use client";

import { CharacterItem, CharacterSkeleton, ErrorBlock } from "@/app/components";
import { useCharacter } from "./useCharacter";

type Props = {
  id: string;
};

export default function CharacterClient({ id }: Props) {
  const { data, isLoading, error, refetch } = useCharacter(id);

  if (isLoading) return <CharacterSkeleton />;

  if (error || !data) {
    return (
      <ErrorBlock
        error={error || new Error("Character not found")}
        refetch={refetch}
        errorText="Database Error"
      />
    );
  }

  return <CharacterItem {...data} />;
}
