import "./PokemonInfoPage.css";
import { useParams } from "react-router";
import PokemonDataOverview from "../../Organisms/PokemonDataOverview/PokemonDataOverview";
import PokemonImageOverview from "../../Organisms/PokemonImageOverview/PokemonImageOverview";
import { useCallback, useEffect, useState, type ReactElement } from "react";
import ApiGet from "../../CustomHooks/ApiGet";
import type { Pokemon } from "../../Types/Pokemon";
import type { Response } from "../../Types/Response";
import ErrorScreen from "../../Organisms/ErrorScreen/ErrorScreen";
import LoadingScreen from "../../Molecules/LoadingScreen/LoadingScreen";

export default function PokemonInfoPage(): ReactElement {
  const [data, setData] = useState<Pokemon | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const params = useParams();
  const loadPokemon = useCallback(async () => {
    const response: Response<Pokemon> = await ApiGet<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${params.id}/`
    );
    setLoading(false);
    setError(response.error);
    setData(response.data);
  }, [params]);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error || data === null) {
    return <ErrorScreen error="Pokemon could not be loaded" />;
  }
  return (
    <div className="pokemonInfoPage">
      <PokemonDataOverview pokemonData={data} />
      <PokemonImageOverview />
    </div>
  );
}
