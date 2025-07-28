import { useRef, useState } from "react";
import PokemonList from "../../Organisms/PokemonList/PokemonList";
import SearchSection from "../../Organisms/SearchSection/SearchSection";
import type { Pokemon } from "../../../Types/Pokemon";
import { PokeListContext } from "../../../CustomHooks/CreateContext";
import PokemonListPageTemplate from "../../Templates/PokemonListPageTemplate";

export function PokemonListPage() {
  const [visibleList, setVisibleList] = useState<Pokemon[]>([]);
  const loadedList = useRef<Pokemon[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <PokeListContext.Provider
        value={{ loadedList, visibleList, setVisibleList, inputRef }}
      >
        <PokemonListPageTemplate
          secondHeader={<SearchSection />}
          content={<PokemonList />}
        />
      </PokeListContext.Provider>
    </div>
  );
}
