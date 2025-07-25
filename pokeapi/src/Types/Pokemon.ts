import type { SpeciesDetails } from "./SpeciesDetails";
import type { Type } from "./Type";
import type { TypeExtendedDetails } from "./TypeExtendedDetails";

export type Pokemon = {
  id: number;
  name: string;
  types: Type[];
  sprites: Sprites;
  abilities: Abilitie[];
  height: number;
  weight: number;
  stats: Stat[];
  species: Species;
};

export type Sprites = {
  back_default: string;
  front_default: string;
};

export type Abilitie = {
  ability: AbilitieDetails;
  is_hidden: boolean;
  slot: number;
};

export type AbilitieDetails = {
  name: string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  StatDetails: StatDetails;
};

export type StatDetails = {
  name: string;
};

export type Species = {
  name: string;
  url: string;
};

export type ExpandedDataPokemon = Pokemon &
  TypeExtendedDetails &
  SpeciesDetails;
