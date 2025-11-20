import { useState } from "react";
import "./characterCard.css";
import { X } from "lucide-react";
import type { Character, Transformation } from "../../types/Character";
import CharacterModal from "../CharacterModal/CharacterModal";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(character.image);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const handleTransformationClick = (transformation: Transformation) => {
    setCurrentImage(transformation.image);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImage(character.image);
    setShowFullDesc(false);
  };

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
        "
        onClick={() => setIsOpen(true)}
      >
        <div className="card-image-wrapper">
          <img src={character.image} alt={character.name} className="card-image" />
        </div>
        <div className="p-4 text-center">
          <h2 className="card-title">{character.name}</h2>
          <p><strong>Raza:</strong> {character.race}</p>
          <p><strong>Ki:</strong> {character.ki}</p>
          <p><strong>Afiliación:</strong> {character.affiliation}</p>
        </div>
      </div>

      {/* Modal */}
      <CharacterModal isOpen={isOpen} onClose={handleClose}>
        <button
          className="absolute top-2 right-2 text-gray-700"
          onClick={handleClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">{character.name}</h2>

        <img
          src={currentImage}
          alt={character.name}
          className="modal-image mb-4"
        />

        <p className="mb-2">
          {showFullDesc ? character.description : `${character.description.slice(0, 150)}...`}
        </p>
        {character.description.length > 150 && (
          <button
            className="text-blue-500 underline mb-4"
            onClick={() => setShowFullDesc(!showFullDesc)}
          >
            {showFullDesc ? "Leer menos" : "Leer más"}
          </button>
        )}

        {/* Transformaciones */}
        {character.transformations && character.transformations.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {character.transformations.map((trans) => (
              <button
                key={trans.id}
                className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 transition"
                onClick={() => handleTransformationClick(trans)}
              >
                {trans.name}
              </button>
            ))}
          </div>
        )}
      </CharacterModal>
    </>
  );
}
