import { FC } from "react";

import { EpisodeType } from "../types";

export const EpisodeItem: FC<EpisodeType> = ({ name, episode }) => {
  const match = episode.match(/\d+/g);
  const season = match ? parseInt(match[0], 10) : "??";
  const number = match ? parseInt(match[1], 10) : "??";

  return (
    <li>
      <p className="max-w-md text-lg leading-8 text-zinc-600">
        {`Season ${season}, Episode ${number}: "${name}"`}
      </p>
    </li>
  );
};
