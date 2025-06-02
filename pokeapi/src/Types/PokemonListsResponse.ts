import type { PokemonUrlResponse } from "./PokemonUrlResponse";

export type PokemonListsResponse =
  {
    count:number;
    next:string;
    previous:string;
    result:PokemonUrlResponse[];
  };