import type { Character } from "../types/Character";

interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

interface Links {
  first: string;
  previous: string | null;
  next: string | null;
  last: string;
}

interface CharactersResponse {
  items: Character[];
  meta: Meta;
  links: Links;
}

// Llamada para una página específica
export const getAllCharactersPage = async (page = 1, limit = 10): Promise<CharactersResponse> => {
  const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Error al obtener personajes");
  const data: CharactersResponse = await res.json();
  return data;
};
