import { useContext, type ReactElement } from "react";
import type { ExpandedDataPokemon } from "../../Types/Pokemon";
import { PokemonContext } from "../../CustomHooks/PokemonContext";
import DataInfoRow from "../../Atoms/DataInfoRow/DataInfoRow";

const DESCRIPTION_TEXT =
  "The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.";

export function PokemonStatsDetails(): ReactElement {
  const pokemon: ExpandedDataPokemon = useContext(PokemonContext);
  console.log(pokemon);
  return (
    <div>
      <p>{DESCRIPTION_TEXT}</p>
      <ul className="PokemonDataInfo-description">
        <DataInfoRow label="HP" text={pokemon.species.name} />
        <DataInfoRow label="Attack" text={pokemon.height.toString()} />
        <DataInfoRow label="Defense" text={pokemon.weight.toString()} />
        <DataInfoRow label="Sp. Atk" text={pokemon.weight.toString()} />
        <DataInfoRow label="Sp. Def" text={pokemon.weight.toString()} />
        <DataInfoRow label="Speed" text={pokemon.weight.toString()} />
        <DataInfoRow label="Total" text={pokemon.weight.toString()} />
      </ul>
    </div>
  );
}
