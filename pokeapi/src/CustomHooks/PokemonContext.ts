import { createContext } from "react";
import { type Pokemon } from "../Types/Pokemon";

export const PokemonContext = createContext<Pokemon>({
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
});
