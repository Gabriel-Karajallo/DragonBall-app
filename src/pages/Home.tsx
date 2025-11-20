import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import CharacterGrid from "../components/CharacterGrid/CharacterGrid";
import { useCharacters } from "../hooks/useCharacters";

function Home() {
  const { filtered, handleSearch, loading } = useCharacters();

  return (
    <div className="min-h-screen text-white px-4">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p className="text-center mt-8">Cargando personajes...</p>
      ) : (
        <CharacterGrid characters={filtered} />
      )}
    </div>
  );
}

export default Home;
