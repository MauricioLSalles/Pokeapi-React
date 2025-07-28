import { useRef, useState } from "react";
import PokemonList from "../../Organisms/PokemonList/PokemonList";
import SearchSection from "../../Organisms/SearchSection/SearchSection";
import type { Pokemon } from "../../Types/Pokemon";
import { PokeListContext } from "../../CustomHooks/CreateContext";
import PokemonListPageTemplate from "../../templates/PokemonListPageTemplate";

export function PokemonListPage() {
  const [list, setList] = useState<Pokemon[]>([]);
  const loadedList = useRef<Pokemon[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <PokeListContext.Provider value={{ loadedList, list, setList, inputRef }}>
        <PokemonListPageTemplate
          secondHeader={<SearchSection />}
          content={<PokemonList />}
        />
      </PokeListContext.Provider>
    </div>
  );
}
