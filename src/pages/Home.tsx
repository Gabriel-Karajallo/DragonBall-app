import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import CharacterGrid from "../components/CharacterGrid/CharacterGrid";
import { useCharacters } from "../hooks/useCharacters";

function Home() {
  const {
    filtered,
    loading,
    searchTerm,
    setSearchTerm,
    selectedRace,
    setSelectedRace,
  } = useCharacters();

  return (
    <div className="min-h-screen text-white px-4">
      <Header />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedRace={selectedRace}
        setSelectedRace={setSelectedRace}
      />

      {loading ? (
        <p className="text-center mt-8">Cargando personajes...</p>
      ) : (
        <CharacterGrid characters={filtered} />
      )}
    </div>
  );
}

export default Home;
