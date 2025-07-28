import { createContext } from "react";
import { type ExpandedDataPokemon } from "../Types/Pokemon";

/**
 * Context for the pokemon on the PokemonInfoPage, it holds all the data that will be displayed.
 * It start with empty files to avoid adding null on the type
 */
export const PokemonContext = createContext<ExpandedDataPokemon>({
  id: 0,
  name: "",
  types: [],
  sprites: {
    back_default: "",
    front_default: "",
  },
  abilities: [],
  height: 0,
  weight: 0,
  stats: [],
  species: {
    name: "",
    url: "",
  },
  damage_relations: {
    double_damage_from: [],
  },
  egg_groups: [],
  flavor_text_entries: [],
  evolution_chain: {
    url: "",
  },
  names: [],
  evolutions: [],
});
