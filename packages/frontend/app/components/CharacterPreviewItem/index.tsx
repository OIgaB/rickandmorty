import Image from "next/image";
import { FC } from "react";

import { toSlug } from "@/app/utils/toSlug";

import Link from "next/link";
import { CharacterPreviewItemPropsType } from "./types";

export const CharacterPreviewItem: FC<CharacterPreviewItemPropsType> = ({
  id,
  image,
  name,
  gender,
}) => {
  const slug = `/characters/${id}/${toSlug(name)}`;

  return (
    <li className="border-2 border-amber-600">
      <Link href={slug}>
        <Image src={image} alt={name} width={200} height={20} priority />
        <p className="font-medium text-zinc-950">
          {"name: "}
          <span className="max-w-md text-lg leading-8 text-zinc-600">
            {name}
          </span>
        </p>
        <p className="font-medium text-zinc-950">
          {"gender: "}
          <span className="max-w-md text-lg leading-8 text-zinc-600">
            {gender}
          </span>
        </p>
      </Link>
    </li>
  );
};
