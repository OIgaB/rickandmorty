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
    <li className="list-none">
      <article className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:shadow-lg">
        <Link href={slug} className="block cursor-pointer">
          <div className="aspect-square overflow-hidden bg-zinc-100">
            <Image
              src={image}
              alt={`Character ${name}`}
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-107"
            />
          </div>
          <div className="p-4 text-center sm:text-left">
            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
              {name}
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-500">
              Gender: <span className="text-zinc-700">{gender}</span>
            </p>
          </div>
        </Link>
      </article>
    </li>
  );
};
