import { useRef, useState } from "react";
import PokemonList from "../../Organisms/PokemonList/PokemonList";
import SearchSection from "../../Organisms/SearchSection/SearchSection";
import { PokeListContext } from "../../../CustomHooks/CreateContext";
import PokemonListPageTemplate from "../../Templates/PokemonListPageTemplate";
import type { SimplifiedPokemon } from "../../../Types/Pokemon";

export function PokemonListPage() {
  const [visibleList, setVisibleList] = useState<SimplifiedPokemon[]>([]);
  const loadedList = useRef<SimplifiedPokemon[]>([]);
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
