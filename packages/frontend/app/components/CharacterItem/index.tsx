import Image from "next/image";
import { FC } from "react";

import { EpisodeItem } from "../EpisodeItem";
import { CharacterItemPropsType } from "./types";

export const CharacterItem: FC<CharacterItemPropsType> = ({
  image,
  name,
  gender,
  status,
  species,
  origin: { name: originName },
  type,
  episode,
}) => {
  const episodeTitle =
    episode.length === 1
      ? `Meet ${name} in the following Episode: `
      : episode.length > 1
        ? `Meet ${name} in the following Episodes: `
        : "";

  return (
    <div>
      <Image src={image} alt={name} width={200} height={20} priority />
      <h1 className="max-w-md text-lg leading-8 text-zinc-600">{name}</h1>
      <p className="font-medium text-zinc-950">
        {"gender: "}
        <span className="max-w-md text-lg leading-8 text-zinc-600">
          {gender}
        </span>
      </p>
      <p className="font-medium text-zinc-950">
        {"status: "}
        <span className="max-w-md text-lg leading-8 text-zinc-600">
          {status}
        </span>
      </p>
      <p className="font-medium text-zinc-950">
        {"species: "}
        <span className="max-w-md text-lg leading-8 text-zinc-600">
          {species}
        </span>
      </p>
      <p className="font-medium text-zinc-950">
        {"origin name: "}
        <span className="max-w-md text-lg leading-8 text-zinc-600">
          {originName}
        </span>
      </p>
      {episode.length > 0 && (
        <>
          <p className="font-medium text-zinc-950">{episodeTitle}</p>
          <ul>
            {episode.map((item) => (
              <EpisodeItem key={item.id} {...item} />
            ))}
          </ul>
        </>
      )}

      <p className="font-medium text-zinc-950">
        {"type: "}
        <span className="max-w-md text-lg leading-8 text-zinc-600">{type}</span>
      </p>
    </div>
  );
};
