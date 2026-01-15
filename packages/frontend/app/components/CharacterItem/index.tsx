import Image from "next/image";
import { FC } from "react";

import { CharacterItemPropsType } from "./types";

export const CharacterItem: FC<CharacterItemPropsType> = ({
  image,
  name,
  gender,
  status,
  species,
  origin,
  episode,
  type,
  location,
  url,
}) => (
  <div>
    <Image src={image} alt={name} width={200} height={20} priority />
    <h1 className="max-w-md text-lg leading-8 text-zinc-600">{name}</h1>
    <p className="font-medium text-zinc-950">
      {"gender: "}
      <span className="max-w-md text-lg leading-8 text-zinc-600">{gender}</span>
    </p>
    <p className="font-medium text-zinc-950">
      {"status: "}
      <span className="max-w-md text-lg leading-8 text-zinc-600">{status}</span>
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
        {origin.name}
      </span>
    </p>
    <p className="font-medium text-zinc-950">
      {"origin url: "}
      <a href={origin.url} className="max-w-md text-lg leading-8 text-zinc-600">
        {origin.url}
      </a>
    </p>
    <p className="font-medium text-zinc-950">
      {"episodes: "}
    </p>
    <ul>
      {episode.length > 0 &&
        episode.map((item: string, index: number) => (
          <li key={index}>
            <a href={item} className="max-w-md text-lg leading-8 text-zinc-600">
              {item}
            </a>
          </li>
        ))}
    </ul>
    {/* https://rickandmortyapi.com/api/episode/34 */}
    {/* "name": "One Crew Over the Crewcoo's Morty",
"air_date": "November 24, 2019", */}
    <p className="font-medium text-zinc-950">
      {"type: "}
      <span className="max-w-md text-lg leading-8 text-zinc-600">{type}</span>
    </p>
    <p className="font-medium text-zinc-950">
      {"location name: "}
      <span className="max-w-md text-lg leading-8 text-zinc-600">
        {location.name}
      </span>
    </p>
    <p className="font-medium text-zinc-950">
      {"location url: "}
      <a
        href={location.url}
        className="max-w-md text-lg leading-8 text-zinc-600"
      />
    </p>
    <p className="font-medium text-zinc-950">
      {"url: "}
      <a href={url} className="max-w-md text-lg leading-8 text-zinc-600">
        {url}
      </a>
    </p>
  </div>
);
