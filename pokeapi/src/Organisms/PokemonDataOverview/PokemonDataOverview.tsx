import type { ReactElement } from "react";
import type { Pokemon } from "../../Types/Pokemon";
import PokemonDataHeader from "../../Molecules/PokemonDataHeader/PokemonDataHeader";
import PokemonDataDetails from "../../Molecules/PokemonDataDetails/PokemonDataDetails";
import "./PokemonDataOverview.css";

export default function PokemonDataOverview({
  pokemonData,
}: {
  pokemonData: Pokemon;
}): ReactElement {
  return (
    <div className="PokemonDataOverview">
      <PokemonDataHeader number={pokemonData.id} name={pokemonData.name} />
      <PokemonDataDetails types={pokemonData.types} />
    </div>
  );
}
