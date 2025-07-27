export type SpeciesDetails = {
  egg_groups: EggGroup[];
  flavor_text_entries: flavorTextEntry[];
  evolution_chain: { url: string };
  names: NameDetails[];
};

export type NameDetails = {
  language: {
    name: string;
    url: string;
  };
  name: string;
};

export type EggGroup = {
  name: string;
};

export type flavorTextEntry = {
  flavor_text: string;
};
