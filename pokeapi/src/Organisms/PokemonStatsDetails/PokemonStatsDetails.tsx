import { useContext, type ReactElement } from "react";
import type { ExpandedDataPokemon } from "../../Types/Pokemon";
import { PokemonContext } from "../../CustomHooks/PokemonContext";
import DataStatsRow from "../../Atoms/DataStatsRow/DataStatsRow ";

const DESCRIPTION_TEXT =
  "The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.";

export function PokemonStatsDetails(): ReactElement {
  const pokemon: ExpandedDataPokemon = useContext(PokemonContext);
  console.log(pokemon);
  return (
    <div>
      <p>{DESCRIPTION_TEXT}</p>
      <ul className="PokemonDataInfo-description">
        {pokemon.stats.map((stat) => (
          <DataStatsRow
            key={stat.stat.name}
            label={stat.stat.name}
            value={stat.base_stat}
          />
        ))}
      </ul>
    </div>
  );
}
