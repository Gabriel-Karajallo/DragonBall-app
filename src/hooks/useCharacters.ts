import { useState, useEffect } from "react";
import type { Character } from "../types/Character";
import { getAllCharactersPage } from "../services/characterService";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filtered, setFiltered] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      let allCharacters: Character[] = [];
      let page = 1;
      let hasNext = true;

      while (hasNext) {
        const { items, links } = await getAllCharactersPage(page);
        allCharacters = [...allCharacters, ...items];
        if (links.next) {
          page++;
        } else {
          hasNext = false;
        }
      }

      setCharacters(allCharacters);
      setFiltered(allCharacters);
      setLoading(false);
    };

    fetchAll().catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const handleSearch = (term: string) => {
    setFiltered(
      characters.filter((char) =>
        char.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return { filtered, handleSearch, loading };
};
