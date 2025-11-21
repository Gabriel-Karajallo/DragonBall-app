import { useState } from "react";
import type { Character, } from "../../types/Character";
import CharacterModal from "../CharacterModal/CharacterModal";
import "./characterCard.css";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <>
      {/* Tarjeta */}
      <div
        className="
          bg-white 
          rounded-xl 
          shadow-md 
          overflow-hidden 
          cursor-pointer 
          transition-all 
          hover:scale-105 
          border 
          border-transparent
          hover:border-orange-400
          ki-aura
        "
        onClick={() => setIsOpen(true)}
      >
        <div className="card-image-wrapper">
          <img src={character.image} alt={character.name} className="card-image" />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-lg font-bold text-orange-500">{character.name}</h2>
          <p className="text-sm text-gray-700">Raza: {character.race}</p>
          <p className="text-sm text-gray-700">Ki: {character.ki}</p>
          <p className="text-sm text-gray-700">Afiliación: {character.affiliation}</p>
        </div>
      </div>

      {/* Modal */}
      <CharacterModal
  key={character.id} // clave que fuerza reinicialización al cambiar de personaje
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  character={character}
/>
    </>
  );
}
