import { useContext, type ReactElement } from "react";
import "./InputSearch.css";
import { PokeListContext } from "../../../CustomHooks/CreateContext";
import type { Pokemon } from "../../../Types/Pokemon";

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

export default function InputSearch({
  className = "",
  ...ElementProps
}: Props): ReactElement {
  const pokeListContext = useContext(PokeListContext);

  /**
   * Set the list of visible pokemons with the pokemons that match the search input parameter
   */
  function search(): void {
    pokeListContext?.setVisibleList(loadPokemonsThatMatch());
  }

  /**
   * Fillter over all of the loaded pokemons searching the ones which name contains the search input parameter
   * @returns A list of pokemons that match. In case that the context doesnt exist returns an empty array
   */
  function loadPokemonsThatMatch(): Pokemon[] {
    return (
      pokeListContext?.loadedList.current.filter((pokemon) =>
        pokemon.name.includes(pokeListContext.inputRef.current?.value ?? "")
      ) ?? []
    );
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter") search();
  }

  return (
    <div className={`${className} inputSearch`} {...ElementProps}>
      <img src="/icons/searchIcon.png" width={20} height={20} alt="" />
      <input
        onKeyUp={handleKeyPress}
        ref={pokeListContext?.inputRef}
        id="search"
        placeholder="What Pokémon are you looking for?"
      />
    </div>
  );
}
