import type { TypeDetails } from "./Type";

export type TypeExtendedDetails = { damage_relations: damageRelations };

export type damageRelations = {
  double_damage_from: TypeDetails[];
};
