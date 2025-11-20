import CharacterCard from "../CharacterCard/CharacterCard";
import type { Character } from "../../types/Character";

interface CharacterGridProps {
  characters: Character[];
}

function CharacterGrid({ characters }: CharacterGridProps) {
  if (characters.length === 0) {
    return <p className="text-center text-white mt-8">No se encontraron personajes.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
