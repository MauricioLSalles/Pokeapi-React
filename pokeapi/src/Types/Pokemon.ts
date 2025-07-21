import type { Label } from "./Label";

export type Pokemon = {
  id: number;
  name: string;
  types: Label[];
  sprites: Sprites;
  abilities: Abilitie[];
  height: number;
  weight: number;
  stats: Stat[];
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

export type species = {
  name: string;
  url: string;
};
