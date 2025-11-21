import dragonBallIcon from "../../assets/bola_dragon.png";
import gokuSombra from "../../assets/goku_sombra.png";
import "./searchbar.css";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  selectedRace: string | null;
  setSelectedRace: (v: string | null) => void;
}

function SearchBar({ searchTerm, setSearchTerm, selectedRace, setSelectedRace }: SearchBarProps) {
  const races = ["Todos", "Saiyan", "Human", "Namekian", "Android"];

  return (
    <>
      {/* Buscador */}
      <div className="w-full max-w-4xl mx-auto relative mb-12">
        <div className="anime-input-container">
          <div className="anime-shadow-input"></div>

          <button className="anime-button">
            <img src={gokuSombra} alt="dragon-ball" className="w-8 h-8" /> {/* Imagen */}
          </button>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Goku, Vegeta, Piccolo..."
            className="anime-search"
          />
        </div>
      </div>


      {/* Botones */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 mb-4">
        {races.map((race) => {
          const isActive = selectedRace === race;

          return (
            <button
              key={race}
              onClick={() => setSelectedRace(race === "Todos" ? null : race)}
              className={`filter-button ${isActive ? "active" : ""}`} // <--- aquí aplicas CSS
            >
              <div className="filter-button-inner">
                <span>
                  <img src={dragonBallIcon} alt="dragon-ball" className="w-6 h-6" />
                  {race}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default SearchBar;
