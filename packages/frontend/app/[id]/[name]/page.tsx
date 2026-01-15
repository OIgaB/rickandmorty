import { CharacterItem } from "@/app/components";
import { getCharacterById } from "@/app/services/api";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    id: string;
    name: string;
  }>;
};

export default async function CharacterPage({ params }: PageProps) {
  const { id } = await params;

  const data = await getCharacterById(Number(id));

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <Link className={"link active"} href="/">
          Home
        </Link>
        <CharacterItem {...data} />
      </main>
    </div>
  );
}
