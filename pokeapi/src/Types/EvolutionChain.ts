import type { Species } from "./Pokemon";

export type EvolutionChain = {
  chain: EvolutionDetails;
};

export type EvolutionDetails = {
  evolves_to: EvolutionDetails[];
  species: Species;
};
