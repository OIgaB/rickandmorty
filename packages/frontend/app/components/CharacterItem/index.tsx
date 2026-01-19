import Image from "next/image";
import { FC } from "react";

import { BioInfoField } from "../BioInfoField";
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
  episodes,
}) => {
  return (
    <article className="overflow-hidden rounded-3xl bg-white/95 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-80 w-full md:h-auto md:w-1/3">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-extrabold text-zinc-900 mb-2">
              {name}
            </h1>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                status === "Alive"
                  ? "bg-green-100 text-green-700"
                  : status === "Dead"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
              }`}
            >
              ● {status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-zinc-100 pt-6">
            <BioInfoField label="Species" value={species} />
            <BioInfoField label="Gender" value={gender} />
            <BioInfoField label="Origin" value={originName} />
            <BioInfoField label="Type" value={type || "Standard"} />
          </div>
        </div>
      </div>

      {episodes.length > 0 && (
        <section className="bg-zinc-50/50 p-8 border-t border-zinc-100">
          <h2 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <span className="text-amber-500">📺</span>
            {episodes.length === 1
              ? `Featured in Episode`
              : `Featured in ${episodes.length} Episodes`}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {episodes.map((item) => (
              <EpisodeItem key={item.id} {...item} />
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};
