export type SpeciesDetails = {
  egg_groups: EggGroup[];
  flavor_text_entries: flavorTextEntry[];
  evolution_chain: { url: string };
};

export type EggGroup = {
  name: string;
};

export type flavorTextEntry = {
  flavor_text: string;
};
