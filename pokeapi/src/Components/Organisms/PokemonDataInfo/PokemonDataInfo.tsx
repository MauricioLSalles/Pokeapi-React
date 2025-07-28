import { useContext, type ReactElement } from "react";
import { PokemonContext } from "../../../CustomHooks/PokemonContext";
import DataInfoRow from "../../Atoms/DataInfoRow/DataInfoRow";
import DataInfoWeaknessRow from "../../Atoms/DataInfoRow/DataInfoWeaknessRow";
import type { ExpandedDataPokemon } from "../../../Types/Pokemon";
import "./PokemonDataInfo.css";

export function PokemonDataInfo(): ReactElement {
  const pokemon: ExpandedDataPokemon = useContext(PokemonContext);
  return (
    <div>
      <h2>About this Pokémon:</h2>
      <p>{pokemon.flavor_text_entries[10].flavor_text}</p>
      <ul className="PokemonDataInfo-description">
        <DataInfoRow label="Species" text={pokemon.species.name} />
        <DataInfoRow label="Height" text={pokemon.height.toString()} />
        <DataInfoRow label="Weight" text={pokemon.weight.toString()} />
        <DataInfoRow
          label="Abilities"
          text={pokemon.abilities[0].ability.name}
        />
        <DataInfoWeaknessRow
          label="weaknesess"
          weaknesses={pokemon.damage_relations.double_damage_from}
        />
      </ul>
    </div>
  );
}
