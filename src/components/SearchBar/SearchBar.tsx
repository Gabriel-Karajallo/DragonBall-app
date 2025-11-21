import { Search } from "lucide-react";
import type { ChangeEvent } from "react";
import dragonBallIcon from "../../assets/bola_dragon.png";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  selectedRace: string | null;
  setSelectedRace: (v: string | null) => void;
}

function SearchBar({ searchTerm, setSearchTerm, selectedRace, setSelectedRace }: SearchBarProps) {
  const races = ["Todos", "Saiyan", "Human", "Namekian", "Android" ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {/* Buscador */}
      <div className="w-full max-w-md mx-auto relative mt-6">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
          size={20}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Busca un personaje..."
          className="w-full pl-10 pr-4 py-2 rounded-md shadow-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
        />
      </div>

      {/* Botones de raza */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 mb-4">
        {races.map((race) => {
          const isActive = selectedRace === race;

          return (
            <button
              key={race}
              onClick={() => setSelectedRace(race === "Todos" ? null : race)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-semibold
                transition-all shadow-md border
                ${isActive
                  ? "bg-blue-700 text-white border-blue-400 scale-105"
                  : "bg-blue-500 text-white opacity-90 hover:bg-blue-600"
                }
              `}
            >
              <img src={dragonBallIcon} alt="dragon-ball" className="w-4 h-4" />
              {race}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default SearchBar;
