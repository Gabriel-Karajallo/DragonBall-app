import { useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import type { Character } from "../../types/Character";

interface CharacterGridProps {
  characters: Character[];
}

function CharacterGrid({ characters }: CharacterGridProps) {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => setVisibleCount((prev) => prev + 10);

  if (characters.length === 0) {
    return <p className="text-center text-white mt-8">No se encontraron personajes.</p>;
  }

  const visibleCharacters = characters.slice(0, visibleCount);

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6 max-w-[1400px] mx-auto">
        {visibleCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {visibleCount < characters.length && (
        <button
          onClick={handleShowMore}
          className="mt-6 mb-10 px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition shadow-md"
        >
          Mostrar más
        </button>
      )}
    </div>
  );
}

export default CharacterGrid;
