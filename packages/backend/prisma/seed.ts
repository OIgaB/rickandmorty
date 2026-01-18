import { PrismaNeon } from '@prisma/adapter-neon';
import 'dotenv/config';
import { Episode, PrismaClient } from '../src/generated/prisma/client.js';
import { Gender, Species, Status } from '../src/generated/prisma/enums.js';

interface RM_Origin {
  name: string;
  url: string;
}

interface RM_Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: RM_Origin;
  image: string;
  episode: string[];
}

interface RM_API_Response {
  results: RM_Character[];
}

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🚀 Loading the first 10 characters from rickandmortyapi...');

  const response = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = (await response.json()) as RM_API_Response;

  const limitedCharacters = results.slice(0, 10);

  for (const char of limitedCharacters) {
    console.log(`📦 Processing character: ${char.name}`);

    const episodeData = await Promise.all(
      char.episode.map(async (url: string) => {
        const res = await fetch(url);
        return (await res.json()) as Episode;
      }),
    );

    await prisma.character.create({
      data: {
        name: char.name,
        image: char.image,
        status: char.status as Status,
        gender: char.gender as Gender,
        species: char.species as Species,
        type: char.type || 'unknown',
        origin: {
          connectOrCreate: {
            where: { name: char.origin.name },
            create: { name: char.origin.name },
          },
        },
        episodes: {
          connectOrCreate: episodeData.map((item) => ({
            where: { name: item.name },
            create: {
              name: item.name,
              episode: item.episode,
            },
          })),
        },
      },
    });
  }

  console.log('✅ DB is seeded with 10 characters!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
