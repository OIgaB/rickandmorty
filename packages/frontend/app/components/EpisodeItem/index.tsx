import { FC } from "react";

import { EpisodeType } from "../types";

export const EpisodeItem: FC<EpisodeType> = ({ name, episode }) => {
  const match = episode.match(/\d+/g);
  const season = match ? parseInt(match[0], 10) : "??";
  const number = match ? parseInt(match[1], 10) : "??";

  return (
    <li className="bg-white p-3 rounded-xl border border-zinc-200 shadow-sm hover:border-amber-400 transition-colors">
      <p className="max-w-md text-lg leading-8 text-zinc-600">
        {`Season ${season}, Episode ${number}:`}
      </p>
      <p className="max-w-md text-lg leading-8 text-zinc-600">{`"${name}"`}</p>
    </li>
  );
};
