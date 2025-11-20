import { Search } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Levantamos el valor al padre
  };

  return (
    <div className="w-full max-w-md mx-auto relative mt-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" size={20} />
      <input
  type="text"
  value={searchTerm}
  onChange={handleChange}
  placeholder="Busca un personaje..."
  className="w-full pl-10 pr-4 py-2 rounded-md shadow-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
/>
    </div>
  );
}

export default SearchBar;
