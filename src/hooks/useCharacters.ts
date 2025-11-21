import { useState, useEffect, useMemo } from "react";
import type { Character } from "../types/Character";
import { getAllCharactersPage } from "../services/characterService";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRace, setSelectedRace] = useState<string | null>(null);

  // Cargar personajes al inicio
  useEffect(() => {
    const fetchAll = async () => {
      let all: Character[] = [];
      let page = 1;

      while (true) {
        const { items, links } = await getAllCharactersPage(page);
        all = [...all, ...items];
        if (!links.next) break;
        page++;
      }

      setCharacters(all);
      setLoading(false);
    };

    fetchAll().catch(console.error);
  }, []);

  // 🟡 Filtrado reactivo sin usar setFiltered (useMemo)
  const filtered = useMemo(() => {
    let result = characters;

    if (searchTerm.trim()) {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRace && selectedRace !== "Todos") {
      result = result.filter(
        (c) => c.race?.toLowerCase() === selectedRace.toLowerCase()
      );
    }

    return result;
  }, [characters, searchTerm, selectedRace]);

  return {
    filtered,
    loading,
    searchTerm,
    setSearchTerm,
    selectedRace,
    setSelectedRace,
  };
};
