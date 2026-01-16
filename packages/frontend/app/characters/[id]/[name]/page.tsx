
import Link from "next/link";
import CharacterClient from "./character-client";

type PageProps = {
  params: Promise<{
    id: string;
    name: string;
  }>;
};

export default async function CharacterPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <Link className={"link active"} href="/">
          Home
        </Link>
        <Link className={"link active"} href="/characters">
          All Characters
        </Link>
        <CharacterClient id={id} />
      </main>
    </div>
  );
}
