import { createContext } from "react";
import type { Pokemon } from "../Types/Pokemon";

export type ListContext = {
  loadedList: React.RefObject<Pokemon[]>;
  visibleList: Pokemon[];
  setVisibleList: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

/**
 * @prop list: Is a state that holds the list of the visible pokemons to the user
 * @prop setList: Set the list of visble pokemons
 * @prop loadedList: Is the list with all the pokemons that where fetched from the PokeApi
 * @prop inputRef: Refers to the search input
 */
export const PokeListContext = createContext<ListContext | null>(null);
