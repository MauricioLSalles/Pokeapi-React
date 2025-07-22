import "./PokemonInfoPage.css";
import { useLoaderData } from "react-router-dom";
import PokemonDataOverview from "../../Organisms/PokemonDataOverview/PokemonDataOverview";
import PokemonImageOverview from "../../Organisms/PokemonImageOverview/PokemonImageOverview";
import { type ReactElement } from "react";
import type { Pokemon } from "../../Types/Pokemon";
import type { Response } from "../../Types/Response";
import ErrorScreen from "../../Organisms/ErrorScreen/ErrorScreen";

export function PokemonInfoPage(): ReactElement {
  const { pokemonResponse }: { pokemonResponse: Response<Pokemon> } =
    useLoaderData();

  if (pokemonResponse.error || pokemonResponse.data === null) {
    return <ErrorScreen error="Pokemon could not be loaded" />;
  }
  return (
    <div className="pokemonInfoPage">
      <PokemonDataOverview pokemonData={pokemonResponse.data} />
      <PokemonImageOverview pokemonData={pokemonResponse.data} />
    </div>
  );
}
