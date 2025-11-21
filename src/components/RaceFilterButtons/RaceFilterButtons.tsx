import dragonBallIcon from "../../assets/bola_dragon.png"; 
import "./FilterButton.css";
interface RaceFilterButtonsProps {
  selectedRace: string | null;
  onSelectRace: (race: string | null) => void; // <-- aceptar null
}

export default function RaceFilterButtons({ selectedRace, onSelectRace }: RaceFilterButtonsProps) {
  const races = ["Todos", "Saiyan", "Human", "Namekian", "Android"];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4 mb-4">
      {races.map((race) => {
        const isActive = selectedRace === race;

        return (
          <button
  key={race}
  onClick={() => onSelectRace(race === "Todos" ? null : race)}
  className={`filter-button ${isActive ? "active" : ""}`}
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
  );
}
