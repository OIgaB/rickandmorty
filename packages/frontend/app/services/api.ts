export const getAllCharacters = async () => {
  const baseUrl = process.env.BASE_URL;

  const res = await fetch(`${baseUrl}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to get all characters");
  }

  return res.json();
};

export const getCharacterById = async (id: number) => {
  const baseUrl = process.env.BASE_URL;

  const res = await fetch(`${baseUrl}/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to get character with id: ${id}`);
  }

  return res.json();
};
