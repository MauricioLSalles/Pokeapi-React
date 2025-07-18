import { useParams } from "react-router";
import "./PokemonInfoPage.css";
import { useEffect, useState, type ReactElement } from "react";
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
  async function loadPokemon() {
    const response: Response<Pokemon> = await ApiGet<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`
    );
    setLoading(false);
    setError(response.error);
    setData(response.data);
  }
  useEffect(() => {
    loadPokemon();
  }, []);
  if (error) {
    return <ErrorScreen error="Pokemon could not be loaded" />;
  }
  if (loading) {
    <LoadingScreen />;
  }
  return <div className="pokemonInfoPage"></div>;
}
