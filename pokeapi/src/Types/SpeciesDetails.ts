export type SpeciesDetails = {
  egg_groups: EggGroup[];
  flavor_text_entries: flavorTextEntry[];
};

export type EggGroup = {
  name: string;
};

export type flavorTextEntry = {
  flavor_text: string;
};
