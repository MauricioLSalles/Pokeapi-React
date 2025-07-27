import "./PokemonInfoPage.css";
import { useLoaderData } from "react-router-dom";
import PokemonDataOverview from "../../Organisms/PokemonDataOverview/PokemonDataOverview";
import PokemonImageOverview from "../../Organisms/PokemonImageOverview/PokemonImageOverview";
import { type ReactElement } from "react";
import type { ExpandedDataPokemon } from "../../Types/Pokemon";
import { PokemonContext } from "../../CustomHooks/PokemonContext";

export function PokemonInfoPage(): ReactElement {
  const { pokemonData }: { pokemonData: ExpandedDataPokemon } = useLoaderData();

  return (
    <div className="pokemonInfoPage">
      <PokemonContext value={pokemonData}>
        <PokemonDataOverview pokemonData={pokemonData} />
        <PokemonImageOverview pokemonData={pokemonData} />
      </PokemonContext>
    </div>
  );
}
