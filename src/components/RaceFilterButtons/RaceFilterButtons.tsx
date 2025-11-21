import dragonBallIcon from "../../assets/bola_dragon.png"; 

interface RaceFilterButtonsProps {
  selectedRace: string;
  onSelectRace: (race: string) => void;
}

export default function RaceFilterButtons({
  selectedRace,
  onSelectRace,
}: RaceFilterButtonsProps) {
  const races = ["Todos", "Saiyan", "Human", "Namekian", "Android", ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4 mb-4">
      {races.map((race) => {
        const isActive = selectedRace === race;

        return (
          <button
            key={race}
            onClick={() => onSelectRace(race)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-semibold
              transition-all shadow-md border
              ${isActive 
                ? "bg-blue-700 text-white border-blue-400 scale-105" 
                : "bg-blue-500 text-white opacity-90 hover:bg-blue-600"
              }
            `}
          >
            <img
              src={dragonBallIcon}
              alt="dragon-ball"
              className="w-4 h-4"
            />
            {race}
          </button>
        );
      })}
    </div>
  );
}
