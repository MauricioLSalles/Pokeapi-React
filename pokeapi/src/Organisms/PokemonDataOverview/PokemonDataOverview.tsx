import type { ReactElement } from "react";
import type { Pokemon } from "../../Types/Pokemon";
import PokemonDataHeader from "../../Molecules/PokemonDataHeader/PokemonDataHeader";

export default function PokemonDataOverview({
  pokemonData,
}: {
  pokemonData: Pokemon;
}): ReactElement {
  return (
    <div>
      <PokemonDataHeader number={pokemonData.id} name={pokemonData.name} />
    </div>
  );
}
