import { useState } from "react";
import type { Character, Transformation } from "../../types/Character";
import "./characterModal.css";

interface CharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: Character;
}

export default function CharacterModal({ isOpen, onClose, character }: CharacterModalProps) {
  // Estado
  const [imagenActual, setImagenActual] = useState(character.image);
  const [showFullDesc, setShowFullDesc] = useState(false);

  // Evitar scroll del fondo
  if (isOpen) document.body.classList.add("no-scroll");
  else document.body.classList.remove("no-scroll");

  if (!isOpen) return null;

  // --- NORMALIZAR TRANSFORMACIONES ---
  type TransformationsProp = Transformation[] | { data: Transformation[] } | undefined;
  const t = character.transformations as TransformationsProp;
  const transformaciones: Transformation[] = Array.isArray(t)
    ? t
    : t && "data" in t
      ? t.data
      : [];
  // ----------------------------------

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Columna izquierda */}
        <div className="modal-left">
          <img src={imagenActual} alt={character.name} className="modal-image" />

          {transformaciones.length > 0 ? (
            <div className="transform-buttons">
              {transformaciones.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setImagenActual(t.image)}
                  className="transform-button"
                >
                  {t.name}
                </button>
              ))}
            </div>
          ) : (
            <p>No tiene transformaciones</p>
          )}

          <div className="gifs-grid">
            <div className="gif-placeholder">Gif 1</div>
            <div className="gif-placeholder">Gif 2</div>
            <div className="gif-placeholder">Gif 3</div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="modal-right">
          <h2 className="character-name">{character.name}</h2>
          <div className="character-stats">
            <p><strong>Ki:</strong> {character.ki}</p>
            <p><strong>Máx Ki:</strong> {character.maxKi}</p>
            <p><strong>Raza:</strong> {character.race}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Afiliación:</strong> {character.affiliation}</p>
          </div>

          {character.originPlanet && (
            <div className="origin-planet">
              <h3>Planeta de origen: {character.originPlanet.name}</h3>
              <img
                src={character.originPlanet.image}
                alt={character.originPlanet.name}
                className="planet-image"
              />
              <p>{character.originPlanet.description}</p>
            </div>
          )}

          <p>
            {showFullDesc || character.description.length <= 150
              ? character.description
              : `${character.description.slice(0, 150)}...`}
          </p>
          {character.description.length > 150 && (
            <button className="read-more-btn" onClick={() => setShowFullDesc(!showFullDesc)}>
              {showFullDesc ? "Leer menos" : "Leer más"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
